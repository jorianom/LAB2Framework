<template>
  <div class="container-fluid mt-2">
      <h2>Mis Roles</h2>
    <div class="card col-12 text-center" style="border: none;">
      <div class="card-header border border-primary rounded mt-2" v-for="role in roles" :key="role.id">
        <h1>{{ role.roleName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';

const requestPath = '/mis-roles';

export default {
  name: 'Roles',
  data( ){
    return {
      roles: [{id: 1, roleName: 'My Role'}]
    }
  },
  beforeCreate(){
    axios.get( this.$store.state.backURL + requestPath, { params: { access_token: getAuthenticationToken( ) } } )
        .then( response => {
          if( response.status !== 200 ){
            alert( 'Error Obteniendo sus roles' );
          }else{
            this.roles = response.data;
          }
        } ).catch( error => {
          alert( 'Error en la petición' );
          console.log( error );
        } );
  }
}
</script>

<style scoped>

</style>
