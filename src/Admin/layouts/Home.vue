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
                          <q-tab name="mails" icon="add" label="Thêm Sản Phẩm" />

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
                      <q-tab-panel name="mails">
                          <div class="wrapp"> <AddProduct @addProduct="addProduct"/></div>
                      </q-tab-panel>
                    </q-tab-panels>
                  </template>

                </q-splitter>
           </div>

            </div>
         <div class="col-12 col-md-7"><TableProductVue :data='data' /></div>
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
    function loadData()
    {
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
  }
    loadData();
      const Notifi = () =>
    {
          Notify.create({
            type: 'positive',
            color: 'positive',
            timeout: 2000,
            position: 'center',
            message: 'Thêm Thành Công !'
          })
    }
     
   
    const addProduct = (product) =>
    {
        api.post('https://636caa44ab4814f2b26a713e.mockapi.io/product', product)
              .then(function (response)
                  {
                Notifi();
                product.name = ""; 
                product.image = "";
                product.price = 0; 
                product.describle = ""; 
                product.soluong = 0;    
                console.log(response);
                loadData();
              
              })
              .catch(function (error) {
                console.log(error);
              });
    }

    return {
      addProduct,
      data , 
      tab: ref('mails'),
      splitterModel: ref(20)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>>

