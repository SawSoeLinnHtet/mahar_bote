import { createRouter, createWebHistory } from "vue-router"
import Home from '@/views/HomeView'
import Lists from '@/views/ListsView'
import Info from "@/views/InfoView"
import Details from '@/views/DetailsView'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/lists",
    name: "lists",
    component: Lists,
  },
  {
    path: "/info",
    name: "info",
    component: Info,
  },
  {
    path: "/details/:season_id",
    props: true,
    component: Details,
    name: 'details'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
