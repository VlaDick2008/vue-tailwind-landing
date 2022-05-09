<template>
  <div class="header_wrapper">
    <div class="logo"><img class="rounded-full" src="../assets/logo.svg" alt="logo" /></div>
    <div class="btns_block">
      <button class="bg-transparent text-white/70 mr-7">Documentation</button>
      <my-button class="bg-button-color">Sign up</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from '../assets/logo.svg';
</script>

<style scoped>
.header_wrapper {
  @apply flex justify-between flex-1 pt-6;
}
</style>
