<script setup lang="ts">
import Hero from '@/components/Hero.vue'
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos recettes'
}) 
//
</script>

<template>
  <Hero
    title="Nos recettes"
    imgPath="/img/hero/recettes.webp"
    imgAlt="Image bannière page recettes"
  >
  </Hero>
</template>
