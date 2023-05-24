<script setup lang="ts">
import Hero from '@/components/Hero.vue'
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Panier'
}) 
//
</script>

<template>
  <Hero
    title="Votre panier"
    imgPath="/img/hero/panier.webp"
    imgAlt="Image bannière page panier"
  >
  </Hero>
</template>