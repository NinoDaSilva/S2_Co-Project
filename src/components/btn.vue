<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
    <button class="bg-bleuTurquoise text-blanc font-Subheading py-2 px-10 rounded-full shadow-md hover:scale-[1.02] duration-300" type="submit">
        {{ text }}
    </button>
</template>