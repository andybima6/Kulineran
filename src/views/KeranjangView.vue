<template>
  <div class="Keranjang">
    <NavbarView />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Food Order</li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>
            Keranjang
            <strong>Saya</strong>
          </h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img :src="'/images/' + keranjang.product.gambar" alt="" class="img-fluid" />
                  </td>
                  <td>
                    <strong>{{ keranjang.product.nama }}</strong>
                  </td>
                  <td>{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>
                  <td>{{ keranjang.jumlah_pemesanan }}</td>
                  <td align="right">Rp. {{ keranjang.product.harga }}</td>
                  <td align="right">
                    <strong>Rp. {{ keranjang.product.harga * keranjang.jumlah_pemesanan }}</strong>
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon-trash @click="hapusKeranjang(keranjang.id)"></b-icon-trash>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga :</strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
  name: "KeranjangView",
  components: {
    NavbarView,
  },
  data() {
    return {
      keranjangs: [], // Store the cart data
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.success("Sukses hapus Keranjang", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Re-fetch keranjangs after deleting
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => {
              this.setKeranjangs(response.data);
            })
            .catch((error) => {
              console.error("Error fetching keranjangs:", error);
            });
        })
        .catch((error) => {
          console.error("Error deleting keranjang:", error);
        });
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => {
        console.log("Keranjang data:", response.data); // Log the response to inspect the structure
        this.setKeranjangs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching keranjangs:", error);
      });
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((total, keranjang) => {
        return total + keranjang.product.harga * keranjang.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
