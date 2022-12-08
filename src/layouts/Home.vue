<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <Header/>
      <q-page-container>
        <q-page >
          <!-- <DialogVue /> -->
          <SwipeVue />
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue'
import DialogVue from 'src/components/Dialog/Dialog.vue'
import SwipeVue from 'src/components/Swipe/Swipe.vue';


export default {
  name: 'MyLayout',
  components: {
    Header,
    // DialogVue,
    SwipeVue
  },

  setup () {

  }
}
</script>

