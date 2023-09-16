<template>
  <main>
    <IntroNewsComponent :image="require('@/assets/img/photo-7.png')" headers="Articles & News"/>
    <PostsComponent/>
    <NewsComponent header="Articles & News"/>
    <PaginationComponent/>
  </main>
</template>

<script>
import IntroNewsComponent from './components/IntroNewsComponent.vue';
import PaginationComponent from './components/PaginationComponent.vue';
import PostsComponent from './components/PostsComponent.vue';
import NewsComponent from './components/NewsComponent.vue';

export default {
  name: 'BlogPage',
  components: {
    IntroNewsComponent,
    PostsComponent,
    NewsComponent,
    PaginationComponent
  },

}
</script>

<style lang='sass'>
  @import "./assets/styles/style.sass"
</style>
