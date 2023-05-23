<script setup lang="ts">
defineProps<{
  title: string
  imgPath: string
  imgAlt: string
  imgSndPath?: string
  imgSndAlt?: string
}>()
</script>

<template>
  <div class="relative z-0 sm:-mx-[100px]">
    <img :src="imgPath" :alt="imgAlt" />
    <div class="absolute left-[20%] right-[20%] bottom-4 sm:bottom-[30%] lg:w-[1035px]">
      <!-- <img class="absolute z-0 top-0 left-0" v-if="(imgSndAlt, imgSndPath)" :src="imgSndPath" :alt="imgSndAlt" /> -->
      <h1 class="title-head">{{ title }}</h1>
    </div>
  </div>
</template>
