<template>
  <div class="__layout_movie">
    <header>
      <div class="row">
        <nuxt-link to="/movie" class="logo"
          ><img src="~/assets/movie/logo.webp" alt="Logo Home Theater"
        /></nuxt-link>
      </div>
    </header>
    <nuxt />
    <footer>
      Copyright 2020 - Home Cinema
    </footer>
  </div>
</template>

<style lang="scss">
@mixin res1920 {
  @media (max-width: 1919.95px) {
    @content;
  }
}

@mixin res1200 {
  @media (max-width: 1199.95px) {
    @content;
  }
}

@mixin res992 {
  @media (max-width: 991.95px) {
    @content;
  }
}

@mixin res768 {
  @media (max-width: 767.95px) {
    @content;
  }
}

@mixin bgColor-HeaderFooter {
  color: #dfdfdf;
  background-color: #323031;
}

@mixin bgImg($url) {
  background-image: url($url);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #3e3e3e;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.row {
  width: 1600px;
  margin: 0 auto;

  @include res1920 {
    width: 1170px;
  }

  @include res1200 {
    width: 970px;
  }

  @include res992 {
    width: 720px;
  }

  @include res768 {
    max-width: 720px;
    width: 100%;
  }
}

header {
  @include bgColor-HeaderFooter;
  border-bottom: 1px solid #666;
  .row {
    padding: 5px 0;
    .logo {
      display: inline-block;
    }
  }
}

footer {
  @include bgColor-HeaderFooter;
  font-size: 13px;
  text-align: center;
  padding: 4px 0;
  border-top: 1px solid #666;
  user-select: none;
}

.main-cinema {
  padding: 30px 0;

  .row.player {
    text-align: center;
    max-height: 0;
    overflow: hidden;

    video {
      margin: auto;
      max-width: 1280px;
      width: calc(100% - 100px);
      border: 2px solid #777;
    }
  }

  .row.movies {
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 50px;

    @include res1920 {
      grid-template-columns: repeat(5, auto);
      grid-gap: 42px;
    }

    @include res1200 {
      grid-template-columns: repeat(4, auto);
      grid-gap: 35px;
    }

    @include res992 {
      grid-gap: 25px;
    }

    @include res768 {
      grid-template-columns: repeat(2, auto);
      grid-gap: 20px;
    }
    .movie {
      height: 0;
      padding-bottom: 160%;
      border: 1px solid #999;
      @include bgImg('http://image.phimmoi.net/film/6113/poster.medium.jpg');
    }
  }
}
</style>
