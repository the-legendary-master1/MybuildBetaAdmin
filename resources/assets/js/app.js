
require('./bootstrap');

window.Vue = require('vue');

import Buefy from 'buefy';
import VueRouter from 'vue-router';

Vue.use(Buefy, {
    defaultIconPack: 'fa',
})
Vue.use(VueRouter);

/*INCLUDES*/
let Sidebar = require('./components/_includes/Sidebar.vue');
let Maincontent = require('./components/_includes/Maincontent.vue');

/*PAGES*/
let Content = require('./components/_pages/Content.vue');
let Media = require('./components/_pages/Media.vue');

/*AUTHINTICATION*/
let Login = require('./components/_auth/Login.vue');
let Logout = require('./components/_auth/Logout.vue');

/*ROUTES*/
const routes = [
	/*AUTHINTICATION*/
	{ path: '/login', name: 'Login', component: Login },
	{ path: '/logout', name: 'Logout', component: Logout },

	/*PAGES ROUTES*/
    { path: '/', name: 'Home', component: Content, meta: { name: 'Home', parent_name: 'Content' } },
	{ path: '/house-designs', name: 'House-designs', component: Content, meta: { name: 'House-designs', parent_name: 'Content' } },
    { path: '/builders', name: 'Builders', component: Content, meta: { name: 'Builders', parent_name: 'Content' } },
    { path: '/how-it-works', name: 'How-it-works', component: Content, meta: { name: 'How-it-works', parent_name: 'Content' } },
    { path: '/your-stories', name: 'Your-stories', component: Content, meta: { name: 'Your-stories', parent_name: 'Content' } },
    { path: '/articles', name: 'Articles', component: Content, meta: { name: 'Articles', parent_name: 'Content' } },
    { path: '/contact', name: 'Contact', component: Content, meta: { name: 'Contact', parent_name: 'Content' } },
    { path: '/compare', name: 'Compare', component: Content, meta: { name: 'Compare', parent_name: 'Content' } },

	{ path: '/media', name: 'Media', component: Media, meta: { parent_name: 'Media' } },
];
const router = new VueRouter({
  	routes
})

/*GLOBAL CALL*/
window.Event = new Vue;
window.token = localStorage.getItem('token');
window.userType = localStorage.getItem('userType');
window.baseApiUrl = "http://mybuildbetaserver.test";

var app = new Vue({
    el: '#app',
    components: {
    	Sidebar,
        Maincontent,
    },
    router
});

/*ADDONS*/
require('./addons/jquery-ui.min.js');
require('./addons/main.js');
require('./addons/show.js');