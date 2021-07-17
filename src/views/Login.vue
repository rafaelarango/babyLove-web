<template>
  <div class="container w-75 bg-primary mt-5 rounded shadow">
    <div class="row align-items-stretch">
      <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
      <div class="col-6 bg-white p-5 rounded-end">
        <div class="text-end"></div>
        <img src="" width="48" alt="logo" />
        <h2 class="fw-bold text-center py-5">Bienvenido</h2>

        <form action="#">
          <div class="mb-4">
            <label for="email" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" name="email" />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Correo electronico</label>
            <input type="password" class="form-control" name="password" />
          </div>
          <div class="mb-4 form-check">
            <input type="checkbox" name="connectd" class="form-check-input" />
            <label for="connected" class="form-check-label"
              >Mantenerme conectado</label
            >
          </div>
          <div class="d-grid">
            <button type="submit" class="btn btn-primary">
              Iniciar sesion
            </button>
          </div>
          <div class="my-3">
            <span>No tienes cuenta? <a href="#">Registrate</a></span> <br />
            <span> <a href="#">Recuperar password</a></span>
          </div>
        </form>
        <div class="container w-100 my-5">
          <div class="row text-center">
            <div class="col-12">Iniciar sesion</div>
          </div>
          <div class="row">
            <div class="col">
              <button class="btn btn-outline-primary w-100 my-1">
                <div class="row align-items-center">
                  <div class="col-2 d-none d-md-block">
                    <img src="" width="32" alt="face" />
                  </div>
                  <div class="col-12 col-md-10 text-center">
                    Facebook
                  </div>
                </div>
              </button>
            </div>
            <div class="col">
              <button class="btn btn-outline-danger w-100 my-1">
                <div class="row align-items-center">
                  <div class="clo-2 d-none d-md-block">
                    <img src="" width="32" alt="face" />
                  </div>
                  <div class="col-12 col-md-10 text-center">
                    Google
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <h1 class="text-primary " >Login</h1>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />
    <button @click="login">Sign in</button>
    <router-link to="/register">Sign up</router-link> -->
  <!-- <p>{{getData}}</p> -->
  <!-- </div> -->
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
      errorMessage: "",
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

        const userLogin = await axios.post(
          "http://localhost:3000/api/users/login",
          user
        );
        console.log(
          "Optenemos usuari con axios" + JSON.stringify(userLogin.data)
        ); // POR QUE NOS IMPRIME OBJETO OBJETO

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
<style>
  body{
    background: #ffe259;
    background: linear-gradient(to right, #ffa751, #ffe259)
  }
  .bg{
    background-image: url();
    background-position: center center;
  }
</style>
