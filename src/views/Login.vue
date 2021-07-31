<template>
  <div class="backgroun-login py-3">
    <div class="container w-75 bg-primary  rounded shadow ">
      <div class="row align-items-stretch">
        <div
          class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"
        ></div>
        <div class="col-6 bg-white p-4 rounded-end">
          <div class="text-end"></div>
          <img
            class="py-3"
            src="../../public\assets\img\logo.png"
            width="140"
            alt="logo"
          />
          <div class="mb-3">
            <label for="email" class="form-label">Correo electronico</label>
            <input
              type="email"
              class="form-control"
              name="email"
              v-model="email"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="password"
            />
          </div>
          <div class="mb-4 form-check">
            <input type="checkbox" name="connected" class="form-check-input" />
            <label for="connected" class="form-check-label"
              >Mantenerme conectado</label
            >
          </div>
          <div class="d-grid">
            <button class="btn btn-primary" @click="login">
              Iniciar sesion
            </button>
          </div>
          <div class="my-3">
            <span
              >No tienes cuenta?
              <router-link to="/register">Registrate</router-link>
            </span>
            <br />
            <span> <a href="#">Recuperar contraseña</a></span>
          </div>
          <div class="container w-100 ">
            <div class="row text-center">
              <div class="col-12">Iniciar sesion</div>
            </div>
            <div class="row">
              <div class="col">
                <button class="btn btn-outline-primary w-100 my-1">
                  <div class="row align-items-center">
                    <div class="col-2 d-none d-md-block">
                      <img
                        src="../../public\assets\img\face.png"
                        width="32"
                        alt="face"
                      />
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
                    <div class="col-2 d-none d-md-block">
                      <img
                        src="../../public\assets\img\google.png"
                        width="32"
                        alt="Google"
                      />
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
  </div>
</template>

<script>
import usersService from "../services/Users/index";

export default {
  name: "Login",
  data() {
    return {
      email: "arangoramirezrafael@gmail.com",
      password: "rafarafarafa",
      error: false,
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        const user = {
          email: this.email,
          password: this.password,
        };

        const userLogin = await usersService.login(user);

        this.error = false;
        this.errorMessage = "";
        localStorage.setItem("userApp", JSON.stringify(userLogin.data));

        this.$router.push({
          name: "Home",
        });
      } catch (error) {
        this.error = true;
        this.errorMessage = error.response.data.message;
        console.log(error.response);
        console.log(error.response.data.message);
      }
    },
  },
};
</script>
<style>
.backgroun-login {
  background: #ffe259;
  background: linear-gradient(to right, #ffa751, #ffe259);
  height: 100vh;
}
.bg {
  background-image: url();
  background-position: center center;
}
</style>
