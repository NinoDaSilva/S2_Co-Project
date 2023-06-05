<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CardProduit from '@/components/CardProduit.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';

import { FruitsEte } from '@/backend';
import { FruitsAutomne } from '@/backend';
import { LegumesEte } from '@/backend';
import { LegumesAutomne } from '@/backend';
import { LegumesPrintemps } from '@/backend';
import { LegumesHiver } from '@/backend';
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
//const produitListe = await allProduits();
</script>

<template>
  <Hero
    title="Nos produits"
    imgPath="/img/hero/produits.webp"
    imgAlt="Image bannière page produits"
  >
    <template #chapo>
      <div class="relative mt-2 sm:mt-5 lg:mt-10 sm:w-4/6 max-w-[700px] mx-auto">
        <input type="search" name="produit" id="search" placeholder="Rechercher un produit"
          class="w-full bg-[#dfdfdf] lg:text-sm rounded-3xl p-2 pl-12 px-5 sm:pl-16 outline-none focus:outline-vert focus:text-brun">
        <SearchIcon class="absolute top-1.5 left-3 sm:top-3 sm:left-5 w-4 h-5 sm:w-6 sm:h-6" />
      </div>
    </template>
  </Hero>

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
