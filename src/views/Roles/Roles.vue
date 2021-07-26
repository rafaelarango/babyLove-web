<template>
  <div class="container bg-secondary text-white mt-5">
    <p>{{roles}}</p>
    <!-- <button class="btn btn-primary">Agregar</button> -->

    <!-- https://programmerclick.com/article/22181395269/                 crear una tabla -->


    <router-link to="/roles/add">Agregar</router-link>
    <table class="table mt-5">
      <thead>
        <tr>
         
          <th scope="col">Id</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rol, i) in roles" :key="i">
         
          <td>{{ rol.id }}</td>
          <td>{{ rol.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rolesService from '../../services/roles/index'
export default {
  name: "Roles",
  data() {
    return {
      roles: [],
    };
  },

created() {
  this.getRoles()
},

methods:{
  async getRoles() {
     try {

      //  const rolData = await rolesService.list();
      //  this.roles = rolData.data;
       const {data} = await rolesService.list();
       this.roles = data;

     } catch (error) {
       console.error(error)
     }
  }
}
};
</script>
<style></style>
