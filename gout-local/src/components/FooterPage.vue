<script setup lang="ts">
import { RouterLink } from "vue-router";
//import { FacebookIcon } from "@/components/icons/FacebookIcon.vue";
//import { TwitterIcon } from "@/components/icons/TwitterIcon.vue";
//import { InstagramIcon } from "@/components/icons/InstagramIcon.vue";
</script>

<template>
    <footer>

        <div class=""></div>

        <div>
            <h2 class="">Réseaux sociaux</h2>
            <ul>
                <li>
                    <a href="https://facebook.com" aria-label="facebook">
                        <FacebookIcon />
                        <label class="sm:hidden">Facebook</label>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" aria-label="twitter">
                        <TwitterIcon />
                        <label class="sm:hidden">Twitter</label>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" aria-label="instagram">
                        <InstagramIcon />
                        <label class="sm:hidden">Instagram</label>
                    </a>
                </li>
            </ul>
        </div>

        <div class=""></div>

        <ul>
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

    </footer>   
</template>