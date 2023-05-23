<script setup lang="ts">
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Accueil'
}) 
import Hero from '@/components/Hero.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import CarotteIcon from '@/components/icons/CarotteIcon.vue'
import RecetteIcon from '@/components/icons/RecetteIcon.vue'
import JournalIcon from '@/components/icons/JournalIcon.vue'
import SanteIcon from '@/components/icons/SanteIcon.vue'
import CardProduit from '@/components/CardProduit.vue'

import { allProduits } from '@/backend'
const produitListe = await allProduits()

</script>

<template>
  <Hero
    title="Découvrez nos produits 100% locaux !"
    imgPath="/img/hero/accueil.webp"
    imgAlt="Image bannière page d'accueil"
    imgSndPath="/img/hero/planche_bois.webp"
    imgSndAlt="Planche en bois"
  >
  </Hero>

  <div class="text-center mt-10">
    <h2 class="text-2xs lg:text-xl">Vert, écolo et proche de chez vous !</h2>
    <h1 class="font-specific text-xs mt-1 sm:mt-0 lg:text-2xl">Goût local</h1>
  </div>

  <section class="sm:mb-28">
    <article class="parent-block-home">
      <CarotteIcon class="icon-home"/>
      <RouterLink to="/partenaires" class="block-home">
        <div>
          <p>
            Avec nous, plus besoin de chercher des heures un producteur qui favorise le circuit
            court près de chez vous.
          </p>
          <p>Retrouver les facilement grâce à notre carte.</p>
        </div>
        <ArrowIcon class="block-home--arrow" />
      </RouterLink>
    </article>

    <div class="text-brun font-bold sm:text-sm xl:text-lg sm:ml-32 sm:mt-14">
      <div class="ml-8">
        <p class="-ml-8">Vous ne savez pas quoi cuisiner ?</p>
        <div class="underligne w-[20vh] sm:w-[40vh]"></div>
      </div>

      <div class="ml-40 sm:ml-60">
        <p class="-ml-8 mt-4">Pas de problème !</p>
        <div class="underligne w-[10vh] sm:w-[22vh]"></div>
      </div>
    </div>

    <article class="parent-block-home">
      <RecetteIcon class="icon-home"/>
      <RouterLink to="/recettes" class="block-home">
        <p>
          Nous vous proposons une variété d'idées de recettes à faire avec les produits que vous
          venez d'acheter. Alors n'hésitez plus et faites vous plaisir avec de bons petits plats.
        </p>
        <ArrowIcon class="block-home--arrow" />
      </RouterLink>
    </article>
  </section>

  <section class="sm:mb-10">
    <div class="sm:mb-10 xl:text-xl">
      <div class="ml-8">
        <h2 class="-ml-8">Des produit frais</h2>
        <div class="underligne w-[10vh] sm:w-[20vh]"></div>
      </div>

      <div class="ml-24 mt-4 sm:ml-40">
        <h2 class="-ml-5 sm:-ml-8">et de saison !</h2>
        <div class="underligne w-[8vh] sm:w-[15vh]"></div>
      </div>
    </div>

    <div class="flex justify-between p-10 lg:px-40">
      <RouterLink to="/produits"
        ><CardProduit
      /></RouterLink>
      <RouterLink to="/produits"
        ><CardProduit
      /></RouterLink>
      <RouterLink to="/produits"
        ><CardProduit
      /></RouterLink>
    </div>
  </section>

  <section class="bg-brunClair tracking-wide sm:px-20 sm:-mx-[100px] p-4 py-6 sm:p-10 xl:px-20">
    <div class="lg:flex max-w-[1920px] mx-auto">
      <img src="/img/map-france.webp" alt="carte" class="mx-auto my-auto w-60 h-60 md:w-1/2 md:h-1/2 lg:w-2/5 lg:h-2/5" />

      <div class="mt-5 sm:mx-10 lg:ml-20 xl:mt-16 xl:mx-20 xl:mr-10 xl:ml-36">
        <div class="ml-12 mb-5 lg:mb-8">
          <h2 class="-ml-8">Quelques producteurs</h2>
          <div class="underligne w-[16vh] sm:w-[28vh]"></div>
        </div>
        <p class="md:text-xs xl:text-base">Goût local n'hésite pas à se rapprocher directement auprès des producteurs.</p>
        <p class="md:text-xs xl:text-base">
          Cela permet notamment de mettre en place des ventes directes pour vous offrir la
          possibilité de récupérer des produits frais directement à la source.
        </p>
        <p class="ml-6 my-3">Un geste écologique...</p>
        <p class="md:text-xs xl:text-base">
          Et cela permet aux producteurs de vendre leurs produits invendus avant leur péremption,
          <strong>à des prix réduits !</strong>
        </p>
        <p class="md:text-xs xl:text-base">Ce qui leur évitent de jeter, et donc d'avoir de trop grosses pertes.</p>
        <p class="text-center mt-4">Un grand geste pour l'écologie et les producteurs locaux.</p>
      </div>
    </div>

    <div class="mt-6 sm:mt-10 md:mt-14 sm:ml-8 md:flex max-sm:text-center">
      <div class="ml-10 mb-4">
        <p class="-ml-10 font-bold">Pour en savoir plus, nous vous invitons à cliquer</p>
        <div class="max-sm:hidden underligne w-full sm:w-[50vh]"></div>
      </div>
      <RouterLink to="/partenaires" class="md:ml-10 max-md:text-center">
        <p>juste ici</p>
      </RouterLink>
    </div>
  </section>

  <section>
    <article class="parent-block-home">
      <JournalIcon class="icon-home"/>
      <RouterLink to="/events" class="block-home bg-vertClair">
        <p>
          Retrouver toute l'actualité concernants des évènements communautaire locaux, tels que les
          marchés, les foires écologiques, les ateliers de jardinage, etc.
        </p>
        <ArrowIcon class="block-home--arrow" />
      </RouterLink>
    </article>

    <div class="text-brun font-bold sm:ml-10 sm:mt-14">
      <div class="ml-6">
        <p class="-ml-6">Besoins de conseils pour mieux consommer ? </p>
        <div class="underligne w-[32vh] sm:w-[48vh]"></div>
      </div>

      <div class="ml-52 sm:ml-80">
        <p class="-ml-6 mt-4">Pas de problème !</p>
        <div class="underligne w-[12vh] sm:w-[20vh]"></div>
      </div>
    </div>

    <article class="parent-block-home">
      <SanteIcon class="icon-home"/>
      <RouterLink to="/conseils" class="block-home bg-vertClair">
        <p>On vous propose quelques conseils afin de mieux consommer et adapter vos habitudes.</p>
        <ArrowIcon class="block-home--arrow" />
      </RouterLink>
    </article>
  </section>

  <section class="bg-vertClair py-5 sm:py-10 sm:-mx-[100px] md:mt-20">
    <div class="text-center">
      <h2 class="sm:text-lg">Suivez les infos avec notre Newsletter</h2>
      <div class="w-[40vh] sm:w-[58vh] h-1 bg-bleuTurquoise rounded-xl mx-auto mt-2"></div>
    </div>

    <form class="max-w-md md:max-w-xl mx-auto px-8 pt-6 mb-4 mt-4 sm:mt-10">
      <div class="mb-4">
        <label class="form-label--home" for="last-name">
          Nom
        </label>
        <input class="form-champ"
          id="last-name" type="text" placeholder="Entrez votre nom">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="first-name">
          Prénom
        </label>
        <input class="form-champ"
          id="first-name" type="text" placeholder="Entrez votre prénom">
      </div>
      <div class="mb-4">
        <label class="form-label--home" for="email">
          Mail
        </label>
        <input class="form-champ"
          id="email" type="email" placeholder="Entrez votre adresse mail">
      </div>
      <div class="mt-5 items-center">
        <input class="mr-3 sm:mr-5" id="confidential" type="checkbox">
        <label for="confidential">J'accepte <RouterLink to="/mentions" class="link"><strong>la politique de confidentialité</strong></RouterLink></label>
      </div>
      <div class="flex items-center justify-center mt-6 sm:mt-10">
        <button class="bg-vertFonce text-blanc font-Subheading py-2 px-10 sm:px-16 rounded-full" type="submit">
          Envoyez
        </button>
      </div>
    </form>
  </section>
</template>
