<script setup>
import Hero from '@/components/Hero.vue'
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Inscription'
}) 
//
</script>

<template>
    <Hero
    title="Votre espace personnel"
    imgPath="/img/hero/connexion.webp"
    imgAlt="Image bannière page connexion"
    >
    </Hero>
</template>