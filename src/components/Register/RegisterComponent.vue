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
            :type="iconEye ? 'text' : 'password'"
              v-model="store.user.password"
            filled
            label="Password"
            hint="Password"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          >
        <q-icon @click="handleIconEye" :name="iconEye ? 'remove_red_eye' : 'visibility_off'" size="25px" class="iconEye" />
        </q-input>
          <div>
            <q-btn @click="store.register(store.user ,store.author)"  label="Đăng Ký" type="button" color="primary"/>
          </div>
      </div>
</template>

<script>
import { onMounted ,ref } from 'vue';
import { useAuthor } from 'src/stores/author';

export default {
    name: 'QuasarRegister',
    setup()
    {
      const store = useAuthor();
      const iconEye = ref(false)
      const handleIconEye = () =>
      {
            iconEye.value = !iconEye.value
        }
       
            return {store ,iconEye ,handleIconEye}
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
.iconEye{
    position: absolute;
    font-size: 25px;
    margin-top: -50px;
    height: 100px;
    right: 0;
    top: 50%;
}

</style>