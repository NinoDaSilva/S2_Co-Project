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
  <div>
    <div>
      <h1>{{ title }}</h1>
      <img v-if="(imgSndAlt, imgSndPath)" :src="imgSndPath" :alt="imgSndAlt" />
    </div>

    <div>
      <slot name="elt"></slot>
    </div>

    <img :src="imgPath" :alt="imgAlt" />
  </div>
</template>
