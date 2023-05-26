<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import CardConseils from '@/components/CardConseils.vue'
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
</template>
