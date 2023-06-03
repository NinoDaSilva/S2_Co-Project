<script setup lang="ts">
import { uneRecette } from '@/backend';
import recettesPage from '@/components/recettesPage.vue';

const props = defineProps<{
  id: string
}>();
const recette = await uneRecette(props.id);
</script>

<template>
  <recettesPage v-bind="{ ...recette}" />
</template>