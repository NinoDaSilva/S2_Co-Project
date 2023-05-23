<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Panier'
}) 

import Hero from '@/components/Hero.vue'
</script>

<template>
  <Hero
    title="Votre panier"
    imgPath="/img/hero/panier.webp"
    imgAlt="Image bannière page panier"
  >
  </Hero>
</template>