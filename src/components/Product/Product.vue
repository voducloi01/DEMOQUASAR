<template>
  <div class="q-px-md">
          <p style="font-size: 25px ; margin: 0;">Tìm Kiếm Giá Tiền</p>

    <div class="wrapper_search">
  
          <q-range
            v-model="step"
            :min="0"
            :max="100"
            :step="1"
            label
            color="deep-orange"
          >
          </q-range>
 <div style="display: flex ;">
     <input style="border-radius: 10px;" type="text" v-model="textSearch" placeholder="Tìm Kiếm "/>
     <img style="width: 30px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLkh8AJMOaFDdDvSlXohY8grRlIQDDMrITA&usqp=CAU"/>
 </div>
  </div>
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
          @click="storeCart.addCart(dataProduct)"
        />
        <!-- <p class="status">
          {{ dataProduct.status ? 'Còn Hàng' : 'Hết Hàng' }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useProduct } from 'src/stores/product';
import {  handleSort } from '../../Utils/productUtils';
import { formatNumber } from '../../Utils/logicPage';
import { useCart } from '../../stores/cart'

export default {
  name: 'DemoProduct',
  props: ['DATA_PRODUCT'],
  setup() {
    const step = ref({
      min: 0,
      max: 100000,
    });
    const storeCart = useCart();
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
      textSearch,
      storeCart
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
.wrapper_search
    display : flex
    align-items: center  
    justify-content: space-between  
    margin-bottom: 15px 
    
</style>
