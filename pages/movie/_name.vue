<template>
  <div class="main-cinema">
    <div class="row player">
      <video src=""></video>
    </div>
    <div class="row movies">
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
      <div class="movie"></div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  /* eslint-disable nuxt/no-timing-in-fetch-data */
  layout: 'movie',

  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function() {
        resolve({ name: 'world' })
      }, 1000)
    })
  }
}
</script>
