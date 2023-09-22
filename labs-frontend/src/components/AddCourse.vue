<template>
  <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
    <div class="mt-5">
      <form class="border border-primary rounded form-inline" @submit="associate">

        <h2 class="col-12 text-center text-primary mt-3 mb-5">Crear nuevo curso</h2>

        <div class="form-group col-12">
          <label for="courseName" class="custom-label col-md-3">Nombre del Curso</label>
          <input id="courseName" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="text"
                 placeholder="Nombre del Curso" v-model="courseName" required/>
        </div>
        <div class="form-group col-12">
          <label for="durationHours" class="custom-label col-md-3">Duración del Curso en Horas</label>
          <input id="durationHours" class="form-control col-12 col-sm-10 col-md-7 offset-sm-1" type="number"
                 placeholder="Duración del Curso" v-model="durationHours" required/>
        </div>
        <div class="col-12 mb-3">
          <button class="col-sm-6 col-md-4 offset-sm-5 offset-md-7 btn btn-primary" type="submit">
            Crear Curso
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "AddCourse",
    data( ){
      return {
        courseName: '',
        durationHours: 1,
        rol: "",
      }
    },
    beforeCreate( ){      
      const rolesPath = '/mis-roles';
      axios
        .get( this.$store.state.backURL + rolesPath , {
              params: {
                access_token: localStorage.getItem( "token-ingesoft" )
              }
            })
        .then( response => {
          if( response.status !== 200 ){
            alert( "Error en la petición. Intente nuevamente" )
          }else{
            const result = response.data.filter((rol) => rol.id == 2);
            console.log(result.length)
            if(result.length == 0){
              this.$router.push( {name: 'home'} );
              alert("No tienes permisos para esta operación")
            }
            console.log(response.data)
          }
        }).catch( response => {
          alert( "No es posible conectar con el backend en este momento" );
          this.$router.push( {name: 'login'} );
        });
     },
    methods: {
      associate( event ){
        axios
          .post( this.buildURI( ), {
              courseName: this.courseName,
              durationHours: this.durationHours
            }, {
              params: {
                access_token: localStorage.getItem( "token-ingesoft" )
              }
            }
          ).then( response => {
            if( response.status !== 201 ){
              alert( "Error en la petición. Intente nuevamente" );
            }else{
              alert( "Se ha creado exitosamente el nuevo curso" );
            }
          }).catch( response => {
            if( response.response.status === 401 ){
              alert( "¡Ups! Al parecer la sesión ha finalizado" );
              this.$router.push( {name: 'login'} );
            }else if ( response.response.status === 400 ){
              alert( "¿?" );
            }else{
              console.log(response.response)
              console.log(response.response.data.error)
              alert( "No es posible conectar con el backend en este momento" );
            }
          });
        event.preventDefault( );
      },
      buildURI( ){
        let associatePath = "/profesor/crear-curso";
        return this.$store.state.backURL + associatePath;
      }
    }

  }
</script>

<style scoped>
  .form-inline .form-group{
    margin-bottom: 1rem;
  }
</style>
