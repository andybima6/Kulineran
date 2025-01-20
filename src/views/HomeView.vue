<template>
  <div class="home">
    <NavbarView/>
    <div class="container">

      <HeroView/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarView from '@/components/Navbar.vue';
import HeroView from '@/components/HeroView.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarView,
    HeroView
  }
}
</script>
