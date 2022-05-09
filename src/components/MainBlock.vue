<template>
  <div class="first-block rig">
    <my-main-title>Landing template for startups</my-main-title>
    <my-text class="my-4 w-1/2">
      Our landing page template works on all devices, so you only have to set it up once, and get
      beautiful results forever.
    </my-text>
    <my-button class="bg-button-color mr-3 mb-16">Start free trial</my-button>
    <my-button class="bg-button-disabled-color text-opacity-70">Learn more</my-button>
    <div class="video-block">
      <img
        @click="playVideo"
        src="../assets/video-preview.png"
        alt="video-preview"
        class="video-preview"
        id="video-preview"
      />
      <img @click="playVideo" id="play-btn" class="play-btn" src="../assets/play-btn.png" alt="" />
      <iframe
        id="yt-video"
        class="hidden"
        width="1024"
        height="576"
        src="https://www.youtube.com/embed/3ZEFD5tTRDI"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  <img class="secondary-shape" src="../assets/decor-shape-2.svg" alt="" />
</template>

<script setup lang="ts">
const playVideo = () => {
  const video = document.querySelector('#yt-video');
  const videoPreview = document.querySelector('#video-preview');
  const videoPlayIco = document.querySelector('#play-btn');

  video?.setAttribute('src', 'https://www.youtube.com/embed/3ZEFD5tTRDI?;autoplay=1&;');
  video?.classList.remove('hidden');
  videoPreview?.classList.add('hidden');
  videoPlayIco?.classList.add('hidden');
};
</script>

<style lang="scss" scoped>
.first-block {
  @apply relative text-center justify-center z-10;
  .main-subtitle {
    @apply text-lg opacity-70 font-light my-7 mx-auto w-1/2;
  }
  .video-block {
    @apply relative flex justify-center flex-col my-0 mx-auto cursor-pointer;
    width: 1024px;
    height: 576px;
  }
  .play-btn {
    position: absolute;
    top: 47%;
    left: 47%;
    box-shadow: 0px 16px 32px rgba(21, 23, 25, 0.24);
  }
}
.secondary-shape {
  @apply absolute z-0;
  left: 5%;
  top: 15%;
}
</style>
