<script setup lang="ts">
import { pb } from '@/backend';
import type { EventsResponse } from '@/pocketbase-types';

const props: EventsResponse = defineProps<EventsResponse>();
const img0 = props.image;

const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>

<template>
    <div class="max-sm:w-[280px] sm:flex sm:my-20 my-3 overflow-hidden rounded-3xl border-2 border-vert shadow-sm mx-auto max-w-[1500px] duration-300">
        <img class="w-full h-40 sm:h-full sm:w-60 lg:w-[400px] lg:h-[400px] " :src="urlImg0" alt="photo evenement">
        <div class="text-center sm:text-start p-4 sm:pb-0 lg:px-8 xl:mt-12 xl:px-14">
            <h2 class="font-Subheading mb-2 font-medium text-vertFonce sm:text-sm lg:text-lg xl:text-xl">{{ title }}</h2>
            <span class="font-secondary text-5xs lg:text-2xs ml-4">{{ date }}</span>
            <p class="text-5xs mt-4 text-start sm:mt-1 sm:leading-5 sm:text-2xs md:ml-4 lg:text-base lg:leading-7 lg:mt-5">{{ description }}</p>
        </div>
    </div>
</template>