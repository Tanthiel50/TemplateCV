<template>
  <div id="nav-experiences" class="section inverted experiences-section">
    <div class="section-left-layout">
      <h2 class="section-title">Expériences</h2>
    </div>
    <div class="section-right-layout">
      <div v-for="(exp, index) in expList" :key="index">
        <h2>{{ exp.name }}</h2>
        <h4>{{ exp.place }} • {{ exp.date }}</h4>
        <p v-html="exp.description"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Experiences.ts"></script>
<style scoped lang="scss" src="./Experiences.scss"></style>
