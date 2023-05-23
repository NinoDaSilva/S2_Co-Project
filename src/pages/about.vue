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

  <section class="my-10 sm:mx-10 md:my-32 lg:mx-auto max-w-[1520px]">
    <div class="md:flex mt-5 md:mt-28">
      <img class="mx-auto w-[120px] h-[120px] md:hidden sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/about/Nino.webp" alt="photo Nino">
      <div class="mt-3 mb-8 md:pr-20">
        <h2 class="text-2xs text-center md:text-end mb-3 lg:mb-16 sm:text-2xl">Nino DA SILVA</h2>
        <p class="md:mr-10">Étudiant de 19 ans, je suis l'un des fondateurs du service Goût local et plus spécialement le développeur de ce site web.</p>
        <p class="md:mr-10">Avec mes deux collègues, lors de la création de cette société, le but était simple pour nous : partager et mettre en avant le savoir faire des producteurs locaux avec leurs produits !</p>
      </div>
      <img class="max-md:hidden mx-auto w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/about/Nino.webp" alt="photo Nino">
    </div>
    <div class="md:flex mt-5 md:mt-28">
      <img class="mx-auto w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/about/Lucas.webp" alt="photo Lucas">
      <div class="mt-3 mb-8 md:pl-20">
        <h2 class="text-2xs text-center md:text-start mb-3 lg:mb-16 sm:text-2xl">Lucas CHIPPAUX</h2>
        <p class="md:ml-10">Étudiant de 18 ans, je suis l'un des fondateurs du service Goût local. Avec mes deux amis, lors de la création de cette société, le but était simple pour nous :</p>
        <p class="md:ml-10">partager et mettre en avant nos producteurs locaux et leurs produits !</p>
      </div>
     </div>
    <div class="md:flex mt-5 md:mt-28">
      <img class="mx-auto w-[120px] h-[120px] md:hidden sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/about/Faris.webp" alt="photo Faris">
      <div class="mt-3 mb-8 md:pr-20">
        <h2 class="text-2xs text-center md:text-end mb-3 lg:mb-16 sm:text-2xl">Faris HALEPOVIC</h2>
        <p class="md:mr-10">Étudiant de 20 ans, je suis l'un des fondateurs du service Goût local ou j'étais charger de faire la partie design du site avec Lucas CHIPPAUX.</p>
        <p class="md:mr-10">Avec mes deux amis, lors de la création de cette société, le but était simple pour nous : partager et mettre en avant nos producteurs locaux et leurs produits !</p>
      </div>
      <img class="max-md:hidden mx-auto w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/about/Faris.webp" alt="photo Faris">
    </div>
  </section>

</template>
