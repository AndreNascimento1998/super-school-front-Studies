// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'menu',
        component: () => import('@/views/Menu/MenuPage.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home/HomePage.vue'),
            },
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;