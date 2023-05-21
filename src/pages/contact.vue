<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>

<template>
  <Hero
    class="z-0"
    title="Contact"
    imgPath=""
    imgAlt="Image bannière page d'accueil"
  >
    <template>
      <div></div>
    </template>
  </Hero>

  <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-4 mt-4 sm:mt-8">
      <div class="mb-4">
        <label class="form-label--home" for="last-name">
          Nom
        </label>
        <input class="form-champ bg-bleuTurquoise"
          id="last-name" type="text" placeholder="Entrez votre nom">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="first-name">
          Prénom
        </label>
        <input class="form-champ bg-bleuTurquoise"
          id="first-name" type="text" placeholder="Entrez votre prénom">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="email">
          Mail
        </label>
        <input class="form-champ bg-bleuTurquoise"
          id="email" type="email" placeholder="Entrez votre adresse mail">
      </div>
      <div class="mt-5 items-center">
        <input class="mr-3 sm:mr-5" id="confidential" type="checkbox">
        <label for="confidential">J'accepte <RouterLink to="/pages/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <button class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full" type="submit">
          Envoyez
        </button>
      </div>
    </form>
</template>
