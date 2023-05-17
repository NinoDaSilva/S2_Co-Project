<script setup lang="ts">
import { RouterLink } from "vue-router";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
</script>

<template>
    <footer class="bg-[#ebebeb] font-secondary">

        <div class="w-full h-1 bg-bleuTurquoise"></div>

        <div class="flex justify-between p-6">
            <div>
                <h2 class="font-bold">Réseaux sociaux</h2>
                <ul class="mt-6">
                    <li>
                        <a href="https://facebook.com" aria-label="facebook" class="items-center lg:flex lg:ml-2 mb-5">
                            <FacebookIcon />
                            <label class="text-xs max-sm:hidden lg:ml-5">Facebook</label>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" aria-label="twitter" class="items-center lg:flex lg:ml-2 mb-5">
                            <TwitterIcon />
                            <label class="text-xs max-sm:hidden lg:ml-5">Twitter</label>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" aria-label="instagram" class="items-center lg:flex lg:ml-2 mb-5">
                            <InstagramIcon />
                            <label class="text-xs max-sm:hidden lg:ml-5">Instagram</label>
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