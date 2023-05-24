<script setup lang="ts">
import CardEvents from '@/components/CardEvents.vue';
//
import { OneEvent } from '@/backend';
  const props = defineProps<{
    id: string
  }>()
  const Event = await OneEvent(props.id)
//
</script>

<template>
  <div>
    <CardEvents v-bind="{ ...Event }" />
  </div>
</template>