<template>
  <div>
    <h1>Register</h1>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />
    <button>Sing in</button>
    <router-link to="/login">Sign up</router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style></style>
