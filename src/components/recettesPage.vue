<script setup lang="ts">
import { pb, recetteEtapes } from '@/backend';
import type { RecettesResponse } from '@/pocketbase-types';
import Hero from './Hero.vue';
import peopleIcon from '@/components/icons/peopleIcon.vue';
import RecetteIcon from './icons/RecetteIcon.vue';
import btn from '@/components/btn.vue';

const props: RecettesResponse = defineProps<RecettesResponse>();
const img = props.image_hero;

const urlImg0 = img && pb.getFileUrl(props, img, { thumb: '400x400' });
// const etapes = await recetteEtapes(props.id);
</script>

<template>
    <Hero
        :title="titre"
        :imgPath="urlImg0"
        imgAlt="Image bannière page recettes"
    >
    <template #chapo>
        <p class="title-head--recette">Recette facile : {{ temps }} min</p>
    </template>
    </Hero>

    <div class="max-sm:mx-5 sm:ml-10 max-md:text-center mb-10 mt-8 sm:mb-20 sm:mt-20">
        <h2 class="max-md:mb-5 sm:-ml-10">Découvrez notre recettes de <span class="lowercase">{{ titre }}</span> facile à réaliser !</h2>
        <div class="max-md:hidden mb-8 underligne bg-vertBleu w-full max-w-[80vh]"></div>
    </div>

    <div class="max-sm:mx-5">
        <span>Pour {{ nbr_personnes }} personnes : </span>
        <peopleIcon class="inline-block mb-1 ml-1 w-4 sm:w-5 sm:h-5 " v-for="personnes in nbr_personnes" />
    </div>  

    <div class="max-sm:mx-5 flex max-w-[1820px]">
        <!-- <ul v-for="(etape, index) in etapes" :v-key="index">
            <li v-bind="{ ...etape }">Étape {{ index + 1 }} : {{ etape }}</li>
        </ul> -->
        <ul class="mt-5">
            <li v-if="etape_1" class="mt-3">
                <span><strong>Étape 1 :</strong> {{ etape_1 }}</span>
            </li>
            <li v-if="etape_2" class="mt-3">
                <span><strong>Étape 2 :</strong> {{ etape_2 }}</span>
            </li>
            <li v-if="etape_3" class="mt-3">
                <span><strong>Étape 3 :</strong> {{ etape_3 }}</span>
            </li>
            <li v-if="etape_4" class="mt-3">
                <span><strong>Étape 4 :</strong> {{ etape_4 }}</span>
            </li>
            <li v-if="etape_5" class="mt-3">
                <span><strong>Étape 5 :</strong> {{ etape_5 }}</span>
            </li>
            <li v-if="etape_6" class="mt-3">
                <span><strong>Étape 6 :</strong> {{ etape_6 }}</span>
            </li>
            <li v-if="etape_7" class="mt-3">
                <span><strong>Étape 7 :</strong> {{ etape_7 }}</span>
            </li>
            <li v-if="etape_8" class="mt-3">
                <span><strong>Étape 8 :</strong> {{ etape_8 }}</span>
            </li>
            <li v-if="etape_9" class="mt-3">
                <span><strong>Étape 9 :</strong> {{ etape_9 }}</span>
            </li>
            <li v-if="etape_10" class="mt-3">
                <span><strong>Étape 10 :</strong> {{ etape_10 }}</span>
            </li>
        </ul>
        <RecetteIcon class="max-md:hidden w-1/6 md:w-[300px] mb-60" />
    </div>

    <section class="mt-10 md:mt-20 lg:mb-40">
        <div class="ml-10 mb-4">
            <h3 class="-ml-5">Ingrédients</h3>
            <div class="underligne bg-vertBleu max-sm:w-[8vh] max-w-[12vh]"></div>
      </div>
      <div class="mt-8">
        <li class="list-none">
            {{ ingredients }}
        </li>
      </div>
    </section>

    <div class="max-sm:mx-5 sm:ml-10 text-center mb-16 mt-8 sm:mb-32 sm:mt-20 xl:flex">
    <div class="xl:mr-32">
      <h2 class="max-md:mb-5 md:text-start sm:-ml-10">Découvrez d'autres recettes facile à réaliser !</h2>
      <div class="max-md:hidden mb-8 underligne bg-vertBleu sm:w-full max-w-[58vh]"></div>
    </div>
    <RouterLink to="/partenaires">
      <btn text="En savoir plus"/>
    </RouterLink>
  </div>
</template>