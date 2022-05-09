<template>
  <div class="product-promo-wrapper">
    <div class="title-block">
      <div class="green-title">Reach goals that matter</div>
      <my-secondary-title class="text-5xl">One product, unlimited solutions</my-secondary-title>
      <my-text class="my-4 w-1/2"
        >Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        laborum — semper quis lectus nulla.</my-text
      >
    </div>
    <div class="promo-block">
      <div class="promo-item">
        <div class="promo-item-left">
          <div class="promo-item-slogan">More speed. Less spend</div>
          <my-secondary-title class="text-promoFontSize font-medium"
            >Keep projects on schedule</my-secondary-title
          >
          <my-text class="promo-item-text"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</my-text
          >
          <ul class="promo-item-list">
            <li>Duis aute irure dolor in reprehenderit</li>
            <li>Excepteur sint occaecat</li>
            <li>Amet consectetur adipiscing elit</li>
          </ul>
        </div>
        <div class="promo-item-right">
          <img src="../assets/promo-img1.png" alt="" />
        </div>
      </div>
      <div class="promo-item">
        <div class="promo-item-right">
          <img src="../assets/promo-img2.png" alt="" />
        </div>
        <div class="promo-item-left ml-8">
          <div class="promo-item-slogan">More speed. Less spend</div>
          <my-secondary-title class="text-promoFontSize font-medium"
            >Keep projects on schedule</my-secondary-title
          >
          <my-text class="promo-item-text"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</my-text
          >
          <ul class="promo-item-list">
            <li>Duis aute irure dolor in reprehenderit</li>
            <li>Excepteur sint occaecat</li>
            <li>Amet consectetur adipiscing elit</li>
          </ul>
        </div>
      </div>
      <div class="promo-item">
        <div class="promo-item-left">
          <div class="promo-item-slogan">More speed. Less spend</div>
          <my-secondary-title class="text-promoFontSize font-medium"
            >Keep projects on schedule</my-secondary-title
          >
          <my-text class="promo-item-text"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</my-text
          >
          <ul class="promo-item-list">
            <li>Duis aute irure dolor in reprehenderit</li>
            <li>Excepteur sint occaecat</li>
            <li>Amet consectetur adipiscing elit</li>
          </ul>
        </div>
        <div class="promo-item-right">
          <img src="../assets/promo-img3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.product-promo-wrapper {
  @apply pb-20 border-b border-white/10;
}

.title-block {
  @apply text-center;

  .green-title {
    @apply text-green-700 bg-green-200 w-48 py-0.5 rounded-full text-sm font-semibold mx-auto mt-16 mb-5;
  }
}

.promo-item {
  @apply flex justify-center mt-16;

  .promo-item-left {
    @apply w-2/5;
  }
  .promo-item-slogan {
    @apply font-productPromo text-button-color text-xl mb-5;
  }

  .promo-item-text {
    @apply mt-4 mb-6;
  }

  .promo-item-list {
    list-style-image: url('../assets/checkmark.svg');
    @apply text-white/70 leading-8 font-light ml-5;
  }
}
</style>
