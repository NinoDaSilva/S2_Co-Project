<script setup lang="ts">

  const props = defineProps<{
    id: string
  }>()
  const Event = await OneEvent(props.id)
</script>

<template>
  <div>
    <EventCard v-bind="{ ...Event }" />
  </div>
</template>