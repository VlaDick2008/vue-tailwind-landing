<template>
  <button class="text-white text-sm px-6 py-3 rounded-sm hover:opacity-90 transition-all">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'my-button',
};
</script>

<style scoped></style>
