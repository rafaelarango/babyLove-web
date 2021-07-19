<template>
<div class="row no-guttess m-0">
  <div class="col-xl-5 col-lg-12">

  </div>
  <div class="col-xl-7 col-lg-12 d-flex">
    <div class="container align-self-center">
      <h1 class="font-weight-bold">Crea tu cuenta gratis</h1>
      <div class="form-gruop">
           <div class="row">
            <div class="col">
              <button class="btn btn-outline-primary w-100 my-1">
                <div class="row align-items-center">
                  <div class="col-2 d-none d-md-block">
                    <img src="../../public\assets\img\face.png" width="32" alt="face" />
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
                    <img src="../../public\assets\img\google.png" width="32" alt="Google" />
                  </div>
                  <div class="col-12 col-md-10 text-center">
                    Google
                  </div>
                </div>
              </button>
            </div>
          </div>
      </div>
      <p class="text-muted mb-5">Ingresa la siguiente informacion para registrarte</p>
      
        
          <div class="form-group col-md-8">
            <label class="form-label font-weight-bold">Nombre completo <span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="name" placeholder="Tu nombre" />
          </div>
        <div class="form-row mb-3 d-flex">
          <div class="form-group col-md-5 mx-4">
            <label class="form-label font-weight-bold">Tipo de documento <span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="type_document" placeholder="Tu " />
          </div>
          <div class="form-group col-md-5">
            <label class="form-label font-weight-bold">Numero de documento<span class="text-danger">*</span></label>
            <input type="text" class="form-control" v-model="document" placeholder="Numero de documento" />
          </div>
        </div>
        <div class="form-group col-md-6">
          <label class="form-label font-weight-bold">Direccion<span class="text-danger">*</span></label>
          <input type="text" class="form-control" v-model="direction" placeholder="Tu direccion" />

          <label class="form-label font-weight-bold">Telefono<span class="text-danger">*</span></label>
          <input type="text" class="form-control" v-model="phone" placeholder="Tu numero telefonico" />
        
        <div class="form-row mb-3 d-flex">
          <div class="form-group col-md-5 mx-4">
            <label class="form-label font-weight-bold">Correo electronico<span class="text-danger">*</span></label>
            <input type="email" class="form-control" v-model="email" placeholder="Ingresa un correo electronico" />
         </div>
          <div class="form-group col-md-5">
            <label class="form-label font-weight-bold">Contraseña<span class="text-danger">*</span></label>
            <input type="password" class="form-control" v-model="password" placeholder="Ingresa una contraseña" />
          </div>
        </div>
        </div>
        <div class="my-3">
            <span>No tienes cuenta? <router-link to="/login">Ingresar</router-link> </span> <br />
            <span> <a href="#">Recuperar contraseña</a></span>
          </div>
      
    </div>
  </div>
</div>

  <!-- <div>
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
  </div> -->
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
<style>
   body{
    background: #ffe259;
    background: linear-gradient(to right, #ffa751, #ffe259);    
  }
</style>
