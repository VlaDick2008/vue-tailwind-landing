<template>
  <div class="commentaries-block-wrapper">
    <div class="commentaries-title-block">
      <my-secondary-title class="text-5xl mt-28">Don't take our word for it</my-secondary-title>
      <my-text class="w-2/4 mt-2 mb-16"
        >Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at
        volutpat diam ut venenatis tellus—in ornare.</my-text
      >
    </div>
    <div class="commentaries">
      <CommentariesItem
        personQuote="— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
        imageSrc="/commentaries-people1.jpg"
        personProj="UX Board"
        personName="Anastasia Dan"
      />
      <CommentariesItem
        personQuote="— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
        imageSrc="/commentaries-people2.png"
        personProj="AppName"
        personName="Roman Level"
      />
      <CommentariesItem
        personQuote="— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before."
        imageSrc="/commentaries-people3.jpg"
        personProj="Reform Layouts"
        personName="Akex Sackett"
      />
    </div>
    <div class="newsletter-form">
      <div class="text-block">
        <h3 class="text-promoFontSize text-white font-medium">Stay in the loop</h3>
        <my-text class="">Join our newsletter to get top news before anyone else.</my-text>
      </div>
      <form class="input-block">
        <input class="newsletter-input" placeholder="Your best email…" type="text" />
        <my-button class="bg-white text-button-color/90" @click.prevent>Subscribe</my-button>
      </form>
      <img class="newsletter-decor" src="../assets/newsletter-decor.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CommentariesItem from './CommentariesItem.vue';
</script>

<style lang="scss" scoped>
.commentaries-title-block {
  @apply text-center;
}

.commentaries {
  @apply flex justify-center;
}

.newsletter-form {
  @apply flex items-center justify-between bg-button-color p-10 mx-auto mt-24 relative z-10;
  width: 77.5%;

  .input-block {
    @apply flex items-center;

    .newsletter-input {
      @apply w-96 py-2.5 px-4 mr-2 bg-black/10 border rounded-sm border-white/40 placeholder:text-white/70;
    }
  }

  .newsletter-decor {
    @apply absolute top-0 right-0 -z-10;
  }
}
</style>
