<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <Header/>
        <q-page-container>
          <q-page >
              <ComponentCartVue />
          </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue'
import ComponentCartVue from 'src/components/Cart/ComponentCart.vue';

export default {
  name : "demoCart",
  components : {
    Header ,
    ComponentCartVue
  }

}
</script>

<style>

</style>
