import { createRouter, createWebHistory} from 'vue-router'
import Accueil from '@/pages/index.vue';
import about from '@/pages/about.vue';
import contact from '@/pages/contact.vue';
import connexion from '@/pages/connexion.vue';
import events from '@/pages/events.vue';
import mentions from '@/pages/mentions.vue';
import partenaires from '@/pages/partenaires.vue';
import produits from '@/pages/produits.vue';
import recettes from '@/pages/recettes.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/index', name: 'home', component: Accueil },
    { path: '/about', name: 'about', component: about },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/connexion', name: 'connexion', component: connexion },
    { path: '/events', name: 'events', component: events },
    { path: '/mentions', name: 'mentions', component: mentions },
    { path: '/partenaires', name: 'partenaires', component: partenaires },
    { path: '/produits', name: 'produits', component: produits },
    { path: '/recettes', name: 'recettes', component: recettes },
  ]
})

export default router