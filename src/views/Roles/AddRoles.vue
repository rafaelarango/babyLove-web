<template>
  <div class="container mt-4">
    <input
      type="text"
      class="form-control my-3"
      v-model="name"
      @keyUp.enter="name"
    />
    <button
      class="btn btn-primary mb-4 d-flex justify-content-start"
      @click="addRol"
    >
      Agregar
    </button>
  </div>
</template>

<script>
import rolesService from "../../services/roles/index";

export default {
  name: "addRoles",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    async addRol() {
      try {
        const rol = {
          name: this.name,
        };

        await rolesService.add(rol);

        this.$router.push({
          name: "Roles",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
