import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello.vue';
import hello2 from './components/hello2.vue';

//Make Vue Router methods available here

Vue.use(VueRouter);

//Create router object where we write our application's routes

var router = new VueRouter({
    routes: [
        {
            path: "/one",
            component: Hello
        },
        {
            path: "/two",
            component: hello2
        }
    ]
});

//Export and make everything here available to other files, then import into main.js

export default router;