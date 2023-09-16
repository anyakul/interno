<template>
  <section class="news section">
    <div class="news-container container">
      <h2 class="news-header headers">{{ header }}</h2>
      <p class="news-text texts">{{ text }}</p>
      <ul class="news-list">
        <li class="news-item" v-for="item in news" :key="item.id">
          <div class="news-item-image">
            <img :src="item.image" width="340" height="289" alt="photo">
            <a class="news-item-image-link">{{ item.category }}</a>
          </div>
          <div class="news-item-texts">
            <router-link class="news-item-header" to="blog-detail/1">{{ item.header }}</router-link>
            <p class="news-item-date">{{ item.date }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default{
    props: {
      header: String,
      text: String
    },
    computed: {
      news () {
        return this.$store.state.news
      }
    }
  }
</script>
