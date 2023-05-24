<script setup lang="ts">
import { OneEvent } from '@/backend';
  const props = defineProps<{
    id: string
  }>()
  const Event = await OneEvent(props.id)

import CardEvents from '@/components/CardEvents.vue';
</script>

<template>
  <div>
    <CardEvents v-bind="{ ...Event }" />
  </div>
</template>