import { defineStore } from 'pinia';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { Loading, QSpinnerFacebook } from 'quasar';
import { Notify } from 'quasar';
export const useCart = defineStore('useCart', () => {
  const dataCart = ref([]);

  const notify = (text) => {
    Notify.create({ message: text, position: 'top', color: 'primary' });
  };

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
        const text = 'Thêm Giỏ Hàng Thành Công !';
        notify(text);
        dataCart.value = response.data;
        loadData();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  const updateData = (id, product) => {
    const findIndex = dataCart.value.findIndex((e) => e.name === product.name);

    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: 'red',
      spinnerSize: 140,
      backgroundColor: '#cccccc',
    });
    axios
      .put(`https://636caa44ab4814f2b26a713e.mockapi.io/cart/${id}`, {
        ...product,
        soluong: dataCart.value[findIndex].soluong + 1,
      })
      .then((response) => {
        const text = 'Tăng Số Lượng !';

        notify(text);
        dataCart.value = response.data;
        loadData();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  onMounted(() => loadData());

  return { dataCart, loadData, postData, updateData };
});
