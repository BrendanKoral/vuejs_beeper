import Vue from 'vue';
import VueRouter from 'vue-router';

import auth from './components/auth/auth.vue';
import login from './components/auth/login.vue';
import register from './components/auth/register.vue';

//Make Vue Router methods available here

Vue.use(VueRouter);

//Create router object where we write our application's routes

var router = new VueRouter({
    routes: [
        {
            path: "/auth",
            component: auth,
            redirect: '/auth/login',
            children: [
                {
                    path: "login",
                    component: login
                },
                {
                    path: "register",
                    component: register
                }
            ]
        }
    ]
});

//Export and make everything here available to other files, then import into main.js

export default router;