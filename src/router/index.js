import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./../HomePage.vue')
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: () => import('./../BlogPage.vue')
    },
    {
      path: '/blog-detail/:id',
      name: 'blog-detail',
      component: () => import('./../BlogDetailsPage.vue'),
      props: true
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('./../ProjectPage.vue')
    },
    {
      path: '/project-detail/:id',
      name: 'project-detail',
      component: () => import('./../ProjectDetailsPage.vue')
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('./../PageError404.vue')
    },
    {
      path: "/:catchAll(.*)",
      component: () => import('./../PageError404.vue')
    }
  ]
})
