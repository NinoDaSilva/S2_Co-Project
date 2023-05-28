<script setup>
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';
import Hero from '@/components/Hero.vue'
import ConnexionIcon from '@/components/icons/ConnexionIcon.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Connexion'
}) 
//
let pb = null;
const currentUser = ref();
const email = ref("");
const password = ref("");
const confirm_password = ref("");
const firstName = ref("");

const loginMode = ref(true);

onMounted(async () => {
    pb = new PocketBase('http://127.0.0.1:8090');

    pb.authStore.onChange(() => {
      currentUser.value = pb.authStore.model
    }, true)

  });

  const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
  }

  const doLogin = async () => {
    try {
      const authData = await pb.collection('users')
        .authWithPassword(email.value, password.value);

      // after the above you can also access the auth data from the authStore
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model);
      // currentUser.value = pb.authStore.model
    } catch (error) {
      alert(error.message)
    }
  }

  const doCreateAccount = async () => {
    try {
      const data = {
        "username": firstName.value,
        "email": email.value,
        "emailVisibility": false,
        "password": password.value,
        "passwordConfirm": confirm_password.value,
        "first_name": firstName.value,
      };

      const record = await pb.collection('users').create(data);

      await doLogin();
    } catch (error) {
      alert(error.message)
    }
  }
</script>

<template>
  <Hero
    title="Se connecter"
    imgPath="/img/hero/connexion.webp"
    imgAlt="Image bannière page connexion"
  >
  </Hero>

  <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-10 mt-4 sm:mt-8">
      <div v-if="currentUser" class="text-center">
        <h2 class="">Bonjour {{ currentUser?.first_name }}</h2>
        <div class="mt-6">
          <button type="button" @click="doLogout"
            class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
            Déconnexion
          </button>

        </div>
      </div>
        
      <div v-else>
        <ConnexionIcon class="w-2/5 mx-auto mb-5"/>
        <h2 class="text-center">{{ loginMode ? "CONNEXION" : "INSCRIPTION" }}</h2>
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <label for="email">Mail</label>
          <div class="mt-2">
            <input v-model="email" type="email" name="email" id="email" autocomplete="email" placeholder="Entrez votre adresse mail"
              class="form-champ border-bleuTurquoise">
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <label for="password">Mot de passe</label>
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="none" placeholder="Entrez votre mot de passe"
              class="form-champ border-bleuTurquoise">
          </div>
        </div>

        <div v-if="loginMode">
          <div class="text-center mt-6">
            <button type="button" @click="doLogin" class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
              Se connecter
            </button>

          <div class="text-center mt-6">
            <p class="mb-2 sm:mb-1">Vous n'avez pas de compte ?</p>
            <button type="button" @click="loginMode = false" class="link text-vertBleu">
              S'inscrire            
            </button>
          </div>

          </div>
        </div>
        
        <div v-else>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="confirm_password">Confirmation du mot de passe</label>
            <div class="mt-2">
              <input v-model="confirm_password" type="password" name="confirm_password" id="confirm_password" autocomplete="none" placeholder="Entrez votre mot de passe"
                class="form-champ border-bleuTurquoise">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="firstName">Nom</label>
            <div class="mt-2">
              <input v-model="firstName" type="text" name="firstName" id="firstName" autocomplete="first_name" placeholder="Entrer votre prénom"
                class="form-champ border-bleuTurquoise">
            </div>
          </div>
          <div class="mt-5 items-center">
            <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required>
            <label for="confidential">J'accepte <RouterLink to="/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
          </div>

          <div class="text-center mt-5 sm:mt-8">
            <button type="button" @click="doCreateAccount" class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full shadow-md hover:scale-[1.02] duration-300">
              S'inscrire
            </button>
          </div>

          <div class="text-center mt-6">
            <p class="mb-2 sm:mb-1">Vous avez déjà un compte ?</p>
            <button type="button" @click="loginMode = true" class="link text-vertBleu">
              Se connecter
            </button>
          </div>
        </div>
      </div>
  </form>
</template>