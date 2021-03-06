import Vue from 'vue'
import Router from 'vue-router'
//import VueResource from 'vue-resource';
import Splash from '../components/Splash.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router);
//Vue.use(VueResource);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
