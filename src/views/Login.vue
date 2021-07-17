<template>
  <div>
    <h1>Login</h1>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />
    <button @click="login">Sign in</button>
    <router-link to="/register">Sign up</router-link>
    <!-- <p>{{getData}}</p> -->
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Login",
  data() {
    return {
      email: "arango",
      password: "123",
      // getData: {}
      error: false,
      errorMessage: ""
    };
  },
  methods: {
   async login() {
      //console.log(`Email: ${this.email}, Password: ${this.password}`);
      
      // const dataGet =  await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      // console.log(dataGet);
      // this.getData = dataGet.data;

      try {

        const user = {
          email: this.email,
          password: this.password,
        };
        console.log("Vamos a imprimir el usuario", user);

        const userLogin = await axios.post("http://localhost:3000/api/users/login", user);
        console.log("Optenemos usuari con axios" + JSON.stringify(userLogin.data))  // POR QUE NOS IMPRIME OBJETO OBJETO

        this.error = false;
        this.errorMessage = "";
        localStorage.setItem("userApp", JSON.stringify(userLogin.data));

        this.$router.push({
          name: "Home",
        });

        
      } catch (error) {
        this.error = true;
        this.errorMessage = error.response.data.message; // como aceder al mensage
        console.error(error);
        console.log(error.response.data.message);
      }
      
    },
  },
};
</script>
<style></style>

