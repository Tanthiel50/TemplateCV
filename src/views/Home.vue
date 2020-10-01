<template>
  <div>
    <Header />
    <div id="nav-home" class="home-page">
      <h1>{{ name }}</h1>
      <p v-html="description"></p>
      <div class="home-links">
        <!--span class="icon home-icon icon-facebook"></span>
        <span class="icon home-icon icon-twitter"></span>
        <span class="icon home-icon icon-instagram"></span>
        <span class="icon home-icon icon-twitch"></span-->
        <a
          href="https://github.com/Tanthiel50?tab=repositories"
          target="_blank"
        >
          <span class="icon home-icon icon-github"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%A9cile-blin-8ab25a72/"
          target="_blank"
        >
          <span class="icon home-icon icon-linkedin"></span>
        </a>
      </div>
    </div>
    <div class="home-button" v-scroll-to="{ el: '#nav-about', offset: 0 }">
      <span class="icon home-icon icon-circle-down"></span>
    </div>
    <About />
    <Education />
    <Experiences />
    <Skills />
    <Languages />
    <Hobbies />
    <Contact />
    <div class="footer-button" v-scroll-to="{ el: '#nav-home', offset: 0 }">
      <span class="icon home-icon icon-circle-down"></span>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss"></style>
