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
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
