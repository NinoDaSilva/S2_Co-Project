<script setup lang="ts">
import { pb, recetteEtapes } from '@/backend';
import type { RecettesResponse } from '@/pocketbase-types';
import Hero from './Hero.vue';
import peopleIcon from '@/components/icons/peopleIcon.vue';
import RecetteIcon from './icons/RecetteIcon.vue';

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

    <div>
        <span>Pour {{ nbr_personnes }} personnes : </span>
        <peopleIcon class="inline-block mb-1 ml-1 w-4 sm:w-5 sm:h-5 " v-for="personnes in nbr_personnes" />
    </div>  

    <div class="flex">
        <!-- <ul v-for="(etape, index) in etapes" :v-key="index">
            <li v-bind="{ ...etape }">Étape {{ index + 1 }} : {{ etape }}</li>
        </ul> -->
        <ul>
            <li v-if="etape_1">
                <span>Étape 1 : {{ etape_1 }}</span>
            </li>
            <li v-if="etape_2">
                <span>Étape 2 : {{ etape_2 }}</span>
            </li>
            <li v-if="etape_3">
                <span>Étape 3 : {{ etape_3 }}</span>
            </li>
            <li v-if="etape_4">
                <span>Étape 4 : {{ etape_4 }}</span>
            </li>
            <li v-if="etape_5">
                <span>Étape 5 : {{ etape_5 }}</span>
            </li>
            <li v-if="etape_6">
                <span>Étape 6 : {{ etape_6 }}</span>
            </li>
            <li v-if="etape_7">
                <span>Étape 7 : {{ etape_7 }}</span>
            </li>
            <li v-if="etape_8">
                <span>Étape 8 : {{ etape_8 }}</span>
            </li>
            <li v-if="etape_9">
                <span>Étape 9 : {{ etape_9 }}</span>
            </li>
            <li v-if="etape_10">
                <span>Étape 10 : {{ etape_10 }}</span>
            </li>
        </ul>
        <RecetteIcon class="w-1/6" />
    </div>

    <section class="mt-10">
        <div class="ml-10 mb-4">
            <h3 class="-ml-5">Ingrédients</h3>
            <div class="underligne bg-vertBleu max-sm:w-[8vh] max-w-[12vh]"></div>
      </div>
      <div>
        <!-- img -->
      </div>
    </section>
</template>