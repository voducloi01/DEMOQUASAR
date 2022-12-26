import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, computed } from 'vue';
import { Loading } from 'quasar';
export const useProduct = defineStore('useProduct', () => {
  const dataProduct = ref([]);

  const getDataProduct = () => {
    Loading.show();
    axios
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/product')
      .then((response) => {
        dataProduct.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  return { getDataProduct, dataProduct };
});
