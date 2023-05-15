<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <HeaderPage/>
  <main class="">
    <h1 class="text-center">Goût local</h1>
    <RouterView />
  </main>
  <FooterPage/>
</template>
