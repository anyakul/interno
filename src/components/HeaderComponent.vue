<template>
  <header class="header">
    <div class="header-container container">
      <router-link to="/">
        <img src="./../assets/img/logo.svg" width="177" height="50">
      </router-link>
      <ul class="header-menu">
        <li class="header-menu-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="header-menu-item">
          <router-link to="/project">Project</router-link>
        </li>
        <li class="header-menu-item">
          <router-link to="/blog">Blog</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
