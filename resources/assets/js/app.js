
require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

Vue.use(VueRouter);

/*INCLUDES*/
let Sidebar = require('./components/_includes/Sidebar.vue');
let Contentheader = require('./components/_includes/Contentheader.vue');

/*PAGES*/
let Content = require('./components/_pages/Content.vue');

/*ROUTES*/
const routes = [
	/*PAGES ROUTES*/
	{ path: '/', name: 'Content', component: Content },
];
const router = new VueRouter({
  	routes
})

/*GLOBAL CALL*/
window.Event = new Vue;
window.token = localStorage.getItem('token');
window.userType = localStorage.getItem('userType');
window.baseApiUrl = "http://lumen.test";

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