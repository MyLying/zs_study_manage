import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/home.vue";
import Main from "@/views/main/main.vue";
import Login from "@/views/login.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/", component: Home, name: "Home", children: [
      { path: '/', component: Main },
      { path: 'main', component: Main },
    ]
  },
  { path: "/login", component: Login, name: "Login" },
]

const router = new VueRouter({
  routes
})

export default router
