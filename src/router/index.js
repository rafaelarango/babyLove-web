import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/login",
    name: "Login",

    component: () => import("../views/Login.vue"),
    meta: {
      isPublic: true,
    },
  },

  {
    path: "/register",
    name: "Register",

    component: () => import("../views/Register.vue"),
    meta: {
      isPublic: true,
    },
  },

  {
    path: "/inicio",
    name: "Inicio",

    component: () => import("../views/Inicio.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/contactos",
    name: "Contactos",

    component: () => import("../views/Contactos.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/productos",
    name: "Productos",

    component: () => import("../views/Productos.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/cambios",
    name: "Cambios",

    component: () => import("../views/Cambios.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/categorias",
    name: "Categorias",

    component: () => import("../views/Categorias.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/descuentos",
    name: "Descuentos",

    component: () => import("../views/Descuentos.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/roles",
    name: "Roles",

    component: () => import("../views/Roles/Roles.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/roles/add",
    name: "AddRoles",

    component: () => import("../views/Roles/AddRoles.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/galeria",
    name: "Galeria",

    component: () => import("../views/Galeria.vue"),
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/sugerencias",
    name: "Segurencias",

    component: () => import("../views/Sugerencias.vue"),
    meta: {
      isPublic: false,
    },
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("userApp");
  if (to.matched.some((record) => !record.meta.isPublic)) {
    if (!token) {
      next({
        path: "/login",
      });
    }
    next();
  }
  next();
});

export default router;
