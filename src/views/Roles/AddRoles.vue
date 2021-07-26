<template>
  <div>
    <input type="text" v-model="name" />
    <button class="btn btn-secondary">Agregar</button>
    
  </div>
</template>

<script>
export default {
    name: "addRoles",
    data(){
         return {
             name : "",
         }
    }
}
</script>
