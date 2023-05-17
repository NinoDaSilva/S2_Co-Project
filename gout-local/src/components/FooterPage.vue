<script setup lang="ts">
import { RouterLink } from "vue-router";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import GoutLocalLogo from "./icons/GoutLocalLogo.vue";
</script>

<template>
    <footer class="bg-[#ebebeb] font-secondary transition-all duration-300 text-sm lg:text-base max-md:text-center">
        
        <div class="w-full h-1 bg-bleuTurquoise"></div>

        <div class="p-6 px-20 md:pr-0 justify-between md:flex lg:tracking-wide">

            <div class="my-auto mb-10 md:hidden"><GoutLocalLogo class="w-[92px] h-[92px] mx-auto" /></div>

            <div class="md:flex">
                <div class="mt-3 max-md:mb-10 md:mr-10 lg:mr-32">
                    <h2 class="font-bold max-md:hidden">Réseaux sociaux</h2>
                    <ul class="max-sm:flex mx-sm:px-5 mt-6 justify-between">
                        <li>
                            <a href="https://facebook.com" aria-label="facebook" class="items-center max-md:justify-center sm:flex sm:ml-2 mb-5">
                                <FacebookIcon />
                                <label class="social-link">Facebook</label>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" aria-label="twitter" class="items-center max-md:justify-center sm:flex sm:ml-2 mb-5">
                                <TwitterIcon />
                                <label class="social-link">Twitter</label>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" aria-label="instagram" class="items-center max-md:justify-center sm:flex sm:ml-2 mb-5">
                                <InstagramIcon />
                                <label class="social-link">Instagram</label>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex w-0.5 h-64 bg-bleuTurquoise max-md:hidden md:mr-10 lg:mr-32"></div>

                <ul class="mt-3 font-bold">
                    <li class="">
                        <RouterLink to="/pages/mentions" class="link">Mentions légales</RouterLink>
                    </li>
                    <li class="mt-6">
                        <RouterLink to="/pages/about" class="link">En savoir plus</RouterLink>
                    </li>
                    <li class="mt-6">
                        <RouterLink to="/pages/contact" class="link">Contact</RouterLink>
                    </li>
                </ul>

                <div class="flex w-0.5 h-64 bg-bleuTurquoise max-md:hidden md:ml-10 lg:ml-32"></div>
            </div>
        
            <div class="my-auto mx-auto max-md:hidden"><GoutLocalLogo class="w-[150px] h-[150px]" /></div>
    
        </div>
    </footer>   
</template>