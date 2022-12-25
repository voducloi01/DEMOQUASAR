<template>
  <div class="q-pa-md">
    <p style="font-size: 25px">Tìm Kiếm Giá Tiền</p>
    <q-range
      v-model="step"
      :min="0"
      :max="100"
      :step="1"
      label
      color="deep-orange"
    >
    </q-range>
    <div class="row">
      <div
        v-for="DATA_PRODUCT of handleSort(store.data)"
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
import { ref } from 'vue';
import { useProduct } from 'src/stores/product';
import { useCart } from 'src/stores/cart';

export default {
  name: 'DemoProduct',
  props: ['DATA_PRODUCT'],
  setup() {
    const step = ref({
      min: 0,
      max: 100,
    });
    const store = useProduct();
    const storeCart = useCart();

    const buyProduct = (data) => {
      console.log(data);
      // const itemName = data.map((e) => e.name);
      // console.log(itemName);
    };
    const handleSort = (value) => {
      return value.filter(
        (e) => e.price >= step.value.min && e.price <= step.value.max
      );
    };
    const formatNumber = (number) => {
      return new Intl.NumberFormat('vi-VN').format(number) + ' vnd';
    };
    return { formatNumber, step, handleSort, store, buyProduct };
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
.q-range
    width : 25%
</style>
