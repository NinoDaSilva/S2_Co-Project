<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos produits'
}) 
import Hero from '@/components/Hero.vue'
</script>

<template>
      <Hero
    title="Nos produits"
    imgPath="/img/hero/produits.webp"
    imgAlt="Image bannière page produits"
  >
  </Hero>
</template>
