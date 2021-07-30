<template>
  <div class="container">
    <h1>Estas en actualizar</h1>
    <p>{{ paramsRolId }}</p>
    <p>{{ rol }}</p>
    <input
      type="text"
      class="form-control my-3"
      v-model="rol.name"
      @keyup.enter="updateRol"
    />
    <button
      class="btn btn-primary mb-4 d-flex justify-content-start"
      @click="updateRol"
    >
      Actualizar
    </button>
  </div>
</template>

<script>
import rolesService from "../../services/roles/index";

export default {
  name: "EditROl",
  data() {
    return {
      paramsRolId: "",
      rol: {},
    };
  },
  created() {
    this.paramsRolId = this.$route.params.idRol;
    this.getOneRole();
  },
  methods: {
    async getOneRole() {
      try {
        const dataRol = await rolesService.listOne(this.paramsRolId);

        this.rol = dataRol.data;
        console.log(`data de rol`, this.rol);
      } catch (error) {
        console.error(error);
      }
    },
    async updateRol() {
      await rolesService.edit(this.rol.id, this.rol.name);
      this.$router.push({
        name: "Roles",
      });
    },
  },
};
</script>
