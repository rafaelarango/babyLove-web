<template>
  <div>
    <h1>Login</h1>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />
    <button @click="login">Sing in</button>
    <router-link to="/register">Sign up</router-link>
    <p>{{getData}}</p>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      getData: {}
    };
  },
  methods: {
   async login() {
      //console.log(`Email: ${this.email}, Password: ${this.password}`);
      
      const dataGet =  await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(dataGet);
      this.getData = dataGet.data;
    },
  },
};
</script>
<style></style>
