<template>
     <q-layout view="hHh lpR fFf" class="bg-grey-1">
      <Header/>
      <q-page-container>
        <q-page class="q-pa-md">
            <div class="wrapper_menu">
                <img src="https://file.hstatic.net/200000278005/file/menu_thang_11_dung_chung-2_2_345175696a37479cbb1552dfe9c7c2d4_1024x1024.jpg" alt="">
            </div>
        </q-page>
      </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue' 

export default {
    name: 'QuasarMenu',
     components: {
    Header,
    },
    setup()
    {
    
    }
};
</script>

<style lang="scss" scoped>
.wrapper_menu{
    display: flex ;
    justify-content: center;
}
</style>