<script setup>
import { ref } from 'vue';
import { pb } from '@/backend';
import Hero from '@/components/Hero.vue'
import btn from '@/components/btn.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Contact'
}) 
//

// Fonction d'envoie de données vers pocketbase
const email = ref("");
const name = ref("");
const first_name = ref("");
const message = ref("");

const doInscription = async () => {
    try {
        const data = {
            "name": name.value,
            "first_name": first_name.value,
            "email": email.value,
            "message": message.value,
            "autorization": true,
        };
        
        const record = await pb.collection('contact').create(data);
      }
    catch (error) {
        alert(error.message);
    }
}
</script>

<template>
  <Hero
    title="Nous contacter"
    imgPath="/img/hero/contact.webp"
    imgAlt="Image bannière page contact"
  >
  </Hero>

  <form onsubmit="sendEmail(); reset(); return false" class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-8 mt-4 sm:mt-8 sm:mb-12">
      <div class="mb-4">
        <label class="form-label--home" for="last-name">
          Nom
        </label>
        <input v-model="name" class="form-champ border-bleuTurquoise"
          id="last-name" type="text" placeholder="Entrez votre nom" required autocomplete="last-name">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="first-name">
          Prénom
        </label>
        <input v-model="first_name" class="form-champ border-bleuTurquoise"
          id="first-name" type="text" placeholder="Entrez votre prénom" autocomplete="first-name">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="email">
          Mail
        </label>
        <input v-model="email" class="form-champ border-bleuTurquoise"
          id="email" type="email" placeholder="Entrez votre adresse mail" required autocomplete="email">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="message">
          Message
        </label>
        <textarea v-model="message" class="form-champ border-bleuTurquoise rounded-3xl leading-6 pt-4" name="message" id="message" rows="6" placeholder="Saisissez votre message"></textarea>
      </div>
      <div class="mt-5 items-center">
        <input class="mr-3 sm:mr-5" id="confidential" type="checkbox" required>
        <label for="confidential">J'accepte <RouterLink to="/pages/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <btn text="Envoyez" @click="doInscription" class="lg:px-12"/>
      </div>
    </form>
</template>
