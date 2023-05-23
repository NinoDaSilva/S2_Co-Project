<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'A propos'
}) 
import Hero from '@/components/Hero.vue'
</script>

<template>
  <Hero
    title="Qui sommes-nous ?"
    imgPath="/img/hero/about.webp"
    imgAlt="Image bannière page en savoir plus"
  >
  </Hero>

  <div>
    <h2>Nino DA SILVA</h2>
    <p>Étudiant de 19 ans, je suis l’un des fondateurs du service Goût local et plus spécialement le développeur de ce site web.</p>
    <p>Avec mes deux collègues, lors de la création de cette société, le but était simple pour nous : partager et mettre en avant le savoir faire des producteurs locaux avec leurs produits !</p>
    <img src="/pu" alt="">
  </div>

  <div>
    <h2>Lucas CHIPPAUX</h2>
    <p>Étudiant de 18 ans, je suis l’un des fondateurs du service Goût local. Avec mes deux amis, lors de la création de cette société, le but était simple pour nous :</p>
    <p>partager et mettre en avant nos producteurs locaux et leurs produits !</p>
    <img src="" alt="">
  </div>
  <div>

    <h2>Faris HALEPOVIC</h2>
    <p>Étudiant de 20 ans, je suis l’un des fondateurs du service Goût local ou j’étais charger de faire la partie design du site avec Lucas CHIPPAUX.</p>
    <p>Avec mes deux amis, lors de la création de cette société, le but était simple pour nous : partager et mettre en avant nos producteurs locaux et leurs produits !</p>
    <img src="" alt="">
  </div>

</template>
