<script setup lang="ts">
import Hero from '@/components/Hero.vue'
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos produits'
}) 
//
</script>

<template>
      <Hero
    title="Nos produits"
    imgPath="/img/hero/produits.webp"
    imgAlt="Image bannière page produits"
  >
  </Hero>
</template>
