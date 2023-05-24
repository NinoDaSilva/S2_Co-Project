<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Evenements'
}) 
import Hero from '@/components/Hero.vue'
import CardEvents from '@/components/CardEvents.vue'
</script>

<template>
    <Hero
    title="Calendrier des évènements"
    imgPath="/img/hero/events.webp"
    imgAlt="Image bannière page evenements"
  >
  </Hero>
  <CardEvents/>
</template>
