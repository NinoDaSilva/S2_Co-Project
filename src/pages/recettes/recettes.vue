<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos recettes'
}) 
import Hero from '@/components/Hero.vue'
</script>

<template>
  <Hero
    title="Nos recettes"
    imgPath="/img/hero/recettes.webp"
    imgAlt="Image bannière page recettes"
  >
  </Hero>
</template>
