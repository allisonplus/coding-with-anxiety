import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Login from '@/components/Login';
import Content from '@/components/Content';
import Dashboard from '@/components/Dashboard';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      // Redirect paths that don't exist to: content.
      path: '*',
      redirect: '/Content',
    },
    {
      // Set default launding to: content.
      path: '/',
      name: 'Content',
      component: Content,
    },
    {
      // Login page to access dashboard.
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      // Dashboard.
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// to parameter is the target Route Object being navigated to.
// from parameter is the current route being navigated away from.
// next parameter is a function that must be called to resolve hook - can take argument to redirect/abort the nav.
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('dashboard');
  else next();
});

export default router;
