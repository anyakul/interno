<template>
  <main>
    <IntroNewsComponent :image="require('@/assets/img/photo-7.png')" :headers="false"/>
    <div class="main-row">
      <BlogInfoComponent
        v-bind:blogs = "[
          {id: 1, category: 'Kitchen' },
          {id: 2, category: 'Bedroom' },
        ]"
      />
      <TagsComponent/>
    </div>
  </main>
</template>

<script>
import IntroNewsComponent from './components/IntroNewsComponent.vue';
import TagsComponent from './components/TagsComponent.vue';
import BlogInfoComponent from './components/BlogInfoComponent.vue';

export default {
  name: 'BlogDetailsPage',
  components: {
    IntroNewsComponent,
    BlogInfoComponent,
    TagsComponent
  },

}
</script>

<style lang='sass'>
  @import "./assets/styles/style.sass"
</style>
