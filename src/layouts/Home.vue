<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header/>
      <q-page-container>

        <q-page >
          <div class="wrapper_slogan"><SloganVue/></div>
          <SwipeVue />
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue'
import SwipeVue from 'src/components/Swipe/Swipe.vue';
import SloganVue from 'src/components/Slogan/Slogan.vue';


export default {
  name: 'MyLayout',
  components: {
    Header,
    SwipeVue,
    SloganVue
  },

  setup () {

  }
}
</script>
<style lang="scss">
.wrapper_slogan{
  position: absolute;
  z-index: 1000;
  left: 0px;
  right: 0px;
  margin: 0px auto;
}
</style>

