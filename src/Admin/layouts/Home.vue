<template>

  <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <HeaderVue/>
      <q-page-container>
        <q-page >
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
               <div class="wrapp"><AddProduct /></div>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HeaderVue from '../components/Header.vue';
import AddProduct from '../components/ADD_PRODUCT/AddProduct.vue'

export default {
  name : "demoAdmin" ,
  components : {
    HeaderVue,
    AddProduct
  } ,
  setup () {
    return {
      tab: ref('mails'),
      splitterModel: ref(20)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>>

