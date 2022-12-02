<template >
      <q-header reveal elevated>
        <q-toolbar>      
       <q-tabs
        v-model="tab"
        class="text-teal"
      >
        <q-route-tab to="/"  name="home" icon="home" label="Trang chủ" class="text-white" />
        <q-route-tab to="/menu" name="menu" icon="menu" label="Menu" class="text-white"/>
        <q-route-tab to="/sanpham" name="sanpham" icon="visibility" label="Sản Phẩm" class="text-white"/>
        <q-route-tab to="/gioithieu" name="gioithieu" icon="info" label="Giới Thiệu" class="text-white"/>
        <q-route-tab to="/lienhe" name="lienhe" icon="call" label="Liên Hệ" class="text-white"/>
      </q-tabs>
      <q-space />
       <q-icon name="shopping_cart" size="35px"/>
         <q-avatar >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap7CQd2HfIzDR7yh9eecI_A62siDNpKugJw&usqp=CAU">
          </q-avatar>
       <h5 class="q-px-md"> TIỆM BÁNH SÀI GÒN  ! </h5>
        </q-toolbar>     
      </q-header>
</template>

<script>


export default {
  name: 'QuasarHeader',
  props: ['toggleLeftDrawer'], 
  setup()
  { 

    
  }
};
</script>

<style lang="scss" scoped>

</style>