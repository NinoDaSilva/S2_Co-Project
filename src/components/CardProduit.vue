<script setup lang="ts">
  import { pb } from '@/backend';
  import type { ProduitsResponse } from '@/pocketbase-types';
  
  const props: ProduitsResponse = defineProps<ProduitsResponse>();
  const img0 = props.image;
  const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '400x400' });
</script>

<template>
  <div class="group/item card-produit">
    <img :src="urlImg0" alt="photo produit"
      class="group-hover/item:opacity-30 ease-linear duration-200"/>
    <h3 class="invisible group-hover/item:visible absolute font-bold text-sm md-text-base lg:text-xl font-specific text-center">
      {{ name }}
    </h3>
  </div>
</template>
