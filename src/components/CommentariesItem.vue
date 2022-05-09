<template>
  <div class="commentaries-item">
    <div class="relative mb-3">
      <img class="commentary-ico" :src="imageSrc" alt="person" />
      <img class="absolute top-0 left-8" src="../assets/quote.svg" alt="" />
    </div>

    <my-text class="pb-6 border-b border-white/10">{{ personQuote }}</my-text>
    <div class="mt-6">
      <span class="text-white">{{ personName }}</span
      ><span class="text-white/20"> / </span><span class="text-button-color">{{ personProj }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  imageSrc: String,
  personName: String,
  personProj: String,
  personQuote: String,
});
</script>

<style lang="scss" scoped>
.commentaries-item {
  @apply bg-white/10 m-5 p-5 w-96;
}

.commentary-person-block {
  @apply flex;
}
</style>
