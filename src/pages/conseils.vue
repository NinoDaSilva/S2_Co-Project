<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CardConseils from '@/components/CardConseils.vue'
import btn from '@/components/btn.vue';
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos conseils'
}) 
//
</script>

<template>
  <Hero
    title="Nos conseils écologiques"
    imgPath="/img/hero/conseils.webp"
    imgAlt="Image bannière page conseils"
  >
  </Hero>
  
  <div class="max-sm:mx-5 sm:ml-10 lg:text-center mb-10 mt-8 sm:mb-20 sm:mt-20">
    <h2 class="max-md:mb-5 md:text-start sm:-ml-10">Quelques conseils simples pour manger plus écolo et sain !</h2>
    <div class="max-md:hidden mb-8 underligne bg-vertBleu sm:w-full max-w-[75vh]"></div>
  </div>

  <CardConseils
    variant="default"
	  number="1"	  
    text="Manger moins en quantité"
    icon="img/conseils/steakIcon.webp" />

  <CardConseils
    variant="secondary"
	  number="2"	  
    text="Privilégier la qualité"
    icon="img/conseils/pomme-qualiteIcon.webp" />

  <CardConseils
    variant="default"
	  number="3"	  
    text="Manger moins de viandes"
    icon="img/conseils/vacheIcon.webp" />

  <CardConseils
    variant="secondary"
	  number="4"	  
    text="Éviter le gaspillage alimentaire"
    icon="img/conseils/poubelleIcon.webp" />

  <CardConseils
    variant="default"
	  number="5"	  
    text="Acheter des produits de saison"
    icon="img/conseils/fruitIcon.webp" />

  <CardConseils
    variant="secondary"
	  number="6"	  
    text="Manger local"
    icon="img/conseils/panierIcon.webp" />

  <CardConseils
    variant="default"
	  number="7"	  
    text="Éviter les emballages inutiles"
    icon="img/conseils/produitIcon.webp" />

  <CardConseils
    variant="secondary"
	  number="8"	  
    text="Composter ses déchets alimentaires"
    icon="img/conseils/dechetIcon.webp" />

  <div class="max-sm:mx-5 sm:ml-10 text-center mb-10 mt-8 sm:mb-20 sm:mt-20">
    <h2 class="max-md:mb-5 md:text-start sm:-ml-10">Pour en savoir plus, nous vous invitons à nous contacter en cliquant ci-dessous</h2>
    <div class="max-md:hidden mb-8 underligne bg-vertBleu sm:w-full max-w-[100vh]"></div>
    <RouterLink to="/contact">
      <btn text="Nous contacter"/>
    </RouterLink>
  </div>
</template>
