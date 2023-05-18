<script setup lang="ts">
const props = defineProps<{
  id: number
  title: string
  imgPath: string
  imgAlt: string
}>()
</script>

<template>
    <div>
        <img :src="imgPath" :alt="imgAlt">
        <h3>{{ title }}</h3>
    </div>
</template>