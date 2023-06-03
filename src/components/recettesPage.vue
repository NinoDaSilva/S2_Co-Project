<script setup lang="ts">
import { pb } from '@/backend';
import type { RecettesResponse } from '@/pocketbase-types';
import Hero from './Hero.vue';
import peopleIcon from '@/components/icons/peopleIcon.vue';

const props: RecettesResponse = defineProps<RecettesResponse>();
const img = props.image_hero;

const urlImg0 = img && pb.getFileUrl(props, img, { thumb: '400x400' });

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
        <peopleIcon class="inline-block mb-1 ml-1 w-5 h-5" v-for="personnes in nbr_personnes" />
    </div>

    <div>
        <div>
            <!-- etapes -->
        </div>
        <!-- img -->
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