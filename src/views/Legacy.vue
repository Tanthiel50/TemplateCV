<template>
  <div>
    <Header v-bind:isLegacy="true" />
    <div id="nav-legacy" class="legacy-page">
      <h2>Mentions Légales</h2>
      <p v-html="mentions"></p>
      <router-link class="link-button" to="/">
        <span class="icon button-icon icon-home"></span>Retourner à l'accueil
      </router-link>
    </div>
    <Footer v-bind:isLegacy="true" />
  </div>
</template>

<script lang="ts" src="./Legacy.ts"></script>
<style lang="scss" src="./Legacy.scss"></style>
