import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import FormationDetailView from '../views/FormationDetailView.vue'
import FavorisView from '../views/FavorisView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/catalogue', name: 'catalogue', component: CatalogueView },
  { path: '/formation/:id', name: 'formation-detail', component: FormationDetailView, props: true },
  { path: '/favoris', name: 'favoris', component: FavorisView },
  { path: '/contact', name: 'contact', component: ContactView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
