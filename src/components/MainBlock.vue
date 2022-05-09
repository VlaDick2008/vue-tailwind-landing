<template>
  <div class="first-block rig">
    <Transition name="title">
      <my-main-title v-if="state.show">Landing template for startups</my-main-title>
    </Transition>
    <Transition name="subtitle">
      <my-text v-if="state.show" class="my-4 w-1/2">
        Our landing page template works on all devices, so you only have to set it up once, and get
        beautiful results forever.
      </my-text>
    </Transition>

    <TransitionGroup name="buttons">
      <my-button v-if="state.show" class="bg-button-color mr-3 mb-16">Start free trial</my-button>
      <my-button v-if="state.show" class="bg-button-disabled-color text-opacity-70"
        >Learn more</my-button
      >
    </TransitionGroup>
    <TransitionGroup name="video">
      <div v-if="state.show" @click="playVideo" class="video-block">
        <div v-if="!state.isPlayerVisible">
          <img
            @click="playVideo"
            src="../assets/video-preview.png"
            alt="video-preview"
            class="video-preview"
            id="video-preview"
          />
          <img
            @click="playVideo"
            id="play-btn"
            class="play-btn"
            src="../assets/play-btn.png"
            alt=""
          />
        </div>
        <iframe
          v-else
          id="yt-video"
          width="1024"
          height="576"
          src="https://www.youtube.com/embed/3ZEFD5tTRDI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </TransitionGroup>
  </div>
  <img class="secondary-shape" src="../assets/decor-shape-2.svg" alt="" />
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';

const state = reactive({
  isPlayerVisible: false,
  show: false,
});

const playVideo = () => {
  const video = document.querySelector('#yt-video');

  video?.setAttribute('src', 'https://www.youtube.com/embed/3ZEFD5tTRDI?;autoplay=1&;');
  state.isPlayerVisible = true;
};

onMounted(() => {
  state.show = true;
});
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

//Transitions
.title-enter-active,
.subtitle-enter-active,
.buttons-enter-active,
.video-enter-active {
  transition: all 2s ease;
  transform: translateY(0px);
  transition-delay: 0.5s;
}

.title-enter-from,
.subtitle-enter-from,
.buttons-enter-from,
.video-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.title-enter-active {
  transition-delay: 0.5s;
}
.subtitle-enter-active {
  transition-delay: 1s;
}
.buttons-enter-active {
  transition-delay: 2s;
}
.video-enter-active {
  transition-delay: 2.5s;
}
</style>
