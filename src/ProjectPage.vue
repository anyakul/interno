<template>
  <main>
    <IntroNewsComponent :image="require('@/assets/img/photo-7.png')" headers="Our project" />
    <FilterComponent
      v-bind:categories = "[
        {id: 1, category: 'Bathroom', active: 'false' },
        {id: 2, category: 'Bedroom', active: 'true' },
        {id: 3, category: 'Kitchen', active: 'false' },
        {id: 4, category: 'Living Area', active: 'false' }
      ]"
    />
    <ProjectsComponent />
    <PaginationComponent />
  </main>
</template>

<script>
import IntroNewsComponent from './components/IntroNewsComponent.vue';
import FilterComponent from './components/FilterComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import PaginationComponent from './components/PaginationComponent.vue';

export default {
  name: 'BlogPage',
  components: {
    IntroNewsComponent,
    FilterComponent,
    ProjectsComponent,
    PaginationComponent
  },
}
</script>

<style lang='sass'>
  @import "./assets/styles/style.sass"
</style>
