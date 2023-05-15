<script setup lang="ts">
import { RouterLink } from "vue-router";
//import { PanierIcon } from "@/components/icons/PanierIcon.vue";
//import { GoutLocalLogo } from "@/components/icons/GoutLocalLogo.vue";
</script>

<template>
    <header class="bg-opacity-75 bg-neutral-50">
        <nav class="flex">
            <GoutLocalLogo />
            <ul class="flex font-primary font-semibold text-lg">
                <li class="flex"> 
                    <RouterLink to="/pages/produits" class="">
                        Nos produits
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/recettes" class="">
                        Nos recettes
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/conseils" class="">
                        Nos conseils
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/events" class="">
                        Évènements
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/partenaires" class="">
                        Nos partenaires
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/panier" class="">
                        <PanierIcon />
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/connexion" class="">
                        Connexion
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>   
</template>