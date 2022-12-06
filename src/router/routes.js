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
    path: '/cake',
    component: () => import('../pages/Cake.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
