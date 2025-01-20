<template>
  <div class="card shadow card-product">
    <img :src="'/images/' + product.gambar" class="card-img-top" alt="Image" />
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <!-- Corrected class and fixed the title -->
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>
      <router-link class="btn btn-success" :to="`/foods/${product.id}`"> <b-icon-cart class="mr-2"></b-icon-cart>Pesan </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"], // Ensure product is passed correctly as a prop
};
</script>

<style>
/* Add styles if necessary */
</style>
