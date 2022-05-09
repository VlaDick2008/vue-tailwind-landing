<template>
  <footer class="footer-wrapper">
    <div class="footer-top mb-7">
      <div class="logo-block">
        <img class="rounded-full mb-7" src="../assets/logo.svg" alt="" />
        <my-text class="text-sm mx-0"
          >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
          industries for previewing layouts and visual mockups.</my-text
        >
      </div>
      <div class="links-wrapper">
        <div class="links-block leading-7">
          <ul>
            <li class="text-white mb-3">Products</li>
            <li><a href="https://www.youtube.com/">Web Studio</a></li>
            <li><a href="https://www.youtube.com/">DynamicBox Flex</a></li>
            <li><a href="https://www.youtube.com/">Programming Forms</a></li>
          </ul>
        </div>
        <div class="links-block leading-7">
          <ul>
            <li class="text-white mb-3">Resources</li>
            <li><a href="https://www.youtube.com/">Nostrud exercitation</a></li>
            <li><a href="https://www.youtube.com/">Visual mockups</a></li>
            <li><a href="https://www.youtube.com/">Nostrud exercitation</a></li>
            <li><a href="https://www.youtube.com/">Visual mockups</a></li>
            <li><a href="https://www.youtube.com/">Nostrud exercitation</a></li>
          </ul>
        </div>
        <div class="links-block leading-7">
          <ul>
            <li class="text-white mb-3">Company</li>
            <li><a href="https://www.youtube.com/">Consectetur adipiscing</a></li>
            <li><a href="https://www.youtube.com/">Labore et dolore</a></li>
            <li><a href="https://www.youtube.com/">Consectetur adipiscing</a></li>
            <li><a href="https://www.youtube.com/">Labore et dolore</a></li>
            <li><a href="https://www.youtube.com/">Consectetur adipiscing</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <my-text class="text-sm mx-0 mt-5">© 2020 Open PRO. All rights reserved.</my-text>
      <div class="icon-links">
        <a class="mx-1" href=""><img src="../assets/facebook.svg" alt="" /></a>
        <a class="mx-1" href=""><img src="../assets/twitter.svg" alt="" /></a>
        <a class="mx-1" href="https://github.com/VlaDick2008"
          ><img src="../assets/github.svg" alt=""
        /></a>
        <a class="mx-1" href=""><img src="../assets/insta.svg" alt="" /></a>
        <a class="mx-1" href=""><img src="../assets/linkedin.svg" alt="" /></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer-wrapper {
  @apply mt-32;
}

.footer-top {
  @apply flex justify-between;

  .links-wrapper {
    @apply flex justify-between text-white/70;

    .links-block {
      @apply mx-16;
    }
  }
}

.logo-block {
  @apply w-1/4;
}

.footer-bottom {
  @apply flex justify-between items-center pb-10;

  .icon-links {
    @apply flex;
  }
}
</style>
