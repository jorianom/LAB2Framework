<template>

    <div
        class="card col-6 col-md-6 col-lg-4 text-center border border-primary rounded form-inline offset-sm-1 offset-md-1 mt-5"
        style="width: 18rem;"
    >

        <div class="card-body">

            <h5 class="card-title">

                <b>Nombre Curso:</b>
                 {{ enrolled.courseName }}
            </h5>

            <h6 class="card-subtitle mb-2 text-muted">{{ enrolled.courseDurationHours }} hr</h6>

            <p class="card-text">{{ enrolled.role.roleName }}</p>

        </div>

    </div>

</template>

<script>
 export default { name: "Course", props: { enrolled: Object } }
</script>

<style scoped>

</style>

