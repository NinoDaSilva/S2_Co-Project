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
    <img class="max-sm:h-[170px] w-full" :src="imgPath" :alt="imgAlt" />
    <div class="absolute left-[16%] right-[14%] bottom-7 sm:bottom-[30%]">
      <h1 class="title-head">{{ title }}</h1>
      <slot name="chapo"></slot>
    </div>
    <div class="underligne w-full rounded-none"></div>
  </div>
</template>
