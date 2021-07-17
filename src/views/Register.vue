<template>
  <div>
    <h1>Register</h1>
    <p>name</p>
    <input type="text" v-model="name" />
    <p>type_document</p>
    <input type="text" v-model="type_document" />
    <p>document</p>
    <input type="number" v-model="document" />
    <p>direction</p>
    <input type="text" v-model="direction" />
    <p>phone</p>
    <input type="number" v-model="phone" />
    <p>email</p>
    <input type="text" v-model="email" />
    <p>password</p>
    <input type="text" v-model="password" />
    <button @click="register">Sing in</button>
    <router-link to="/login">Sign up</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      name: "Rafael",
      type_document: "cc",
      document: "1017223204",
      direction: "ck 54 n 9-20",
      phone: "3044019640",
      email: "arangoramirezrafael@gmail.com",
      password: "maximiliano2020",
    };
  },
  methods: {
    async register() {
      try {
        const user = {
          id_rol: 1,
          name: this.name,
          type_document: this.type_document,
          document: this.type_document,
          direction: this.direction,
          phone: this.phone,
          email: this.email,
          password: this.password,
        };
        console.log(`Vamos a imprimir el usuario`, user);
        const userRegister = await axios.post(
          "http://localhost:3000/api/users/register",
          user
        );
        console.log(
          `Imprimir usuarios registrados en la base de datos`,
          userRegister
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style></style>
