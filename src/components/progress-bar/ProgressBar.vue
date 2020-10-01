<template>
  <div class="progress-bar">
    <div class="progress-bar-header">
      <h4>{{ name }}</h4>
      <h4 v-if="0 <= value && value < 45">{{ progressList[0] }}</h4>
      <h4 v-else-if="45 <= value && value < 65">{{ progressList[1] }}</h4>
      <h4 v-else-if="65 <= value && value < 100">{{ progressList[2] }}</h4>
      <h4 v-else-if="100 <= value">{{ progressList[3] }}</h4>
    </div>
    <div class="progress-bar-externe">
      <div
        class="progress-bar-interne"
        v-bind:style="{ width: value + '%' }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" src="./ProgressBar.ts"></script>
<style scoped lang="scss" src="./ProgressBar.scss"></style>
