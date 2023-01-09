<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header />
    <q-page-container>
      <q-page>
        <detaiBillComponentVue />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue';
import detaiBillComponentVue from 'src/components/DetailBill/detaiBillComponent.vue';

export default {
  name: 'demoBill',
  components: {
    Header,
    detaiBillComponentVue,
  },
};
</script>

<style></style>
