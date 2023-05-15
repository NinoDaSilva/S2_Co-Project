<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <header class="bg-opacity-75 bg-neutral-50">
        <nav class="">
            <ul class="flex font-primary font-semibold text-lg">
                <li class="flex"> 
                    <img src="logo.png" class="" />
                    <RouterLink to="/pages/Produits" class="">
                        Nos produits
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/Recettes" class="">
                        Nos recettes
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/Conseils" class="">
                        Nos conseils
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/events" class="">
                        Évènements
                    </RouterLink>
                </li>
                <li class="flex">
                    <RouterLink to="/pages/Partenaires" class="">
                        Nos partenaires
                    </RouterLink>
                </li>
                <li class="flex">
                    <img src="panier.png" class="" />
                    <RouterLink to="/pages/Connexion" class="">
                        Connexion
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>   
</template>