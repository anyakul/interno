<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footer-logo-text-socials">
        <a class="footer-logo" href="index.html">
          <img src="./../assets/img/logo.svg" width="177" height="50">
        </a>
        <p class="footer-text">It is a long established fact that a reader<br> will be distracted lookings.</p>
        <ul class="footer-socials">
          <li class="footer-socials-item">
            <a>
              <svg-icon></svg-icon>
            </a>
          </li>
          <li class="footer-socials-item">
            <a>
              <svg-icon></svg-icon>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-part">
        <p class="footer-menu-name">Pages</p>
        <ul class="footer-pages-list">
          <li class="footer-pages-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="footer-pages-item">
            <router-link to="/project">Project</router-link>
          </li>
          <li class="footer-pages-item">
            <a>
              <router-link to="/blog">Blog</router-link>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-part">
        <p class="footer-menu-name">Contact</p>
        <ul class="footer-pages-list">
          <li class="footer-pages-item">
            <a>
              55 East Birchwood Ave.<br> Brooklyn, New York 11201 contact@interno.com
            </a>
          </li>
          <li class="footer-pages-item">
            <a>
              contact@interno.com
            </a>
          </li>
          <li class="footer-pages-item">
            <a>
              (123) 456 - 7890
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
