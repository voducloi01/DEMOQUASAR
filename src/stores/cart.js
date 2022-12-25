import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { Loading, QSpinnerFacebook } from 'quasar';
export const useCart = defineStore('useCart', () => {
  const dataCart = ref([]);

  const loadData = () => {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: 'red',
      spinnerSize: 140,
      backgroundColor: '#cccccc',
    });
    axios
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/cart')
      .then((response) => {
        dataCart.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  const postData = (product) => {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: 'red',
      spinnerSize: 140,
      backgroundColor: '#cccccc',
    });
    axios
      .post('https://636caa44ab4814f2b26a713e.mockapi.io/cart', {
        ...product,
        soluong: 1,
      })
      .then((response) => {
        dataCart.value = response.data;
        loadData();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  const updateData = () => {
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: 'red',
      spinnerSize: 140,
      backgroundColor: '#cccccc',
    });
    axios
      .put('https://636caa44ab4814f2b26a713e.mockapi.io/cart')
      .then((response) => {
        dataCart.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  onMounted(() => loadData());

  return { dataCart, loadData, postData, updateData };
});
