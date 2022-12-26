<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <Header />
    <q-page-container>
      <q-page>
        <CartProductVue />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue';
import CartProductVue from 'src/components/CartProduct/CartProduct.vue';

export default {
  name: 'demoCart',
  components: {
    Header,
    CartProductVue,
  },
};
</script>

<style></style>
