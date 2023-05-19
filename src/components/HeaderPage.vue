<script setup lang="ts">
import { RouterLink } from 'vue-router'

import PanierIcon from '@/components/icons/PanierIcon.vue'
import GoutLocalLogo from '@/components/icons/GoutLocalLogo.vue'

import { ref, computed, watch } from 'vue'
const menuIsOpen = ref(false)
function closeMenu() {
  menuIsOpen.value = false
}
</script>

<template>
  <header
    class="bg-blanc bg-opacity-80 fixed z-10 flex w-full translate-y-0 items-center justify-between px-6 py-4 transition-all duration-300 ease-in-out text-sm xl:text-lg lg:py-0"
  >
    <div class="mr-8">
      <a href="/">
        <GoutLocalLogo class="w-[75px] h-[75px]" />
      </a>
    </div>

    <button
      class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden mt-[0.8vh]"
      @click="menuIsOpen = !menuIsOpen"
    >
      <div
        class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ 'translate-y-[9px] rotate-45 bg-blanc': menuIsOpen }"
      ></div>
      <div
        class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ 'opacity-0': menuIsOpen }"
      ></div>
      <div
        class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ '-translate-y-[9px] -rotate-45 bg-blanc': menuIsOpen }"
      ></div>
    </button>

    <nav
      class="bg-brun invisible opacity-0 fixed inset-0 h-screen w-screen text-center transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:items-center lg:tracking-wide lg:opacity-100 lg:bg-blanc lg:bg-opacity-0"
      :class="{ '!visible opacity-100': menuIsOpen }"
    >
      <ul
        class="font-primary font-semibold mt-[16vh] lg:m-0 lg:flex"
        :class="{ 'text-blanc': menuIsOpen }"
      >
        <li>
          <RouterLink class="menu-link" to="/pages/produits" @click="closeMenu"
            >Nos produits</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/pages/recettes" @click="closeMenu"
            >Nos recettes</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/pages/conseils" @click="closeMenu"
            >Nos conseils</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/pages/events" @click="closeMenu"
            >Évènements</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/pages/partenaires" @click="closeMenu"
            >Nos partenaires</RouterLink
          >
        </li>
      </ul>
    </nav>

    <div
      class="font-primary font-semibold invisible opacity-0 fixed inset-0 text-center transition-all duration-300 ease-in-out lg:visible lg:relative lg:flex lg:h-auto lg:items-center lg:tracking-wide lg:opacity-100 lg:justify-end"
      :class="{ '!visible opacity-100 text-blanc': menuIsOpen }"
    >
      <RouterLink
        class="menu-link max-lg:mt-[2.8vh] max-lg:ml-3"
        to="/pages/panier"
        @click="closeMenu"
        ><PanierIcon
      /></RouterLink>

      <RouterLink class="menu-link" to="/pages/connexion" @click="closeMenu">Connexion</RouterLink>
    </div>
  </header>
</template>
