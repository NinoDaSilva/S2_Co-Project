<script setup lang="ts">
import { RouterLink } from "vue-router";

import { ref, computed, watch } from 'vue';
const activeMenu = ref(false);
function closeMenu() {
	  activeMenu.value = false
	}

//import { PanierIcon } from "@/components/icons/PanierIcon.vue";
//import { GoutLocalLogo } from "@/components/icons/GoutLocalLogo.vue";
</script>

<template>
    <header class="bg-neutral-50 fixed z-10 flex w-full translate-y-0 items-stretch justify-between px-6 py-2 transition-all duration-300 ease-in-out
        lg:py-0">
        
        <div class="flex items-center">
            <a href="/">
                <GoutLocalLogo />
            </a>
        </div>

        <div class="flex items-center gap-4">

            <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden"
                @click="activeMenu = !activeMenu">
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ 'translate-y-[9px] rotate-45 bg-white': activeMenu }">
                </div>
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ 'bg-white opacity-0': activeMenu }">
                </div>
                <div class="ease h-[2px] w-full transform rounded-full bg-black transition duration-300"
                    :class="{ '-translate-y-[9px] -rotate-45 bg-white': activeMenu }">
                </div>
            </button>

        
            <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-indigo text-2xl text-white transition-all duration-300 ease-in-out
                lg:visible lg:relative lg:flex lg:h-auto lg:items-center lg:tracking-wide lg:opacity-100"
                :class="{ '!visible opacity-100': activeMenu }">
                <ul class="font-primary font-semibold text-center text-lg mt-[10vh] md:flex lg:m-0 lg:flex">
                    <li class="md:flex"> 
                        <RouterLink class="menu-link" to="/pages/produits" 
                            @click="closeMenu">Nos produits</RouterLink>
                    </li>
                    <li class="md:flex">
                        <RouterLink class="menu-link" to="/pages/recettes"
                            @click="closeMenu">Nos recettes</RouterLink>
                    </li>
                    <li class="md:flex">
                        <RouterLink class="menu-link" to="/pages/conseils"
                            @click="closeMenu">Nos conseils</RouterLink>
                    </li>
                    <li class="md:flex">
                        <RouterLink class="menu-link" to="/pages/events"
                            @click="closeMenu">Évènements</RouterLink>
                    </li>
                    <li class="md:flex">
                        <RouterLink class="menu-link" to="/pages/partenaires"
                            @click="closeMenu">Nos partenaires</RouterLink>
                    </li>
                    <li class="md:flex">
                        <RouterLink class="menu-link" to="/pages/panier"
                            @click="closeMenu">
                            <PanierIcon /></RouterLink>
                    </li>
                </ul>
                <span class="text-center md:flex">
                    <RouterLink class="menu-link" to="/pages/connexion"
                        @click="closeMenu">Connexion</RouterLink>
                </span>
            </nav>

        </div>

    </header>   
</template>