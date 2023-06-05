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

  <section class="section-mentions sm:my-28">
    <h2 class="section-mentions--titre">Utilisation et transmission de vos données personnelles</h2>
    <ol class="list-decimal ml-8">
      <li class="my-8">
        <h3 class="font-medium">Les données collectées sur ce site sont utilisées pour les finalités suivantes :</h3>
        <ul class="list-disc ml-8 mt-4 mb-8">
          <li>L’envoie de newsletters</li>
          <li>L’amélioration de l’expérience utilisateur</li>
        </ul>
      </li>

      <li>
        <h3 class="font-medium">Les données collectées sur ce site peuvent inclure :</h3>
        <ul class="list-disc ml-8 mt-4 mb-8">
          <li>Nom</li>
          <li>Adresse électronique (email)</li>
          <li>Adresse postale</li>
          <li>Numéro de téléphone</li>
        </ul>
      </li>

      <li class="mb-8">
        <h3 class="font-medium">Le traitement des données est fondé sur le consentement de l’utilisateur ou sur l’intérêt légitime de Goût local à traiter les données collectées.</h3>
      </li>

      <li class="mb-8">      
        <h3 class="font-medium">Les données collectées sur ce site peuvent être communiquées à :</h3>
        <ul class="list-disc ml-8 mt-4">
          <li>Prestataires de services techniques</li>
          <li>Partenaires commerciaux</li>
          <li>Autorités Judiciaires</li>
        </ul>
      </li>

      <li>Les données collectées sur ce site sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, sauf si une durée de conservation plus longue est autorisée ou imposée par la loi.</li>
    </ol>
  </section>

  <section class="section-  sm:my-28">
    <h2 class="section-mentions--titre">Cookies</h2>
    <p class="my-8">Ce site utilise des cookies pour améliorer l’expérience utilisateur et à des fins statistiques. Les utilisateurs peuvent configurer leur navigateur pour refuser les cookies ou être informés de leur utilisation. Ces cookies expirent au bout d’un an.</p>
    <p class="my-8">Si vous vous rendez sur la page de connexion, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.</p>
    <p class="my-8">Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.</p>
    <p class="my-8">En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.</p>
    <p>Ce site utilise des cookies pour améliorer l’expérience utilisateur et à des fins statistiques. Les utilisateurs peuvent configurer leur navigateur pour refuser les cookies ou être informés de leur utilisation.</p>
  </section>

  <section class="section-mentions sm:my-28">
    <h2 class="section-mentions--titre">Durées de stockage de vos données</h2>
    <p>Pour les comptes qui s’inscrivent sur notre site (le cas échéant), nous stockons les données personnelles indiquées dans leur profil.</p>
    <p class="my-8">Tous les comptes peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (à l’exception de leur identifiant. Dans ce cas une demande sera nécessaire). Les gestionnaires du site peuvent aussi voir et modifier ces informations.</p>
  </section>

  <section class="section-mentions sm:my-28">
    <h2 class="section-mentions--titre">Les droits que vous avez sur vos données</h2>
    <p class="my-8">Si vous avez un compte ou si vous avez laissé des commentaires sur le site, vous pouvez demander à recevoir un fichier contenant toutes les données personnelles que nous possédons à votre sujet, incluant celles que vous nous avez fournies.</p>
    <p class="my-8">Vous pouvez également demander la suppression des données personnelles vous concernant. Cela ne prend pas en compte les données stockées à des fins administratives, légales ou pour des raisons de sécurité.</p>
    <p class="my-8">Nous mettons en œuvre les mesures techniques et organisationnelles nécessaires pour garantir la sécurité des données collectées.</p>
    <p class="my-8">Pour exercer leurs droits ou pour toute question relative à la protection des données personnelles, 
      les utilisateurs peuvent nous contacter à l'adresse suivante : <a href="mailto:contact@goutlocal.com" class="link font-bold">contact@goutlocal.com</a></p>
  </section>
</template>
