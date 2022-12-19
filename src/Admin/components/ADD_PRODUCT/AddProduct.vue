<template>
  <div class="q-pa-md" style="max-width: 400px">
      <q-input
        filled
        v-model="product.name"
        label="Tên Sản Phẩm"
        hint="Tên Sản Phẩm"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="product.image"
        label="Hình Ảnh"
        hint="Hình Ảnh"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        v-model="product.price"
        label="Giá Tiền"
        hint="Giá Tiền"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="product.describle"
        label="Mô Tả"
        hint=" Mô Tả"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        v-model="product.soluong"
        label="Số Lượng"
        hint="Số Lượng"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />
      <div>
        <q-btn @click="$emit('addProduct' , product)" label="Thêm Sản Phẩm" type="submit" color="primary"/>
        
        <q-btn class="q-ml-md" @click="$emit('UpdateProduct' , product)" label="Cập Nhập" type="submit" color="primary"/>

      </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useData } from '../../stores/data.js'

export default {
  emits: ['addProduct' ,'UpdateProduct'] , 
  setup()
  {
    const store = useData(); 
    const product =  store.product;
    return {
      product   
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
