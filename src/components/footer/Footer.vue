<template>
  <footer v-bind:class="{ 'legaced': isLegacy }">
    <div>
      © Copyrights
      <b>Cécile Blin</b>
    </div>
    <div>
      Template créé par
      <a href="https://github.com/Spefire/TemplateCV" target="_blank">
        <b>Nicholas Brun</b>
      </a> |
      <router-link class="footer-legacy" to="mentions-legales">Mentions Légales</router-link>
    </div>
  </footer>
</template>

<script lang="ts" src="./Footer.ts"></script>
<style scoped lang="scss" src="./Footer.scss"></style>
