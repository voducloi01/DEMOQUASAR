<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <Header/>
      <q-page-container>
        <q-page class="q-px-xl">
            <RegisterComponentVue />
        </q-page>
      </q-page-container>
  </q-layout>
</template>


<script>
import Header from '../components/Header/Header.vue' 
import RegisterComponentVue from 'src/components/Register/RegisterComponent.vue';


export default {
    name: 'demoLogin',
        components: {Header ,RegisterComponentVue} , 
        setup() {
          
        }
    }
</script>

<style lang="scss" scoped>
.q-page{
        display: flex ; 
        justify-content: center;
}
</style>