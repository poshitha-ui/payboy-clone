import { createRouter, createWebHistory  } from "vue-router";
// import HomePage from "@/pages/HomePage.vue";
// import LeaveManagementPage from "@/pages/LeaveManagementPage.vue";

const routes = [
    {
        path : '/',
        name : 'Home',
        component : () => import('./../pages/HomePage.vue'), // For lazyloading
    },
    {
        path : '/leavemanagement',
        name : 'Leave Management',
        component : () => import('./../pages/LeaveManagementPage.vue'), // For lazyloading
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
//   scrollBehavior(to, from, savedPosition) {
//     // always scroll to top
//     return { top: 0 };
//   },
scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition; // restore scroll when using browser back/forward
  } else {
    return { top: 0 };
  }
}
});

export default router;