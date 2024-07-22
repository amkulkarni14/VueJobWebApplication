import { createRouter, createWebHistory } from "vue-router";

import homeView from '@/views/homeView.vue';
import jobsView from '@/views/jobsView.vue';
import notFoundPageView from '@/views/notFoundPageView.vue';
import jobView from '@/views/jobView.vue';
import addJobView from '@/views/addJobView.vue'
import editJobView from '@/views/editJobView.vue'


const router = createRouter({
history : createWebHistory(import.meta.env.BASE_URL),
routes : [
    {
        path: '/',
        name: 'home',
        component: homeView

    },
    {
        path: '/jobs',
        name: 'jobs',
        component: jobsView

    },
    {
        path: '/jobs/:id',
        name: 'jobView',
        component: jobView

    },
    {
        path: '/jobs/edit/:id',
        name: 'editJob',
        component: editJobView

    },
    {
        path: '/jobs/add',
        name: 'add-job',
        component: addJobView

    },
    {
        path: '/:catchAll(.*)',
        name: 'notFoundPage',
        component: notFoundPageView

    }
]

});

export default router;



