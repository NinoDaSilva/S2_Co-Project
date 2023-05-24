<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Nos partenaires'
}) 
import Hero from '@/components/Hero.vue'
</script>

<template>
    <Hero
    title="Nos partenaires"
    imgPath="/img/hero/partenaires.webp"
    imgAlt="Image bannière page partenaires"
  >
  </Hero>

  <section class="my-10 sm:mx-10 md:my-32 lg:mx-auto max-w-[1520px]">
    <div class="ml-10 mb-4">
      <h2 class="-ml-10">Découvrez les différents partenaires de Goût local !</h2>
      <div class="max-sm:hidden underligne bg-vertBleu sm:w-[50vh] lg:w-[64vh]"></div>
    </div>

    <div class="md:flex mt-5 md:mt-28">
      <img class="mx-auto w-[120px] h-[120px] rounded-full sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/fermiere.webp" alt="photo Nathalie">
      <div class="mt-3 mb-8 md:ml-12 xl:pr-20">
        <h2 class="text-2xs text-center md:text-start mb-3 xl:mb-8 sm:text-2xl">Nathalie, 32 ans</h2>
        <p class="mb-2 md:mb-6">Nathalie travaille dans la ferme familiale depuis près de 17 ans. Elle s'occupe des animaux et des cultures de sa ferme avec soin et dévouement. Pour elle, chaque journée est différente et apporte son lot de défis, mais c'est ce qui rend ce métier si gratifiant. 
          Elle prend plaisir à produire des aliments sains et de qualité pour nourrir les gens de sa région.</p>
        <q class="italic">Si j'ai choisi Goût local, c'est parce qu'ils ont compris l'importance de promouvoir la nourriture local notamment sur Internet.</q>
      </div>
    </div>
    <div class="md:flex mt-5 md:mt-28">
      <img class="mx-auto w-[120px] h-[120px] rounded-full md:hidden sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/eleveur.webp" alt="photo Fabrice">
      <div class="mt-3 mb-8 md:mr-12 xl:pl-20">
        <h2 class="text-2xs text-center md:text-end mb-3 xl:mb-8 sm:text-2xl">Fabrice, 35 ans</h2>
        <p class="mb-2 md:mb-6">Fabrice est un jeune berger depuis 10 ans. Il passe ses journées à surveiller et à guider son troupeau de moutons à travers les pâturages. Il veille à la santé et au bien-être de ses animaux, tout en respectant l'équilibre naturel de l'environnement. 
          Son travail est exigeant, mais il lui apporte une grande satisfaction de savoir que ses moutons produisent une laine de qualité et fournissent une viande savoureuse.</p>
        <q class="italic">Goût local est un projet qui mérite d'être mis en avant, que l'on travaille dans le monde du local ou non, c'est une vraie fierté de collaborer avec eux</q>
      </div>
      <img class="max-md:hidden mx-auto w-[120px] rounded-full h-[120px] sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/eleveur.webp" alt="photo Fabrice">
     </div>
    <div class="md:flex mt-5 md:mt-28">
      <img class="mx-auto w-[120px] h-[120px] rounded-full sm:w-[200px] sm:h-[200px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]" src="/img/agriculteur.webp" alt="photo Claude">
      <div class="mt-3 mb-8 md:ml-12 xl:pr-20">
        <h2 class="text-2xs text-center md:text-start mb-3 xl:mb-8 sm:text-2xl">Claude, 62 ans</h2>
        <p class="mb-2 md:mb-6">Claude est agriculteur depuis maintenant 45 ans. Il est responsable de la production de denrées alimentaires, qu'il s'agisse de céréales, de fruits ou de légumes. Il travaille en étroite collaboration avec la nature, en utilisant des techniques agricoles durables pour préserver l'environnement. 
          Son travail demande beaucoup d'efforts et de dévouement, mais il est récompensé par la fierté de contribuer à nourrir la population.</p>
        <q class="italic">Il est important de sensibiliser les jeunes sur la nourriture locale et ainsi les inviter à s'intéresser aux différents métiers de l'agriculture. Je pense que Goût local est un excellent moyen pour cela</q>
      </div>
    </div>
  </section>
</template>
