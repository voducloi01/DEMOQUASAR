<template>
  <div class="q-pa-md doc-container">   
    <div class="row items-center">
      <div v-for="product of DATA_PRODUCT"  :key="product.id" class="col-6 col-md-3">
        <div class="wrrapper_detail">
                <div class="status">{{product ? "CÒN HÀNG" : "HẾT HÀNG"}}</div>
                <img :src="product.image"/>
                <p>{{product.name}} </p>
                <p>Price :{{formatNumber(product.price)}} </p>
                 <q-btn color="primary" label="MUA" size="12px" />
        </div>
    
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
.row
.row > div
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)
.doc-container > div + div
  margin-top: 1rem

.wrrapper_detail
    display: flex
    flex-direction: column
    align-items: center
    position: relative
    img 
        height: 50%
        width: 63%
    p
        margin: 5px   
    .status
        position: absolute
        height : auto 
        width: auto
        background-color : red
        bottom : 0 
        right: 0
</style>


