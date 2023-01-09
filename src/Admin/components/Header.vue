<template >
  <q-header class="bg-purple-13" reveal elevated>
    <q-toolbar>

   <q-icon name="shopping_cart" size="35px"/>
     <q-avatar >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQap7CQd2HfIzDR7yh9eecI_A62siDNpKugJw&usqp=CAU">
      </q-avatar>
      <h5 class="q-px-md"> TIỆM BÁNH SÀI GÒN  ! </h5>
    </q-toolbar>
  </q-header>
</template>

<script>
import { ref } from 'vue';


export default {
name: 'QuasarHeader',
props: ['toggleLeftDrawer'],
setup()
{
const tab = ref("home");
return {tab}

}
};
</script>

<style lang="scss" scoped>

</style>
