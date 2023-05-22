<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Connexion'
}) 
import Hero from '@/components/Hero.vue'
import ConnexionIcon from '@/components/icons/ConnexionIcon.vue';
</script>

<template>
  <Hero
    class="z-0"
    title="Se connecter"
    imgPath=""
    imgAlt="Image bannière page connexion"
  >
    <template>
      <div></div>
    </template>
  </Hero>

  <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-4 mt-4 sm:mt-8">
      <ConnexionIcon class="w-2/5 mx-auto mb-5 sm:mb-10"/>
      <div class="mb-4 sm:mb-5">
        <input class="form-champ border-bleuTurquoise"
          id="email" type="email" placeholder="E-mail" required autocomplete="email">
      </div>
      <div class="mb-4">
        <input class="form-champ border-bleuTurquoise"
          id="passwrd" type="password" placeholder="Mot de passe" required>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <button class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300" type="submit">
          Se connecter
        </button>
      </div>
      <div class="text-center mt-5">
        <p class="mb-2 sm:mb-1">Vous n'avez pas de compte ?</p>
        <RouterLink to="/inscription" class="link text-vertBleu">S'inscrire</RouterLink>
      </div>
    </form>
</template>
