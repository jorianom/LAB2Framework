<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

            <a class="navbar-brand" href="/principal">Lab 2</a>

            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                <li class="nav-item active">

                    <router-link class="nav-link" active-class="active" to="/principal" exact><a>Home</a></router-link>

                </li>

                <li class="nav-item">

                    <router-link class="nav-link" active-class="active" to="/mis-cursos" exact><a>Mis Cursos</a></router-link>

                </li>

                <li class="nav-item">

                    <router-link class="nav-link" active-class="active" to="/principal/roles" exact><a>Mis Roles</a></router-link>

                </li>

                <li class="nav-item">

                    <router-link class="nav-link" active-class="active" to="/principal/nuevo-rol" exact><a>Asignar nuevo rol</a></router-link>

                </li>

                <li class="nav-item">

                    <div v-if="rol">

                        <router-link class="nav-link" active-class="active" to="/principal/crear-curso" exact><a>Crear un curso</a></router-link>

                    </div>

                    <div v-else>

                        <a class="nav-link disabled">Crear un curso</a>

                    </div>

                </li>

            </ul>

        </div>

    </nav>

</template>

<script>
 import axios from 'axios'; export default { name: "AddCourse", data() { return { rol: false, isActive: false } }, beforeCreate() { const rolesPath = '/mis-roles';
axios.get(this.$store.state.backURL + rolesPath, { params: { access_token: localStorage.getItem("token-ingesoft") } }).then(response => { if (response.status
!== 200) { alert("Error en la petición. Intente nuevamente") } else { const result = response.data.filter((rol) => rol.id == 2); console.log(result.length)
if (result.length > 0) { this.rol = true } } }).catch(response => { alert("No es posible conectar con el backend en este momento"); this.$router.push(
{ name: 'login' }); }); } }
</script>

<style scoped>
a.router-link-exact-active {
    color: rgb(17, 117, 180) !important;
}

a {
    text-decoration: none;
}
</style>

