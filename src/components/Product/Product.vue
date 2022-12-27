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
    <input type="text" v-model="textSearch" />
    <div class="row">
      <div
        v-for="dataProduct of handleSort(
          textSearch,
          storeProduct.dataProduct,
          step.min,
          step.max
        )"
        :key="dataProduct.id"
        class="col-12 col-md-3 item_product"
      >
        <img class="item_img" :src="dataProduct.image" />
        <p style="margin-bottom: 0" class="text-red">
          Tên Sản Phẩm :{{ dataProduct.name }}
        </p>
        <p style="margin-bottom: 0" class="text-red">
          Gía Tiền :{{ formatNumber(dataProduct.price) }}
        </p>
        <q-btn
          style="background: #ff0080; color: white"
          label="Thêm Giỏ Hàng"
          @click="addProduct(dataProduct)"
        />
        <p class="status">
          {{ dataProduct.status ? 'Còn Hàng' : 'Hết Hàng' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useProduct } from 'src/stores/product';
import { addProduct, handleSort } from '../../Utils/productUtils';
import { formatNumber } from '../../Utils/logicPage';

export default {
  name: 'DemoProduct',
  props: ['DATA_PRODUCT'],
  setup() {
    const step = ref({
      min: 0,
      max: 100,
    });
    const textSearch = ref('');
    const storeProduct = useProduct();

    onMounted(() => {
      storeProduct.getDataProduct();
    });

    return {
      formatNumber,
      step,
      handleSort,
      storeProduct,
      addProduct,
      textSearch,
    };
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
