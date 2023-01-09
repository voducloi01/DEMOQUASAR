<template>

  <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <HeaderVue/>
      <q-page-container>
        <q-page >
          <div class="row">
            <div class="col-12 ">
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
                          <q-tab name="business" icon="check_circle" label="Doanh Thu " />


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
                         <div style="display: flex;">
                            <div class="wrapp"> <AddProduct /></div>
                           <div  class="col-12 col-md-7"><TableProductVue /></div>
                         </div>

                      </q-tab-panel>
                      <q-tab-panel name="business">
                          <div class="wrapp"> abc</div>
                      </q-tab-panel>
                    
                    </q-tab-panels>
                  </template>

                </q-splitter>
           </div>

            </div>
          </div>
       
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import { ref , onMounted } from 'vue'
import HeaderVue from '../components/Header.vue';
import AddProduct from '../components/ADD_PRODUCT/AddProduct.vue'
import TableProductVue from '../components/TableProduct/TableProduct.vue';
import { useData } from '../stores/data';

export default {
  name : "demoAdmin" ,
  components : {
    HeaderVue,
    AddProduct,
    TableProductVue
  } ,
  setup()
  {
  const store = useData()
  onMounted(() => store.loadData() ) 
      return {
      tab: ref('add'),
      splitterModel: ref(20),
    }
  }
}
</script>
<style lang="scss" scoped>

</style>>

