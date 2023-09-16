<template>
  <section class="blog-info">
    <div class="blog-info-container container">
      <div class="blog-info-list">
        <div class="blog-info-item">
          <h2 class="blog-info-header">{{blog.header}}</h2>
          <img class="blog-info-image" src="./../assets/img/photo-8.png">
          <div class="blog-info-date">
            <p>26 December,2022</p>
            <p>Interior / Home / Decore</p>
          </div>
          <p class="blog-info-text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.</p>
          <p class="blog-info-text">Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
          <div class="blog-info-quote">
            <p class="blog-info-mark">“</p>
            <p class="blog-info-quote-text">The details are not the details.<br> They make the design.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'BlogPage',
  props: ['id'],
  computed: {
    blog () {
      return this.$store.getters.newsById(3)
    }
  }
}
</script>
