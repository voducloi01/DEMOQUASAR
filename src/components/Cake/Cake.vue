<template>
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
        <q-tab  name="gioithieu" icon="info" label="Giới Thiệu !" />  
      
          <q-tab   v-for="cakeMenu in BANH_MEMU"
          :key="cakeMenu.id"  :name="cakeMenu.key" :icon="cakeMenu.icon" :label="cakeMenu.name" />
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
        <q-tab-panel   name="gioithieu" >
          <div class="text-h4 q-mb-md">Giới Thiệu </div>
         <InformationVue />
        </q-tab-panel>
          <q-tab-panel v-for="BANH_MEMU of BANH_MEMU"  :name="BANH_MEMU.key" :key="BANH_MEMU.id">
            <div class="text-h4 q-mb-md">{{BANH_MEMU.name}}</div>
            <div  class="wrapper_cake">
                <img :src="BANH_MEMU.image" alt="" class="img_cake">
                <p class="describle text-amber-10 q-mt-md" style="font-size:1.2rem ;">
                    {{BANH_MEMU.describle}}
                </p>
                <div>
                  <q-btn color="deep-orange"> Thêm giỏ hàng</q-btn>
                  <input class="q-ml-md input_soluong" type="number" :min="1"/>
                </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import { ref } from 'vue'
import InformationVue from '../Information/Information.vue';
import { BANH_MEMU } from '../../contants/contant'

export default {
    name: 'QuasarCake',
     components: {
    InformationVue
  } ,
    setup()
    {
        const tab = ref('gioithieu');

    return {
      tab,
        splitterModel: ref(20),
        BANH_MEMU,
    }
  }
}
</script>
<style lang="scss">

.wrapper_cake{
    display: flex;
    flex-direction: column;
    align-items: center;

.img_cake {
    height: 50%;
    width: 50%;
}
.input_soluong{
  width: 20%;
  border-radius: 10px ;
}
}

</style>
