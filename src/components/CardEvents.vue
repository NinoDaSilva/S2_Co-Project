<script setup lang="ts">
import type { EventsResponse } from '@/pocketbase-types';
const props: EventsResponse = defineProps<EventsResponse>();

// import { pb } from '@/backend';
// const img0 = props.images[0];

// const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>

<template>
    <div>
        <img :src="img0" alt="photo evenement">
        <div>
            <h2>{{ title }}</h2>
            <span>{{ date }}</span>
            <p>{{ description }}</p>
        </div>
    </div>
</template>