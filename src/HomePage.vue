<template>
  <main>
    <IntroComponent/>
    <ProjectsComponent />
    <CounterComponent/>
    <NewsComponent
      header="Articles & News"
      text="It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using."
    />
  </main>
</template>

<script>
import IntroComponent from './components/IntroComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import CounterComponent from './components/CounterComponent.vue';
import NewsComponent from './components/NewsComponent.vue';

export default {
  name: 'HomePage',
  components: {
    IntroComponent,
    ProjectsComponent,
    CounterComponent,
    NewsComponent
  }
}
</script>

<style lang='sass'>
  @import "./assets/styles/style.sass"
</style>
