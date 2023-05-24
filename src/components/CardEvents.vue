<script setup lang="ts">
import type { EventsResponse } from '@/pocketbase-types';
const props: EventsResponse = defineProps<EventsResponse>();

import { pb } from '@/backend';
const img0 = props.images[0];

const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>

<template>
    <div>
        <h2></h2>
        <span></span>
        <p></p>
    </div>
</template>