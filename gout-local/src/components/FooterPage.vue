<script setup lang="ts">
import { RouterLink } from "vue-router";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import GoutLocalLogo from "./icons/GoutLocalLogo.vue";
</script>

<template>
    <footer class="bg-[#ebebeb] font-secondary max-md:text-center">

        <div class="w-full h-1 bg-bleuTurquoise"></div>

        <div class="p-6 md:justify-around md:flex">
            <div class="max-md:mb-10">
                <h2 class="font-bold">Réseaux sociaux</h2>
                <ul class="max-sm:flex mx-sm:px-5 mt-6 justify-between">
                    <li>
                        <a href="https://facebook.com" aria-label="facebook" class="items-center sm:flex sm:ml-2 mb-5">
                            <FacebookIcon />
                            <label class="text-xs max-sm:hidden sm:ml-5">Facebook</label>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" aria-label="twitter" class="items-center sm:flex sm:ml-2 mb-5">
                            <TwitterIcon />
                            <label class="text-xs max-sm:hidden sm:ml-5">Twitter</label>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" aria-label="instagram" class="items-center sm:flex sm:ml-2 mb-5">
                            <InstagramIcon />
                            <label class="text-xs max-sm:hidden sm:ml-5">Instagram</label>
                        </a>
                    </li>
                </ul>
            </div>
            <div class=""></div>
            <ul class="font-bold">
                <li class="">
                    <RouterLink to="/pages/mentions" class="">Mentions légales</RouterLink>
                </li>
                <li class="mt-6">
                    <RouterLink to="/pages/about" class="">En savoir plus</RouterLink>
                </li>
                <li class="mt-6">
                    <RouterLink to="/pages/contact" class="">Contact</RouterLink>
                </li>
            </ul>
            <div class=""><GoutLocalLogo class="w-[150px] h-[150px]" /></div>
        </div>

    </footer>   
</template>