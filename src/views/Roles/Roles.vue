<template>
  <div class="container  text-primary text-center ">
    <!-- <p>{{roles}}</p> -->
    <!-- <button class="btn btn-primary">Agregar</button> -->

    <!-- https://programmerclick.com/article/22181395269/                 crear una tabla -->

    <h1 class="mt-2">Roles</h1>

    <table class="table  table-success table-striped mt-5 ">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Actiones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rol, i) in roles" :key="i">
          <!-- las columnas van dentro de un row -->
          <td class="col">{{ rol.id }}</td> 
          <td class="col-7">{{ rol.name }}</td>
          <td class="col-5">
            <div > 
              <button class="btn btn-primary btn-sm me-3 "  @click="editRol(rol.id)" >
                Editar
              </button>
              <button class="btn btn-danger btn-sm" @click="eliminarRol">
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <router-link to="/roles/add" class="btn btn-primary mt-2">Agregar</router-link>
      <!-- <button class="btn btn-primary mb-4 d-flex justify-content-start" @click="addRol">Agregar</button> -->
    </table>
  </div>
</template>

<script>
import rolesService from "../../services/roles/index";
export default {
  name: "Roles",
  data() {
    return {
      roles: [],
    };
  },

  created() {
    this.getRoles();
  },

  methods: {
    async getRoles() {
      try {
        //  const rolData = await rolesService.list();
        //  this.roles = rolData.data;
        const { data } = await rolesService.list();
        this.roles = data;
      } catch (error) {
        console.error(error);
      }
    },

    async editRol(id) {
      try {
       // console.log(`boton de editar rol ok`, id)

      this.$router.push({
          name: "editRoles",
          params: {
            idRol: id
          }
        });


      } catch (error) {
        console.error(error);
      }
    },

    async eliminarRol() {
      try {
        console.log(`boton de eliminar rol ok`)
        
      } catch (error) {
        console.error(error)
      }
    }


  },
};
</script>
<style></style>
