<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Événements'
}) 
import Hero from '@/components/Hero.vue'
import CardEvents from '@/components/CardEvents.vue'
//import { allEvents } from '@/backend';
//const eventsListe = await allEvents();
</script>

<template>
  <Hero
    title="Calendrier des évènements"
    imgPath="/img/hero/events.webp"
    imgAlt="Image bannière page evenements"
  >
  </Hero>
  <CardEvents v-for="events of eventsListe" :v-key="events.id" v-bind="{ ...events}"/>
</template>
