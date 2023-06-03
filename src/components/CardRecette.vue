<script setup lang="ts">
import { pb } from '@/backend';
import type { RecettesResponse } from '@/pocketbase-types';
import favoriDefault from '@/components/icons/favoriDefault.vue';

const props: RecettesResponse = defineProps<RecettesResponse>();
const img = props.image;

const urlImg0 = img && pb.getFileUrl(props, img, { thumb: '400x400' });

</script>

<template>
    <div class="group/item relative card-recette m-2 mx-auto w-5/6 border-vert">
        <!-- <RouterLink :to="{ name: 'recettes-id', params: { id: recette.id }}"> -->
            <img :src="urlImg0" alt="photo recette" />
            <h3 class="absolute max-sm:leading-5 mt-4 font-bold sm:text-sm md:text-base lg:text-xl font-specific text-center text-blanc text-shadow">
                {{ titre }}
            </h3>
        <!-- </RouterLink> -->
        <!-- <button>
            <favoriDefault class="absolute w-7 top-0 right-2 sm:w-12 sm:top-3 sm:right-3"/>
        </button> -->
    </div>
</template>