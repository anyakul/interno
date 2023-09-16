<template>
  <HeaderComponent/>
  <router-view />
  <FooterComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang='sass'>
  @import "./assets/styles/style.sass"
</style>
