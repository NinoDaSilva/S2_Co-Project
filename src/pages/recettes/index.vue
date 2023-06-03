<script setup lang="ts">
import { recetteSalee, recetteSucree } from '@/backend';
import Hero from '@/components/Hero.vue'
import btn from '@/components/btn.vue';
import recetteCard from '@/components/CardRecette.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos recettes'
}) 
//
const recettesSucreeListe = await recetteSucree();
const recettesSaleeListe = await recetteSalee();
</script>

<template>
  <Hero
    title="Nos recettes"
    imgPath="/img/hero/recettes.webp"
    imgAlt="Image bannière page recettes"
  >
  </Hero>

  <div class="max-sm:mx-5 sm:ml-10 lg:text-center mb-10 mt-8 sm:mb-20 sm:mt-20">
    <h2 class="max-sm:mb-5 md:text-start sm:-ml-10">Découvrez nos différentes recettes facile à réaliser !</h2>
    <div class="max-sm:hidden mb-8 underligne bg-vertBleu sm:w-full max-w-[65vh]"></div>
  </div>

  <div>
    <h3>Recettes salées</h3>
    <ul class="grid grid-cols-2 lg:max-w-[1800px] mt-5 md:mt-10 mx-auto md:grid-cols-3 md:px-10 duration-300 pb-16">
      <li v-for="unerecette of recettesSaleeListe" :v-key="unerecette.id">
        <RouterLink :to="{ name: 'recettes-id', params: { id: unerecette.id }}">
            <recetteCard v-bind="{ ...unerecette}" />
        </RouterLink>
        </li>
    </ul>
  </div>

  <div class="lg:mt-20">
    <h3>Recettes sucrées</h3>
    <ul class="grid grid-cols-2 lg:max-w-[1800px] mt-5 md:mt-10 mx-auto md:grid-cols-3 md:px-10 duration-300 pb-5 lg:pb-16">
      <li v-for="unerecette of recettesSucreeListe" :v-key="unerecette.id">
        <RouterLink :to="{ name: 'recettes-id', params: { id: unerecette.id }}">
            <recetteCard v-bind="{ ...unerecette}" />
        </RouterLink>
        </li>
    </ul>
  </div>

  <div class="max-sm:mx-5 sm:ml-10 text-center mb-16 mt-8 sm:mb-32 sm:mt-20 xl:flex">
    <div class="xl:mr-32">
      <h2 class="max-md:mb-5 md:text-start sm:-ml-10">Soutenir nos partenaires et leurs produits</h2>
      <div class="max-md:hidden mb-8 underligne bg-vertBleu sm:w-full max-w-[55vh]"></div>
    </div>
    <RouterLink to="/partenaires">
      <btn text="En savoir plus"/>
    </RouterLink>
  </div>
</template>
