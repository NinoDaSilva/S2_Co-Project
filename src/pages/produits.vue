<script setup>
import { ref, computed } from 'vue'
import Hero from '@/components/Hero.vue'
import CardProduit from '@/components/CardProduit.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

import { FruitsEte, FruitsAutomne, LegumesEte, LegumesAutomne, LegumesPrintemps, LegumesHiver, allProduits } from '@/backend';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos produits'
}) 
//
const fruitsEte = await FruitsEte();
const fruitsAutomne = await FruitsAutomne();
const legumesEte = await LegumesEte();
const legumesAutomne = await LegumesAutomne();
const legumesPrintemps = await LegumesPrintemps();
const legumesHiver = await LegumesHiver();

//
const searchTerm = ref('');

let produits = [];
produits = await allProduits();

const filterProduits = (searchTerm) => {
  return produits.filter((produit) => {
    return produit.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
};

const produitsFiltres = computed(() => {
  return filterProduits(searchTerm.value);
});
</script>

<template>
  <Hero
    title="Nos produits"
    imgPath="/img/hero/produits.webp"
    imgAlt="Image bannière page produits"
  >
    <template #chapo>
      <div class="relative mt-2 sm:mt-5 lg:mt-10 sm:w-4/6 max-w-[700px] mx-auto">
        <input type="search" name="produit" id="search"  v-model="searchTerm" placeholder="Rechercher un produit"
          class="w-full bg-[#dfdfdf] lg:text-sm rounded-3xl p-2 pl-12 px-5 sm:pl-16 outline-none focus:outline-vert focus:text-brun focus:shadow-2xl duration-150">
        <button type="button" onclick="myFunction()" class="absolute top-1.5 left-3 sm:top-3 sm:left-5 w-4 h-5 sm:w-6 sm:h-6">
          <SearchIcon class="hover:scale-110 ease-in-out duration-300"/>
        </button>
      </div>
    </template>
  </Hero>

  <!-- Affichage selon la recherche -->
  <div class="grid grid-cols-3 gap-5 p-2 mt-8 max-sm:px-10 md:gap-20 sm:p-10">
    <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]"
        v-for="produit in produitsFiltres" :key="produit.id" v-bind="{...produit}"/>
  </div>

  <div class="mt-10 sm:mt-20 max-lg:mx-8 md:mb-28">
    <h2 class="mb-3 sm:mb-6 max-w-3xl">Découvrez et choisissez des produits qui vous intéresse et de saison juste ici !</h2>
    <p>La région Bourgogne-Franche-Comté est connu pour être la huitième région de France à être engagée dans la production de produits bio de fruits et légumes de saison qui plairons à tout le monde !</p>
  </div>

  <section class="mb-10 mt-10 sm:ml-10 lg:ml-0 duration-300">
    <div>
      <h2 class="">Les fruits de saison</h2>
      <div class="underligne bg-vertBleu w-5/6"></div>
    </div>
    <p class="mt-4 mb-4 lg:mt-12">En <strong>été</strong> vous trouverez...</p>
    <div class="grid grid-cols-3 gap-5 p-2 md:gap-20 sm:p-10">
      <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]" v-for="produit in fruitsEte" :v-key="produit.id" v-bind="{ ...produit }" />    
    </div>
    <p class="mt-4 mb-4 lg:mt-20">En <strong>automne</strong> vous trouverez...</p>
    <div class="grid grid-cols-3 gap-5 p-2 md:gap-20 sm:p-10">
      <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]" v-for="produit in fruitsAutomne" :v-key="produit.id" v-bind="{ ...produit }"/>
    </div>
  </section>

  <section class="mb-10 mt-10 sm:ml-10 lg:ml-0 duration-300">
    <div>
      <h2>Les légumes de saison</h2>
      <div class="underligne bg-vertBleu w-5/6"></div>
    </div>
    <p class="mt-4 mb-4 lg:mt-12">Au <strong>printemps</strong> vous trouverez...</p>
    <div class="grid grid-cols-3 gap-5 p-2 md:gap-20 sm:p-10">
      <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]" v-for="produit in legumesPrintemps" :v-key="produit.id" v-bind="{ ...produit }"/>
    </div>
    <p class="mt-4 mb-4 lg:mt-20">En <strong>été</strong> vous trouverez...</p>
    <div class="grid grid-cols-3 gap-5 p-2 md:gap-20 sm:p-10">
      <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]" v-for="produit in legumesEte" :v-key="produit.id" v-bind="{ ...produit }"/>
    </div>
    <p class="mt-4 mb-4 lg:mt-20">En <strong>automne</strong> vous trouverez...</p>
    <div class="grid grid-cols-3 gap-5 p-2 md:gap-20 sm:p-10">
      <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]" v-for="produit in legumesAutomne" :v-key="produit.id" v-bind="{ ...produit }"/>
    </div>
    <p class="mt-4 mb-4 lg:mt-20">En <strong>hiver</strong> vous trouverez...</p>
    <div class="grid grid-cols-3 gap-5 p-2 md:gap-20 sm:p-10">
      <CardProduit class="border-bleuClair sm:border-8 max-w-[300px]" v-for="produit in legumesHiver" :v-key="produit.id" v-bind="{ ...produit }"/>
    </div>
  </section>

</template>

<!-- <script>
const OnSearch = () => {
  const input = document.querySelector('#search');
  const filter = input.value.toUpperCase();
  const list = document.querySelectorAll('produitListe');

  list.forEach((el) => {
    const text = el.textContent.toUpperCase();

    el.style.display = text.includes(filter) ? '' : 'none';
  });
};
</script> -->
