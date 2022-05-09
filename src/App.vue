<template>
  <div class="main_wrapper">
    <Header />
    <MainBlock />
    <Features />
    <ProductPromo />
    <Commentaries />
    <Footer />
  </div>
  <img class="main-shape" src="./assets/decor-shape-1.svg" alt="" />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import MainBlock from './components/MainBlock.vue';
import Features from './components/Features.vue';
import ProductPromo from './components/ProductPromo.vue';
import Commentaries from './components/Commentaries.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss">
#app {
  @apply bg-main-bg-color font-main;
}
.main_wrapper {
  @apply relative w-5/6 mx-auto my-0 z-10;
}
.main-shape {
  @apply absolute right-0 top-0;
}
</style>
