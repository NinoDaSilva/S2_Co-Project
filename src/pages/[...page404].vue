<script setup lang="ts">
import Hero from '@/components/Hero.vue'
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Page introuvable - 404'
}) 
//
</script>

<template>
  <Hero
    title="Page introuvable"
    imgPath="/img/hero/about.webp"
    imgAlt="Image bannière page 404"
  >
  </Hero>

    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <h1 class="mb-4 text-3xl font-bold tracking-tight text-brun">Erreur 404</h1>
      <p class="max-sm:mt-8 text-base font-semibold text-vert">Oups !</p>
      <p class="mt-6 sm:text-base sm:leading-7 text-vertFonce">Désolé, nous n'avons pas trouvé la page que vous recherchez.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <RouterLink to="/" class="rounded-2xl bg-vertFonce px-3.5 py-2.5 font-semibold text-blanc shadow-sm hover:bg-vert focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-200">Retour à la page d'accueil</RouterLink>
        <RouterLink to="/contact" class="font-semibold text-gray-900">Contact<span aria-hidden="true">&rarr;</span></RouterLink>
      </div>
    </div>
  </main>
</template>