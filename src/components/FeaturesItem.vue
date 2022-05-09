<template>
  <div class="features-item">
    <img class="features-item-ico" :src="imageSrc" alt="aboba" />
    <div class="features-item-title">Instant Features</div>
    <my-text class="text-base w-80"
      >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat.</my-text
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  imageSrc: String,
});
</script>

<style lang="scss" scoped>
.features-item {
  @apply w-96 flex flex-col items-center justify-center mt-10;

  .features-item-ico {
    @apply mb-4;
  }
  .features-item-title {
    @apply text-white/90 text-3xl font-bold mb-4;
  }
}
</style>
