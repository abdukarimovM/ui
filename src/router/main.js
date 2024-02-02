import { createRouter, createWebHistory } from 'vue-router';
import '../../public/assets/css/index.css'

const routes = [
    {   
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
    },
    {
        path: '/basket',
        name: 'Basket',
        component: () => import('../views/Basket.vue'),   
    },
    {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('../views/Favorites.vue'),   
    },
    {
        path: '/one_category',
        name: 'OneCategory',
        component: () => import('../views/OneCategory.vue'),   
    },
    {
        path: '/one_brand',
        name: 'OneBrand',
        component: () => import('../views/OneBrand.vue'),   
    },
    {
        path: '/one_item',
        name: 'OneItem',
        component: () => import('../views/OneItem.vue'),   
    }
];

const router = createRouter({ 
    history: createWebHistory(),
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
 });

export default router;