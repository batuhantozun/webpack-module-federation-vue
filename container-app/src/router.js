import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: () => ({ name: 'AppHome' }),
    },
    {
      path: '/home',
      name: 'AppHome',
      component: Home,
    },
    {
      path: '/child',
      name: 'ChildApp',
      component: () => import('childApp/ChildAppHome'),
      children: [{
        path: 'page1',
        name: "page1",
        component: () => import('childApp/ChildAppPage1'),
      }, {
        path: 'page2',
        name: "page2",
        component: () => import('childApp/ChildAppPage2'),
      }],
    },
  ],
});
