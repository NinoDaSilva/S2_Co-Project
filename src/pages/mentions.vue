<script setup lang="ts">
import Hero from '@/components/Hero.vue'
//
import {useHead} from '@unhead/vue'
useHead ({
  title: 'Mentions légales'
}) 
//
</script>

<template>
  <Hero
  title="Mentions légales"
  imgPath="/img/hero/connexion.webp"
  imgAlt="Image bannière page connexion"
  />

  <section class="section-mentions">
    <h2 class="section-mentions--titre">Qui sommes-nous ?</h2>
    <p>Notre site est : <a href="https://gout-local.nino-da-silva.fr" class="link font-bold">https://gout-local.nino-da-silva.fr</a></p>
    <p>Nous sommes un groupe de trois étudiants qui vous proposons un projet dans le cadre d'un exercice pédagogique au département <a href="https://mmi-montbeliard.nathanvanbignootvincler.fr">MMi de Montbéliard</a>.</p>
    <ul class="list-disc ml-8 mt-8">
      <li>Identité de l'organisation : SARL</li>
      <li>Siège social : 91 route des romains, 67200, Strasbourg, France</li>
      <li>Numéro d'immatriculation au RCS : En cours d'acquisition </li>
      <li>Adresse mail : <a href="mailto:contact@goutlocal.com" class="link font-bold">contact@goutlocal.com</a></li>
      <li>Identité de l'hébergeur (data) : Infomaniak, Infomaniak Network SA Rue Eugène Marziano 25 1227 Les Acacias (GE)</li>
    </ul>
  </section>

  <section class="section-mentions">
    <h2 class="section-mentions--titre">Utilisation et transmission de vos données personnelles</h2>
    <ol>
      <li id="1">
        <ul>
          <li></li>
          <li></li>
        </ul>
      </li>

      <li id="2">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>

      <li id="3"></li>

      <li id="4">
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>

      <li id="5"></li>
    </ol>
  </section>

  <section class="section-mentions">
    <h2 class="section-mentions--titre">Cookies</h2>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </section>

  <section class="section-mentions">
    <h2 class="section-mentions--titre">Durées de stockage de vos données</h2>
    <p></p>
    <p></p>
  </section>

  <section class="section-mentions">
    <h2 class="section-mentions--titre">Les droits que vous avez sur vos données</h2>
    <p></p>
    <p></p>
    <p></p>
    <p>Pour exercer leurs droits ou pour toute question relative à la protection des données personnelles, 
      les utilisateurs peuvent nous contacter à l'adresse suivante : <a href="mailto:contact@goutlocal.com" class="link font-bold">contact@goutlocal.com</a></p>
  </section>
</template>
