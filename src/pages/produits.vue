<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CardProduit from '@/components/CardProduit.vue';

import { FruitsEte } from '@/backend';
import { FruitsAutomne } from '@/backend';
import { LegumesEte } from '@/backend';
import { LegumesAutomne } from '@/backend';
import { LegumesPrintemps } from '@/backend';
import { LegumesHiver } from '@/backend';
import { allProduits } from '@/backend';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos produits'
}) 
//
// const fruitsEte = await FruitsEte();
// const fruitsAutomne = await FruitsAutomne();
// const legumesEte = await LegumesEte();
// const legumesAutomne = await LegumesAutomne();
// const legumesPrintemps = await LegumesPrintemps();
// const legumesHiver = await LegumesHiver();
// const produitListe = await allProduits();
</script>

<template>
      <Hero
    title="Nos produits"
    imgPath="/img/hero/produits.webp"
    imgAlt="Image bannière page produits"
  >
  </Hero>

  <section>
    <div>
      <h2>Les fruits de saison</h2>
      <div class="underligne w-[8vh] sm:w-[12vh] lg:w-[15vh]"></div>
    </div>
    <p>En <strong>été</strong> vous trouverez...</p>
    <CardProduit v-for="produit in produitListe" :v-key="produit.id" v-bind="{ ...produit }" />    
  </section>

  <section>
    <div>
      <h2>Les légumes de saison</h2>
      <div class="underligne w-[8vh] sm:w-[12vh] lg:w-[15vh]"></div>
    </div>
    <p>En <strong>automne</strong> vous trouverez...</p>
      <CardProduit v-for="produit in produitListe" :v-key="produit.id" v-bind="{ ...produit }"/>
  </section>
</template>
