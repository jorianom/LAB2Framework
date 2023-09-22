<template>
  <div class="container-fluid mt-2">
  <Navbar></Navbar>
    <h1>Bienvenido al dummy {{user}}</h1>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {getAuthenticationToken} from '@/dataStorage';
import Navbar from '../components/Navbar.vue';

  export default{
    name: "Home",
    data() {
        return {
            user: localStorage.getItem("user"),
        };
    },
    beforeCreate() {
        if (!getAuthenticationToken()) {
            this.$router.push({ name: 'login' });
        }
    },
    components: { Navbar }
}
</script>

<style>

</style>
