<script setup lang="ts">
const props = defineProps<{
  id: number
  title: string
  imgPath: string
  imgAlt: string
}>()
</script>

<template>
    <div class="group/item max-w-[350px] max-h-[350px] flex justify-center items-center rounded-[30px] border-[6px] border-vertFonce overflow-hidden shadow-lg">
        <img class="group-hover/item:opacity-30 ease-linear duration-200" :src="imgPath" :alt="imgAlt">
        <h3 class="invisible group-hover/item:visible absolute font-bold text-xl font-specific text-center">{{ title }}</h3>
    </div>
</template>