<template>
  <div class="Keranjang">
    <div class="container">
      <NavbarView />
      <div class="row">
        <div class="col-md-12">
            <h2>Keranjang</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavbarView from "@/components/Navbar.vue";

export default {
  name: "KeranjangView",
  components: {
    NavbarView,
   
  },
};
</script>

<style></style>
