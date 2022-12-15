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
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  emits: ['addProduct'] , 
  setup () {
    const product = reactive({
      name : '', 
      image : '', 
      price : 0, 
      describle : '',
      soluong : 0  
    })

    return {
      product   
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
