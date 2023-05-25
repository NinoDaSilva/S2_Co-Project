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
    variant="secondary"
	  number="1"	  
    text="Manger moins en quantité"
    icon="/components/icons/SteakIcon.vue" />
</template>
