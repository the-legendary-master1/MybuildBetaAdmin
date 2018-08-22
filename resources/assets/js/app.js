
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
let Contentheader = require('./components/_includes/Contentheader.vue');

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
	{ path: '/', name: 'Content', component: Content, meta: { name: 'Home' } },
	{ path: '/media', name: 'Media', component: Media },
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
    	Contentheader,
    },
    router
});

/*ADDONS*/
require('./addons/jquery-ui.min.js');
require('./addons/main.js');
require('./addons/show.js');