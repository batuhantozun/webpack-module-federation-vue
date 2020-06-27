import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/ChildHome.vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      redirect: () => ({ name: 'Home' }),
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'page1',
          name: "page1",
          component: Page1,
        },
        {
          path: 'page2',
          name: "page2",
          component: Page2,
        },
      ]
    },
  ],
});
