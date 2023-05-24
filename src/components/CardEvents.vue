<script setup lang="ts">
import type { EventsResponse } from '@/pocketbase-types';
const props: EventsResponse = defineProps<EventsResponse>();

// import { pb } from '@/backend';
// const img0 = props.images[0];

// const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>

<template>
    <div class="max-sm:w-[300px] sm:flex sm:my-20 my-3 overflow-hidden rounded-3xl border-2 border-vert shadow-sm mx-auto max-w-[1650px] duration-300">
        <img class="w-full h-40 sm:h-full sm:w-60 lg:w-[400px] lg:h-[400px] " src="/img/agriculteur.webp" alt="photo evenement">
        <div class="text-center sm:text-start p-4 sm:pb-0 lg:px-8 xl:mt-12 xl:px-14">
            <h2 class="font-Subheading mb-2 font-medium text-vertFonce sm:text-sm lg:text-lg xl:text-xl">{{ title }}Marché Des Producteurs Locaux - Vennans (25640)</h2>
            <span class="font-secondary text-5xs lg:text-2xs ml-4">{{ date }}Vendredi : 18H - 21H</span>
            <p class="mt-4 text-start sm:mt-1 sm:leading-5 sm:text-2xs md:ml-4 lg:text-base lg:leading-7 lg:mt-5">{{ description }}1er vendredi du mois.
            À partir du vendredi 7 avril jusqu'au 1er décembre 2023.
            Produits régionaux comme des légumes et fruits frais, miel, pain d'épice, tisanes, thés, biscuits, saucissons, bière, vin, fromage de vache, pâtisserie, chocolat...</p>
        </div>
    </div>
</template>