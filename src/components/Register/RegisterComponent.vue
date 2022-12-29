<template>
       <div class="q-pa-md wrapper_register" >
        <h4> Đăng Ký</h4>
          <q-input
            v-model="store.user.username"
            filled  
            label="User Name"
            hint="User Name"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
              v-model="store.user.password"
            filled
            label="Password"
            hint="Password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <div>
            <q-btn @click="store.register(store.user ,store.author)"  label="Đăng Ký" type="button" color="primary"/>
          </div>
      </div>
</template>

<script>
import { onMounted } from 'vue';
import { useAuthor } from 'src/stores/author';

export default {
    name: 'QuasarRegister',
    setup()
    {
        const store = useAuthor();
        onMounted(() => {
           store.loadData();
        });
            return {store}
    }
};
</script>

<style lang="scss" scoped>
.wrapper_register{
    display: flex ;
    flex-direction: column ;
    text-align: center ;
    width: 30% ;

   
}

</style>