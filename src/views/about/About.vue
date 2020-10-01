<template>
  <div id="nav-about" class="section about-section">
    <div class="section-left-layout">
      <div class="about-profile" />
    </div>
    <div class="section-right-layout">
      <h2>Présentation</h2>
      <p class="about-text" v-html="aboutText"></p>
      <div class="about-links">
        <a class="link-button" v-bind:href="cvFile" download>
          <span class="icon button-icon icon-folder-upload"></span>Télécharger
          le CV
        </a>
        <a class="link-button" v-scroll-to="{ el: '#nav-contact', offset: -50 }">
          <span class="icon button-icon icon-users"></span>Me contacter
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./About.ts"></script>
<style scoped lang="scss" src="./About.scss"></style>
