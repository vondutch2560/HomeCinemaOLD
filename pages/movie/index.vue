<template>
  <div class="main-cinema">
    <div ref="videoPlayer" class="row player">
      <video controls="controls" autoplay="autoplay">
        <source ref="sourceVideo" type="video/mp4" />
        <track
          ref="trackVideo"
          label="Vietnam"
          kind="subtitles"
          srclang="vi"
          default="default"
        />
      </video>
    </div>
    <div class="row movies">
      <a
        v-for="movie in movies"
        :key="movie"
        :href="`#${movie}`"
        class="movie"
        :style="coverMovie(movie)"
        @click="selectMovie(movie)"
      ></a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Logo from '~/components/Logo.vue'

export default {
  /* eslint-disable nuxt/no-timing-in-fetch-data */
  layout: 'movie',

  async asyncData() {
    // return new Promise((resolve) => {
    //   setTimeout(function() {
    //     resolve({ name: 'world' })
    //   }, 1000)
    // })
    const { data } = await axios.get(`${process.env.baseUrl}/api/getAllMovie`)
    return { movies: data }
  },

  mounted() {
    if (location.hash === '') return false
    const movieName = location.hash.substr(1)
    const linkMovie = `${process.env.baseUrl}/${movieName}/${movieName}`
    this.showPlayer(linkMovie)
  },

  methods: {
    coverMovie(name) {
      const trimName = name.trim().replace(/\s/g, '%20')
      return {
        backgroundImage: `url(${process.env.baseUrl}/${trimName}/${trimName}.jpg)`
      }
    },

    selectMovie(name) {
      const linkMovie = name.trim().replace(/\s/g, '%20')
      this.showPlayer(`${process.env.baseUrl}/${linkMovie}/${linkMovie}`)
    },

    showPlayer(linkMovie) {
      this.$refs.videoPlayer.style.maxHeight = '0'
      this.$scrollToSmooth('.row.player', null, -30)

      this.$refs.sourceVideo.setAttribute('src', `${linkMovie}.mp4`)
      this.$refs.trackVideo.setAttribute('src', `${linkMovie}.vtt`)
      setTimeout(() => {
        this.$refs.videoPlayer.style.maxHeight = '700px'
        this.$scrollToSmooth('.row.player', null, -30)
      }, 700)
    }
  }
}
</script>
