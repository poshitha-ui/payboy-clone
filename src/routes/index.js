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
});

export default router;