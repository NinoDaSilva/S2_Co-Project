<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Contact'
}) 

import Hero from '@/components/Hero.vue'
import btn from '@/components/btn.vue';
</script>

<template>
  <Hero
    title="Nous contacter"
    imgPath="/img/hero/contact.webp"
    imgAlt="Image bannière page contact"
  >
  </Hero>

  <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-8 mt-4 sm:mt-8 sm:mb-12">
      <div class="mb-4">
        <label class="form-label--home" for="last-name">
          Nom
        </label>
        <input class="form-champ border-bleuTurquoise"
          id="last-name" type="text" placeholder="Entrez votre nom" required autocomplete="last-name">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="first-name">
          Prénom
        </label>
        <input class="form-champ border-bleuTurquoise"
          id="first-name" type="text" placeholder="Entrez votre prénom" autocomplete="first-name">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="email">
          Mail
        </label>
        <input class="form-champ border-bleuTurquoise"
          id="email" type="email" placeholder="Entrez votre adresse mail" required autocomplete="email">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="message">
          Message
        </label>
        <textarea class="form-champ border-bleuTurquoise rounded-3xl leading-6 pt-4" name="message" id="message" rows="6" placeholder="Saisissez votre message"></textarea>
      </div>
      <div class="mt-5 items-center">
        <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required>
        <label for="confidential">J'accepte <RouterLink to="/pages/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <btn text="Envoyez" class="lg:px-12"/>
      </div>
    </form>
</template>
