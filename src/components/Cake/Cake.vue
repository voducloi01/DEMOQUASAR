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
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>

<script>
import { ref } from 'vue'
import InformationVue from '../Information/Information.vue';

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
