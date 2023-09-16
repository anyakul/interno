<template>
  <section class="project-info section">
    <div class="project-info-container container">
      <div class="project-info-texts">
        <h2 class="project-info-header headers">{{ project.header }}</h2>
        <p class="project-info-text text">'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ' },
        {id: 2, text: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.'</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    header: String,
    computed: {
      project () {
        return this.$store.getters.projectById(2)
      }
    }
}
</script>
