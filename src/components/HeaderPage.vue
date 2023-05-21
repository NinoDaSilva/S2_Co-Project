<script setup lang="ts">
import { RouterLink } from 'vue-router'

import PanierIcon from '@/components/icons/PanierIcon.vue'
import GoutLocalLogo from '@/components/icons/GoutLocalLogo.vue'

import { ref, computed, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const menuIsOpen = ref(false)
function closeMenu() {
  menuIsOpen.value = false
}

const { y } = useWindowScroll()
const underLimit = computed(() => y.value < 400)

const dirTop = ref(true)
watch(y, (y, oldY) => {
  dirTop.value = y < oldY
})
</script>

<template>
  <header
    :class="{
      '!-translate-y-full !bg-transparent': !dirTop,
      '!bg-transparent lg:!bg-white': underLimit
    }"
    class="bg-blanc bg-opacity-80 fixed z-20 flex w-full translate-y-0 items-center justify-between px-6 py-2 transition-all duration-300 ease-in-out text-sm xl:text-lg"
  >
    <div class="mr-8">
      <a href="/">
        <GoutLocalLogo class="w-[64px] h-[64px] sm:w-[75px] sm:h-[75px]" />
      </a>
    </div>

    <button
      class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden mt-[0.8vh]"
      @click="menuIsOpen = !menuIsOpen"
    >
      <div
        class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ 'translate-y-[9px] rotate-45 bg-blanc': menuIsOpen,
                '!bg-blanc': underLimit}"
      ></div>
      <div
        class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ 'opacity-0': menuIsOpen,
                '!bg-blanc': underLimit }"
      ></div>
      <div
        class="ease h-[2px] w-full transform rounded-full bg-noir transition duration-300"
        :class="{ '-translate-y-[9px] -rotate-45 bg-blanc': menuIsOpen,
                '!bg-blanc': underLimit }"
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
          <RouterLink class="menu-link" to="/produits" @click="closeMenu"
            >Nos produits</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/recettes" @click="closeMenu"
            >Nos recettes</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/conseils" @click="closeMenu"
            >Nos conseils</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/events" @click="closeMenu"
            >Évènements</RouterLink
          >
        </li>
        <li>
          <RouterLink class="menu-link" to="/partenaires" @click="closeMenu"
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
        to="/panier"
        @click="closeMenu"
        ><PanierIcon
      /></RouterLink>

      <RouterLink class="menu-link" to="/connexion" @click="closeMenu">Connexion</RouterLink>
    </div>
  </header>
</template>
