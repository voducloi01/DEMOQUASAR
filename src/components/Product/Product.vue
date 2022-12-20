<template>
  <div class="q-pa-md">
    <div class="row">
      <div
        v-for="DATA_PRODUCT of data"
        :key="DATA_PRODUCT.id"
        class="col-12 col-md-3 item_product"
      >
        <img class="item_img" :src="DATA_PRODUCT.image" />
        <p style="margin-bottom: 0" class="text-red">
          Tên Sản Phẩm :{{ DATA_PRODUCT.name }}
        </p>
        <p style="margin-bottom: 0" class="text-red">
          Gía Tiền :{{ formatNumber(DATA_PRODUCT.price) }}
        </p>
        <q-btn
          style="background: #ff0080; color: white"
          label="Thêm Giỏ Hàng"
          @click="buyProduct(DATA_PRODUCT)"
        />
        <p class="status">
          {{ DATA_PRODUCT.status ? 'Còn Hàng' : 'Hết Hàng' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {  ref } from 'vue';
import { api } from '../../boot/axios';
import { useQuasar } from 'quasar';
import { Notify } from 'quasar'
import { useCart } from 'src/stores/cart';
export default {
  name: 'DemoProduct',
  props: ['DATA_PRODUCT'],
  setup() {
    const $q = useQuasar();
    const data = ref();
    const cart = ref();
    const store = useCart();
   const Notifi = (message) =>
    {
          Notify.create({
            type: 'positive',
            color: 'positive',
            timeout: 2000,
            position: 'center',
            message: message
          })
    }
  
     function loadData() {
      $q.loading.show();
       api
        .get('https://636caa44ab4814f2b26a713e.mockapi.io/product')
         .then((response) =>
         {
            data.value = response.data
          })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        })
        .finally(() => $q.loading.hide());
    }
    loadData();
    const buyProduct = (product) =>
    {   
        $q.loading.show();
       api
         .post('https://636caa44ab4814f2b26a713e.mockapi.io/cart', {...product, soluong : 1})
         .then((response) =>
         {
           const message = "Thêm giỏ hàng thành công !";
           Notifi(message);
           cart.value = response.data
           store.loadData();
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        })
        .finally(() => $q.loading.hide());
    }

    const formatNumber = (number) => {
      return new Intl.NumberFormat('vi-VN').format(number) + ' vnd';
    };

    return { formatNumber, data ,buyProduct};
  },
};
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem


.item_product
      display: flex
      flex-direction: column
      align-items: center
      overflow: hidden
      margin: 10px 10px
      width: calc(100%/4 - 20px)
      height : 100%
      position: relative

.status
    position: absolute
    top: 0
    left: 0
    width: auto
    height: auto
    background: red
.wrapper_img
   height: 50vh

.item_img
            height: 20vh
            width: 100%
.wrapper_content
    text-align : center
    p
     font-size : 1.1rem
</style>
