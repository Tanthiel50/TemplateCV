<template>
  <div id="nav-skills" class="section skills-section">
    <div class="section-left-layout">
      <h2 class="section-title">Compétences</h2>
    </div>
    <div class="section-right-layout">
      <div class="wrap-container">
        <ProgressBar
          v-for="(skill, index) in skillList"
          v-bind:key="'skillList' + index"
          v-bind:name="skill.name"
          v-bind:value="skill.value"
        />
      </div>
      <ul class="wrap-container">
        <li
          v-for="(otherSkill, index) in otherSkillList"
          v-bind:key="'otherSkillList' + index"
        >{{ otherSkill }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./Skills.ts"></script>
<style scoped lang="scss" src="./Skills.scss"></style>
