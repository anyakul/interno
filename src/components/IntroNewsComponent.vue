<template>
  <section class="intro-news">
    <div class="intro-news-container">
      <img class="intro-news-image" :src="image">
      <div class="intro-news-texts" v-if="headers">
        <h2 class="intro-header">{{ headers }}</h2>
        <ul class="intro-news-breadcrumbs">
          <li class="intro-news-breadcrumbs-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="intro-news-breadcrumbs-item">
            /
          </li>
          <li class="intro-news-breadcrumbs-item">
            <router-link to="/blog">Blog</router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'HelloWorld',
  props: {
    image: String,
    headers: Boolean
  }
}
</script>
