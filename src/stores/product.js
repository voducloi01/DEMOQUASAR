import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { Loading } from 'quasar';
export const useProduct = defineStore('useProduct', () => {
  const data = ref([]);
  function loadData() {
    Loading.show();
    axios
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/product')
      .then((response) => {
        data.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  }
  onMounted(() => loadData());

  return { data };
});
