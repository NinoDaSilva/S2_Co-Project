import { createRouter, createWebHistory} from 'vue-router'
import accueil from '@/pages/index.vue'
import about from '@/pages/about.vue'
import connexion from '@/pages/connexion.vue'
import conseils from '@/pages/conseils.vue'
import contact from '@/pages/contact.vue'
import evenements from '@/pages/events.vue'
import mentions from '@/pages/mentions.vue'
import recettes from '@/pages/recettes.vue'
import partenaires from '@/pages/partenaires.vue'
import produits from '@/pages/produits.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: accueil },
        { path: '/about', component: about },
        { path: '/connexion', component: connexion },
        { path: '/conseils', component: conseils },
        { path: '/contact', component: contact },
        { path: '/evenements', component: evenements },
        { path: '/mentions', component: mentions },
        { path: '/recettes', component: recettes },
        { path: '/partenaires', component: partenaires },
        { path: '/produits', component: produits },
    ]
  })
  
  export default router