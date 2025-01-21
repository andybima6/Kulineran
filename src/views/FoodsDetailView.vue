<template>
  <div>
    <NavbarView />
    <div class="food-detail">
      <div class="container">
        <!-- Breadcrumb -->
        <div class="row mt-5">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/" class="text-dark">Home</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="/foods" class="text-dark">Foods</router-link>
                </li>
                <li class="breadcrumb-item">
                  <router-link to="" class="text-dark">Food Order</router-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-6">
            <img :src="'/images/' + product.gambar" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6">
            <h2>
              <strong>{{ product.nama }}</strong>
            </h2>
            <h4>
              Harga : Rp. <strong> {{ product.harga }}</strong>
            </h4>
            <hr />
            <form v-on:submit.prevent class="mt-4">
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesanan</label>
                <input type="number" id="jumlah_pemesanan" class="form-control" v-model="pesan.jumlah_pemesanan" />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea v-model="pesan.keterangan" placeholder="Keterangan : Pedas, Sedang" class="form-control" id="keterangan"></textarea>
              </div>
              <button @click="pemesanan" type="submit" class="btn btn-success"><b-icon-cart-check class="mr-2"></b-icon-cart-check>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodsDetail",
  components: {
    NavbarView,
  },
  data() {
    return {
      product: {}, // Stores selected product data
      pesan: {}, // Stores order data
    };
  },
  methods: {
    // Sets the product data from the API response
    setProduct(data) {
      this.product = data;
    },

    // Sends the order data to the API
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.product = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({path:"/keranjang"})
            this.$toast.success("Sukses Masuk Ke Ranjang", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => {
            console.log("Error:", err);
          });
      } else {
        this.$toast.error("Jumlah Pemesanan Harus Di Isi", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    // Fetch product data from the API when the component is mounted
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => {
        // Set the product data from the API response
        this.setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  },
};
</script>

<style scoped>
/* Add any necessary CSS styles here */
</style>