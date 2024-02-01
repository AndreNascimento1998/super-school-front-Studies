// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;