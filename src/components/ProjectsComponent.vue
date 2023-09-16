<template>
  <section class="projects section">
    <div class="projects-container container">
      <h2 class="projects-header headers">Follow Our Projects</h2>
      <p class="projects-text texts">It is a long established fact that a reader will be distracted by the of readable
        content
        of page lookings at its
        layouts points.</p>
      <ul class="projects-list">
        <li class="projects-item" v-for="item in projects" :key="item.id">
          <router-link class="projects-item-link" to="/project-detail/1"></router-link>
          <img :src="item.image" width="525" height="548">
          <div class="projects-item-texts">
            <h3 class="projects-item-header">{{ item.header }}</h3>
            <p class="projects-item-text">{{ item.category }}</p>
            <a class="projects-item-link">
              <svg-icon></svg-icon>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      projects () {
        return this.$store.state.projects
      }
    }
  }
</script>
