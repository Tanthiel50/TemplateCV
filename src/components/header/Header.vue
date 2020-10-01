<template>
  <header
    v-bind:class="{ 'with-background': fixNavbar }"
    v-bind:style="{ opacity: fixNavbar ? '1.0' : opacNavbar }"
  >
    <nav v-if="!isLegacy">
      <div
        v-scroll-to="{ el: '#nav-home', offset: 0 }"
        v-bind:class="{ active: currentLocation === 'nav-home' }"
      >Accueil</div>
      <div
        v-scroll-to="{ el: '#nav-about', offset: 0 }"
        v-bind:class="{ active: currentLocation == 'nav-about' }"
      >Présentation</div>
      <div
        v-scroll-to="{ el: '#nav-education', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-education' }"
      >Formations</div>
      <div
        v-scroll-to="{ el: '#nav-experiences', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-experiences' }"
      >Expériences</div>
      <div
        v-scroll-to="{ el: '#nav-skills', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-skills' }"
      >Compétences</div>
      <div
        v-scroll-to="{ el: '#nav-contact', offset: -50 }"
        v-bind:class="{ active: currentLocation == 'nav-contact' }"
      >Contact</div>
      <span v-scroll-to="{ el: '#nav-home', offset: 0 }" class="icon nav-icon icon-home"></span>
      <span v-scroll-to="{ el: '#nav-education', offset: -50 }" class="icon nav-icon icon-user-tie"></span>
      <span v-scroll-to="{ el: '#nav-skills', offset: -50 }" class="icon nav-icon icon-stats-bars"></span>
      <span v-scroll-to="{ el: '#nav-hobbies', offset: -50 }" class="icon nav-icon icon-book"></span>
      <span v-scroll-to="{ el: '#nav-contact', offset: -50 }" class="icon nav-icon icon-users"></span>
    </nav>
    <nav v-if="isLegacy">
      <router-link to="/">
        <div>Accueil</div>
        <span class="icon nav-icon icon-home"></span>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts" src="./Header.ts"></script>
<style scoped lang="scss" src="./Header.scss"></style>
