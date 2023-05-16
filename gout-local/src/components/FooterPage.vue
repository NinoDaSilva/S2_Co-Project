<script setup lang="ts">
import { RouterLink } from "vue-router";
//import { FacebookIcon } from "@/components/icons/FacebookIcon.vue";
//import { TwitterIcon } from "@/components/icons/TwitterIcon.vue";
//import { InstagramIcon } from "@/components/icons/InstagramIcon.vue";
</script>

<template>
    <footer class="bg-[#ebebeb] font-secondary">

        <div class="w-full h-1 bg-bleuTurquoise"></div>

        <div class="flex justify-between">
            <div>
                <h2 class="font-bold">Réseaux sociaux</h2>
                <ul class="">
                    <li>
                        <a href="https://facebook.com" aria-label="facebook">
                            <FacebookIcon />
                            <label class="max-sm:hidden">Facebook</label>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" aria-label="twitter">
                            <TwitterIcon />
                            <label class="max-sm:hidden">Twitter</label>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" aria-label="instagram">
                            <InstagramIcon />
                            <label class="max-sm:hidden">Instagram</label>
                        </a>
                    </li>
                </ul>
            </div>
            <div class=""></div>
            <ul class="font-bold">
                <li>
                    <RouterLink to="/pages/mentions" class="">Mentions légales</RouterLink>
                </li>
                <li>
                    <RouterLink to="/pages/about" class="">En savoir plus</RouterLink>
                </li>
                <li>
                    <RouterLink to="/pages/contact" class="">Contact</RouterLink>
                </li>
            </ul>
            <div class=""></div>
        </div>

    </footer>   
</template>