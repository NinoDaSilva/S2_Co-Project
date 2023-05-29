<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CardEvents from '@/components/CardEvents.vue'
import { allEvents } from '@/backend';
import btn from '@/components/btn.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Événements'
}) 
//
const eventsListe = await allEvents();
</script>

<template>
  <Hero
    title="Calendrier des évènements"
    imgPath="/img/hero/events.webp"
    imgAlt="Image bannière page evenements"
  >
  </Hero>
  <section class="max-sm:grid max-sm:grid-cols-1">
    <CardEvents v-for="events of eventsListe" :v-key="events.id" v-bind="{ ...events}"/>
  </section>

  <section class="mt-10 mb-10 sm:mb-20">
    <div class="underligne bg-bleuTurquoise mx-auto w-full sm:w-5/6"></div>
    <h2 class="max-sm:text-2xs text-center mt-8">Suivez les infos avec notre Newsletter</h2>
    <form class="md:max-w-2xl mx-auto px-5 sm:p-14 sm:px-20 mt-8 sm:border-2 border-bleuTurquoise rounded-3xl">
      <div class="mb-4">
        <label class="form-label--home" for="last-name">
          Nom
        </label>
        <input class="form-champ border-bleuTurquoise"
          id="last-name" type="text" placeholder="Entrez votre nom">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="first-name">
          Prénom
        </label>
        <input class="form-champ border-bleuTurquoise"
          id="first-name" type="text" placeholder="Entrez votre prénom">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="email">
          Mail
        </label>
        <input class="form-champ border-bleuTurquoise"
          id="email" type="email" placeholder="Entrez votre adresse mail">
      </div>
      <div class="mt-5 items-center">
        <input class="mr-3 sm:mr-5" id="confidential" type="checkbox">
        <label for="confidential">J'accepte <RouterLink to="/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <btn text="Envoyez" class="bg-bleuTurquoise lg:px-12"/>
      </div>
    </form>
  </section>
</template>
