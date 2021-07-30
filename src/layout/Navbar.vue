<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Baby Love</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/inicio" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contactos" class="nav-link"
                >Contactos</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link to="/productos" class="nav-link text-primary"
                  >Productos</router-link
                >
                <router-link to="/cambios" class="nav-link text-primary"
                  >Cambios</router-link
                >
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/categorias" class="nav-link"
                >Categorias</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/descuentos" class="nav-link"
                >Descuentos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/roles" class="nav-link">Roles</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mas
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <router-link to="/galeria" class="nav-link text-primary"
                  >Galeria</router-link
                >
                <router-link to="/sugerencias" class="nav-link text-primary"
                  >Sugerencias</router-link
                >
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn btn-primary" @click="cerrarSecion">
              Cerrar secion
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    cerrarSecion() {},
  },
};
</script>
