<template>
  <div>
    <NavbarView />
    <div class="container">
      <HeroView />
      <div class="row">
        <div class="col mt-4">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <!--  v-model="search" isi harus sama dengan yang di return -->
            <input 
            v-model="search" 
            @keyup="searchFood" 
            type="text" class="form-control" 
            placeholder="Cari Makanan Kesukaan Anda..." 
            aria-label="Cari Makanan Kesukaan Anda..." 
            aria-describedby="basic-addon1" />
            
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <!-- v-for adalah perulangan -->
        <!-- kenapa untuk array bernama product dikarenakan product sudah dideklrasikan di cardview berupa data props -->
        <div class="col-md-3 mt-4" v-for="product in products" :key="product.id">
          <!-- Pass 'product' as the prop -->
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroView from "@/components/HeroView.vue";
import NavbarView from "@/components/Navbar.vue";
import CardProduct from "@/components/CardView.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavbarView,
    HeroView,
    CardProduct,
  },
  data() {
    return {
      // Data property untuk menyimpan daftar produk
      products: [],
      search: '',
    };
  },
  methods: {
    // Method untuk mengatur data 'products'
    setProduct(data) {
      this.products = data;
    },
    // Method untuk mencari makanan
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((response) => {
          // Handle success
          this.setProduct(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error fetching products:", error);
        });
    },
  },
  mounted() {
    // Fetch data dari API ketika komponen di-mount
    axios
      .get("http://localhost:3000/products")
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
/* Tambahkan style khusus untuk komponen ini jika diperlukan */
</style>
