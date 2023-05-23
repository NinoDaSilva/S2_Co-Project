<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos partenaires'
}) 
import Hero from '@/components/Hero.vue'
</script>

<template>
    <Hero
    title="Nos partenaires"
    imgPath="/img/hero/partenaires.webp"
    imgAlt="Image bannière page partenaires"
  >
  </Hero>
</template>
