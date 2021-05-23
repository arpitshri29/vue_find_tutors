import {createRouter, createWebHistory} from "vue-router";

import ContactTutor from './pages/requests/ContactTutor';
import RequestReceived from './pages/requests/RequestReceived';
import TutorDetail from './pages/tutors/TutorDetail';
import TutorRegistration from './pages/tutors/TutorRegistration';
import TutorsList from './pages/tutors/TutorsList';
import NotFound from './pages/NotFound';

// Create router by calling router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/tutors'},
        { path: '/tutors', component: TutorsList},
        { path: '/tutors/:id', component: TutorDetail, children: [
            { path: '/contact', component: ContactTutor},    // /tutors/t1/contact
            ]
        },
        { path: '/register', component: TutorRegistration},
        { path: '/requests', component: RequestReceived},
        { path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;