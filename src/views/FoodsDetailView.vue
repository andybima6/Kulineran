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
            <hr>
            <form action="" class="mt-4">
              <div class="form-group">
                <label for="jumlah_pemesanan">Jumlah Pesanan</label>
                <input type="number" id="jumlah_pemesanan" class="form-control" />
              </div>
              <div class="form-group">
                <label for="keterangan">Keterangan</label>
                <textarea placeholder="Keterangan : Pedas, Sedang" class="form-control" id="keterangan"></textarea>
              </div>
              <button type="submit" class="btn btn-success"><b-icon-cart-check class="mr-2"></b-icon-cart-check>Submit</button>
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
      product: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    // Fetch data dari API ketika komponen di-mount
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => {
        // Handle success
        this.setProduct(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching products:", error);
      });
  },
};
</script>

<style>
/* Add styles if necessary */
</style>
