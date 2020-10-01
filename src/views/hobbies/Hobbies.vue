<template>
  <div id="nav-hobbies" class="section inverted hobbies-section">
    <div class="section-left-layout">
      <h2 class="section-title">Loisirs</h2>
    </div>
    <div class="section-right-layout">
      <div class="wrap-container">
        <HobbieState
          v-for="(hobbie, index) in hobbieList"
          v-bind:key="'hobbieList' + index"
          v-bind:name="hobbie.name"
          v-bind:icon="hobbie.icon"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Hobbies.ts"></script>
<style scoped lang="scss" src="./Hobbies.scss"></style>
