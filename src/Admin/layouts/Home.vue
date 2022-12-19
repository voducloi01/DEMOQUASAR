<template>

  <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <HeaderVue/>
      <q-page-container>
        <q-page >
          <div class="row">
            <div class="col-12 col-md-5">
                 <div>
                    <q-splitter
                      v-model="splitterModel"
                      style="height: auto"
                    >

                      <template v-slot:before>
                        <q-tabs
                          v-model="tab"
                          vertical
                          class="text-teal"
                        >
                          <q-tab name="add" icon="add" label="Thêm Sản Phẩm" />

                    </q-tabs>
                  </template>

                  <template v-slot:after>
                    <q-tab-panels
                      v-model="tab"
                      animated
                      swipeable
                      vertical
                      transition-prev="jump-up"
                      transition-next="jump-up"
                    >
                      <q-tab-panel name="add">
                          <div class="wrapp"> <AddProduct @addProduct="addProduct" @UpdateProduct="UpdateProduct" /></div>
                      </q-tab-panel>
                    </q-tab-panels>
                  </template>

                </q-splitter>
           </div>

            </div>
         <div class="col-12 col-md-7"><TableProductVue :data='data' @updateId="updateId" @Delete="Delete"/></div>
          </div>
       
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HeaderVue from '../components/Header.vue';
import AddProduct from '../components/ADD_PRODUCT/AddProduct.vue'
import TableProductVue from '../components/TableProduct/TableProduct.vue';
import { api } from '../../boot/axios'
import { useQuasar } from 'quasar'
import { Notify } from 'quasar'
import {useData} from '../stores/data'




export default {
  name : "demoAdmin" ,
  components : {
    HeaderVue,
    AddProduct,
    TableProductVue
  } ,
  setup()
  {
    const $q = useQuasar()
    const data = ref('')
    const store = useData();
    const product = store.product;
    function loadData()
    {
      $q.loading.show();
    api.get('https://636caa44ab4814f2b26a713e.mockapi.io/product')
      .then((response) =>
      {
        data.value = response.data;  
      })
      .catch(() => {
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
        
      })
      .finally(() => $q.loading.hide())
  }
    loadData();
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
  
    const addProduct = (product) =>
    {
      if (store.product.name == "" && store.product.image == ""&& store.product.describle == "") {
        const message = "vui lòng thêm đầy đủ thông tin !";
        Notifi(message)
      } else {
        $q.loading.show();
        api.post('https://636caa44ab4814f2b26a713e.mockapi.io/product', product)
              .then(function (response)
              {
                const message = "Thêm Thành Công !"
                Notifi(message);
                store.resetProduct();
                loadData();
              
              })
              .catch(function (error) {
                console.log(error);
              })
              .finally(() =>
      {
            $q.loading.hide()
      })
      }
    }

    const updateId = (data) =>
    { 
      product.id = data.id;
      product.name = data.name;
      product.image = data.image;
      product.price = data.price; 
      product.describle = data.describle; 
      product.soluong = data.soluong;

    }
    const UpdateProduct = (product) =>
    {
      if (product.id === "") {
        const message = "Vui Lòng Chọn Sản Phẩm Cần Chỉnh Sửa !"
        Notifi(message); 
      } else {
        $q.loading.show();
        api.put(`https://636caa44ab4814f2b26a713e.mockapi.io/product/${product.id}`,product)
              .then(function (response)
              {
                const message = "Cập Nhập Thành Công !"
                Notifi(message);  
                store.resetProduct();
                loadData(); 
              })
              .catch(function (error) {
                console.log(error);
              })
              .finally(() =>
      {
            $q.loading.hide()
      })
     }
    }

    const Delete = (product) =>
    {
       if (product.id === "") {
        const message = "Vui Lòng Chọn Sản Phẩm Cần Xóa !"
        Notifi(message); 
      } else {
        $q.loading.show();
        api.delete(`https://636caa44ab4814f2b26a713e.mockapi.io/product/${product.id}`)
              .then(function (response)
              {
                const message = "Xóa Thành Công !"
                Notifi(message);  
                store.resetProduct();
                loadData(); 
              })
              .catch(function (error) {
                console.log(error);
              })
              .finally(() =>
      {
            $q.loading.hide()
      })
     }
    }
   

    return {
      Delete,
      updateId,
      UpdateProduct,
      addProduct,
      data , 
      tab: ref('add'),
      splitterModel: ref(20),
    }
  }
}
</script>
<style lang="scss" scoped>

</style>>

