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
          <q-tab   v-for="cakeMenu in CAKE_MENU"
          :key="cakeMenu.id"  :name="cakeMenu.name" :icon="cakeMenu.icon" :label="cakeMenu.lable" />
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
          <q-tab-panel v-for="BANH_MEMU of BANH_MEMU"  :name="BANH_MEMU.key" :key="BANH_MEMU.id">
            <div class="text-h4 q-mb-md">{{BANH_MEMU.name}}</div>
            <div v-if="BANH_MEMU.key==='gioithieu'"><InformationVue /> </div>  
            <div v-else>
                <img :src="BANH_MEMU.image" alt="" class="img_cake">
                <p class="describle text-amber-10" style="font-size:1.2rem ;">
                    {{BANH_MEMU.describle}}
                </p>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import { ref } from 'vue'
import { CAKE_MENU } from '../../contants/contant'
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
        CAKE_MENU,
        BANH_MEMU,
    }
  }
}
</script>
<style lang="scss">
.img_cake {
    height: 50%;
    width: 50%;
}

</style>
