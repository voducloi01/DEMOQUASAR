<template>
  <q-header class="bg-pink-2" elevated>
    <q-toolbar>
      <q-tabs v-model="tab" class="text-teal">
        <q-route-tab
          to="/"
          name="home"
          icon="home"
          label="Trang chủ"
          class="text-white"
        />
        <q-route-tab
          to="/menu"
          name="menu"
          icon="menu"
          label="Menu"
          class="text-white"
        />
        <q-route-tab
          to="/sanpham"
          name="sanpham"
          icon="visibility"
          label="Sản Phẩm"
          class="text-white"
        />
        <q-route-tab
          to="/gioithieu"
          name="gioithieu"
          icon="info"
          label="Giới Thiệu"
          class="text-white"
        />
        <q-route-tab
          to="/contact"
          name="lienhe"
          icon="call"
          label="Liên Hệ"
          class="text-white"
        />
        <q-route-tab to="cart">
          <q-btn
            dense
            color="purple"
            round
            icon="shopping_cart"
            class="q-mr-md"
          >
            <q-badge color="red" floating>{{ store.dataCart.length }}</q-badge>
          </q-btn>
        </q-route-tab>
           <q-route-tab
          to="/detailBill"
          name="bill"
          icon="receipt_long"
          label="Đơn Hàng"
          class="text-white"
        />
        <div style="display: flex" v-if="!hasIt">
          <q-route-tab to="Register">
            <q-btn class="bg-red q-mr-xs text-amber-1"> Đăng Ký </q-btn>
          </q-route-tab>
          <q-route-tab to="login">
            <q-btn class="bg-red q-mr-xs text-amber-1"> Đăng Nhập</q-btn>
          </q-route-tab>
        </div>
        <q-route-tab v-else to="/">
          <q-icon name="logout" size="40px" @click="hadleLogout" />
        </q-route-tab>
      </q-tabs>
      <q-space />
      <q-icon name="person" size="40px" />
      <span class="userName">{{ usernameCookie }}</span>
      <q-avatar>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap7CQd2HfIzDR7yh9eecI_A62siDNpKugJw&usqp=CAU"
        />
      </q-avatar>

      <h5 class="q-px-md">TIỆM BÁNH SÀI GÒN !</h5>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useCart } from 'src/stores/cart';

export default {
  name: 'QuasarHeader',
  props: ['toggleLeftDrawer', 'item'],
  setup() {
    const tab = ref('home');
    const $q = useQuasar();
    const store = useCart();
    const hasIt = $q.cookies.has('username');
    const hadleLogout = () => {
      $q.cookies.remove('username');
    };
    const usernameCookie = $q.cookies.get('username');

    return { tab, hadleLogout, hasIt, store, usernameCookie };
  },
};
</script>

<style lang="scss" scoped>
.userName {
  font-size: 1.5rem;
  color: red;
  margin: 0 10px;
}
</style>
