<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <Header/>
      <q-page-container>
        <q-page class="q-px-xl">
            <LoginComponentVue />
        </q-page>
      </q-page-container>
  </q-layout>
</template>


<script>
import Header from '../components/Header/Header.vue' 
import LoginComponentVue from 'src/components/Login/LoginComponent.vue';

export default {
    name: 'demoLogin',
        components: {Header ,LoginComponentVue} , 
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