<script setup lang="ts">
import { pb } from '@/backend';
import type { RecettesResponse } from '@/pocketbase-types';

const props: RecettesResponse = defineProps<RecettesResponse>();
const img = props.image;

const urlImg0 = img && pb.getFileUrl(props, img, { thumb: '400x400' });
</script>

<template>
    <div class="group/item relative card-recette border-vert">
        <img :src="urlImg0" alt="photo recette" />
        <h3 class="absolute font-bold text-sm md-text-base lg:text-xl font-specific text-center text-blanc text-shadow">
            {{ titre }}
        </h3>
    </div>
</template>