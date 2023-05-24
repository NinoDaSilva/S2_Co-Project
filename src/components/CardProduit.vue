<script setup lang="ts">
  import type { ProduitsResponse } from '@/pocketbase-types';
  import { pb } from '@/backend';
  
  const props: ProduitsResponse = defineProps<ProduitsResponse>();
  const img0 = props.image[0];
  const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>

<template>
  <div
    class="group/item max-w-[350px] max-h-[350px] flex justify-center items-center rounded-[30px] border-4 border-vertFonce overflow-hidden shadow-lg"
  >
    <img :src="img0" alt="photo produit"
      class="group-hover/item:opacity-30 ease-linear duration-200"
    />
    <h3
      class="invisible group-hover/item:visible absolute font-bold text-xl font-specific text-center"
    >
      {{ name }}
    </h3>
  </div>
</template>
