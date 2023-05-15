<script setup lang="ts">
defineProps<{
    title: string;
    imgPath: string;
    imgAlt: string;
    imgSndPath: string;
    imgSndAlt: string;
}>();
</script>

<template>
    <div>
        <div>
            <h1>{{ title }}</h1>
            <img :src="imgSndPath" :alt="imgSndAlt" />
        </div>
        <img :src="imgPath" :alt="imgAlt" />
    </div>
</template>