<template>
  <main>
    <IntroNewsComponent :image="require('@/assets/img/photo-7.png')" />
    <ProjectIntoComponent />
  </main>
  <SliderComponent />
</template>

<script>
import IntroNewsComponent from './components/IntroNewsComponent.vue';
import ProjectIntoComponent from './components/ProjectIntoComponent.vue';
import SliderComponent from './SliderComponent';

export default {
  name: 'BlogPage',
  components: {
    IntroNewsComponent,
    ProjectIntoComponent,
    SliderComponent,
  },
}
</script>

<style lang='sass'>
  @import "./assets/styles/style.sass"
</style>
