<template>
  <section class="filter section">
    <div class="filter-container container">
      <h2 class="visually-hidden">Tags</h2>
      <ul class="filter-list">
        <li class="filter-item" v-for="item in categories" :key="item.id">
          <button :class="(item.active=='true') ? 'filter-button filter-button-active' : 'filter-button'">{{ item.category }}</button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    categories: Array
  }
}
</script>
