<template>
    <div class="pesanan-sukses">
      <NavbarView />
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col text-center">
            <img src="/images/menunggu.png" width="300" />
            <h2><strong>Sukses!!</strong></h2>
            <h4>Pesanan Anda segera diproses <br> Selamat Menunggu</h4>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarView from "@/components/Navbar.vue";
  
  export default {
    name: "PesananSukses",
    components: {
      NavbarView,
    },
  };
  </script>
  
  <style>
  </style>