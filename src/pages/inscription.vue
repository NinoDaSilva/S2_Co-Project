<script setup>
import btn from '@/components/btn.vue';
import Hero from '@/components/Hero.vue'
import ConnexionIcon from '@/components/icons/ConnexionIcon.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Inscription'
}) 
//
</script>

<template>
    <Hero
    title="Inscription"
    imgPath="/img/hero/connexion.webp"
    imgAlt="Image bannière page connexion"
    >
    </Hero>

    <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-12 mt-4 sm:mt-8">
        <ConnexionIcon class="w-1/3 md:w-2/5 mx-auto mb-5 sm:mb-10"/>
        <div class="py-2 sm:py-3">
            <label>Nom</label>
            <input class="form-champ border-bleuTurquoise" type="text" id="name" placeholder="Entrez votre nom">
        </div>
        <div class="py-2 sm:py-3">
            <label>Prénom</label>
            <input class="form-champ border-bleuTurquoise" type="text" id="first-name" placeholder="Entrez votre prénom">
        </div>
        <div class="py-2 sm:py-3">
            <label>Mail</label>
            <input class="form-champ border-bleuTurquoise" type="email" id="login" placeholder="Entrez votre adresse mail">
        </div>
        <div class="py-2 sm:py-3">
            <label>Mot de passe</label>
            <input class="form-champ border-bleuTurquoise" type="password" id="passwd" placeholder="Entrez votre mot de passe">
        </div>
        <div class="py-2 sm:py-3">
            <label>Confirmation du mot de passe</label>
            <input class="form-champ border-bleuTurquoise" type="password" id="passwd" placeholder="Confirmer votre mot de passe">
        </div>
        <div class="text-center mt-4 sm:mt-10">
            <button v-on:click="register()"><btn text="S'inscrire"/></button>
        </div>
    </form>
</template>

<script>
export default {
  methods: {
    async register() {
      await pb.collection('users').create({
        email: document.getElementById("login").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        name: document.getElementById("name").value,
        first: document.getElementById("first-name").value,
      });
    }
  }
}
</script>