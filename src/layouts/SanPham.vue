<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header/>
      <q-page-container>
        <q-page class="q-pa-md">
          <DialogVue />
          <Product :DATA_PRODUCT="BANH_MEMU"/>
        </q-page>
      </q-page-container>
      <div v-if="check">
        <Footer />
        </div>

  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Product from '../components/Product/Product.vue'
import {BANH_MEMU} from '../contants/contant.js'
import DialogVue from 'src/components/Dialog/Dialog.vue'
import Footer from '../components/Footer/Footer.vue'
import {ref} from 'vue'
export default {
  name: 'MyLayout1',
  components: {
    Footer,
    Header,
    Product,
    DialogVue
  },

  setup () {
    const check = ref(false)



    return {BANH_MEMU , check}
  }
}
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>
