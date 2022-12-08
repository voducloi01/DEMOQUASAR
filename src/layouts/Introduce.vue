<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <Header/>
      <q-page-container>
        <q-page class="q-px-xl">
          <CakeVue />
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue' 
import CakeVue from 'src/components/Cake/Cake.vue';


export default {
    name: "DemoIntroduce",
    components: {
        Header,
    CakeVue
  
  },
    }
</script>

