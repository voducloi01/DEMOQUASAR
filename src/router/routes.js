const routes = [
  {
    path: '/',
    component: () => import('../layouts/Home.vue'),
  },
  {
    path: '/gioithieu',
    component: () => import('../layouts/Introduce.vue'),
  },
  {
    path: '/menu',
    component: () => import('../layouts/Menu.vue'),
  },
  {
    path: '/sanpham',
    component: () => import('../layouts/SanPham.vue'),
  },
  {
    path: '/contact',
    component: () => import('../layouts/Contact.vue'),
  },
  {
    path: '/admin',
    component: () => import('../Admin/layouts/Home.vue'),
  },
  {
    path: '/cart',
    component: () => import('../layouts/Cart.vue'),
  },
  {
    path: '/register',
    component: () => import('../layouts/Register.vue'),
  },
  {
    path: '/login',
    component: () => import('../layouts/Login.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
