// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ApplePage from './components/ApplePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/apple', component: ApplePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;