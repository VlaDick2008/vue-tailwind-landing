<template>
  <div class="features-wrapper">
    <my-secondary-title class="mt-28 text-5xl">Build up the whole picture</my-secondary-title>
    <my-text class="mt-5 mb-14 w-3/5"
      >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</my-text
    >
    <div class="features-block">
      <FeaturesItem imageSrc="/features-ico1.svg" />
      <FeaturesItem imageSrc="/features-ico2.svg" />
      <FeaturesItem imageSrc="/features-ico3.svg" />
      <FeaturesItem imageSrc="/features-ico4.svg" />
      <FeaturesItem imageSrc="/features-ico5.svg" />
      <FeaturesItem imageSrc="/features-ico6.svg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FeaturesItem from './FeaturesItem.vue';
</script>

<style lang="scss" scoped>
.features-wrapper {
  @apply text-center;

  .features-block {
    @apply flex flex-wrap w-4/5 my-0 mx-auto justify-between pb-20 border-b border-white/10;
  }
}
</style>
