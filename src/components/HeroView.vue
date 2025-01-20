<template>
    <div class="hero">
      <!-- desktop -->
       <!-- md ukuran mobile sedangkan sm ukurang desktop -->
      <div class="d-md-block d-none">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Delicious Food Menu</strong><br />in Your Gadget</h2>
                <p>Ayo segera pilih dan pesan makanan favorit anda</p>
                <router-link to="/foods" class="btn btn-lg btn-success">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Pesan
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/images/kulineran.png" width="100%" alt="Kulineran" />
          </div>
        </div>
      </div>
  
      <!-- Mobile -->
      <div class="d-sm-block d-md-none">
        <div class="row mt-4">
          <div class="col-12 mb-4">
            <img src="@/assets/images/kulineran.png" width="100%" alt="Kulineran" />
          </div>
          <div class="col-12">
            <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                <h2><strong>Delicious Food Menu</strong><br />in Your Gadget</h2>
                <p>Ayo segera pilih dan pesan makanan favorit anda</p>
                <router-link to="/foods" class="btn btn-lg btn-success">
                  <b-icon-arrow-right class="mr-2"></b-icon-arrow-right>Pesan
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HeroView",
  };
  </script>
  