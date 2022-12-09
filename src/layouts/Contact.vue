<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <Header/>
        <q-page-container>
          <q-page >
            <ContactVue />
          </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
import Header from '../components/Header/Header.vue'
import ContactVue from 'src/components/Contact/Contact.vue';

export default {
    name: 'QuasarContact',
    components: {
    Header,
    ContactVue
  },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>