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
    <div class="absolute">
      <h1 class="text-center">{{ title }}</h1>
      <img v-if="(imgSndAlt, imgSndPath)" :src="imgSndPath" :alt="imgSndAlt" />
    </div>
  </div>
</template>
