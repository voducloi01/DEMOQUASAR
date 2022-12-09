<template>
  <div class="q-pa-md">
    <div class="row">
      <div v-for="DATA_PRODUCT of DATA_PRODUCT" :key="DATA_PRODUCT.id" class="col-12 col-md-3 item_product"> 
      <div class="wrapper_img">
          <img class="item_img" :src="DATA_PRODUCT.image"/>
      </div> 
      <div class="wrapper_content">
           <p style="margin-bottom : 0" class="text-red">Tên Sản Phẩm :{{DATA_PRODUCT.name}} </p>
           <p style="margin-bottom : 0" class="text-red">Gía Tiền :{{DATA_PRODUCT.price}} </p>
           <q-btn style="background: #FF0080; color: white" label="Thêm Giỏ Hàng" />    
      </div>
      <!-- <div style="margin-top : 15px">
        <q-badge color="red" rounded class="q-mr-sm" />
        {{DATA_PRODUCT.status  ? 'Còn Hàng' : 'Hết Hàng'}}
      </div> -->
    </div>
  </div>

  </div>
</template>

<script>
export default {
    name: "DemoProduct",
    props: ['DATA_PRODUCT'] ,
  setup()
  {

    const formatNumber = (number) => {
    return new Intl.NumberFormat('vi-VN').format(number) + ' vnd';
  };
      return {formatNumber}
    }
}
</script>

<style lang="sass" scoped>
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.row + .row
  margin-top: 1rem


.item_product 
      overflow: hidden
      margin: 5px 10px
      width: calc(100%/4 - 20px)

.wrapper_img
   height: 70%
 
.item_img
            height: 100%
            width: 100%
.wrapper_content
    text-align : center   
    p 
     font-size : 1.1rem  
            
</style>


