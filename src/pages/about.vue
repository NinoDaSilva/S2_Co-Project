<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'A propos'
}) 
import Hero from '@/components/Hero.vue'
</script>

<template>
  <Hero
    title="Qui sommes-nous ?"
    imgPath="/img/hero/about.webp"
    imgAlt="Image bannière page en savoir plus"
  >
  </Hero>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
