import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { Notify } from 'quasar';
import { Loading } from 'quasar';
import axios from 'axios';

export const useData = defineStore('useData', () => {
  const product = reactive({
    name: '',
    image: '',
    price: 0,
    describle: '',
    soluong: 0,
  });

  const resetProduct = () => {
    product.id = '';
    product.name = '';
    product.image = '';
    product.price = 0;
    product.describle = '';
    product.soluong = 0;
  };
  const checkData = () => {
    product.name = '';
    product.image = '';
    product.price = 0;
    product.describle = '';
    product.soluong = 0;
  };
  const Notifi = (message, type, color) => {
    Notify.create({
      type: type,
      color: color,
      timeout: 2000,
      position: 'center',
      message: message,
    });
  };
  const data = ref([]);
  function loadData() {
    Loading.show();
    axios
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/product')
      .then((response) => {
        data.value = response.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => Loading.hide());
  }

  const addProduct = (product) => {
    if (product.name == '' || product.image == '' || product.describle == '') {
      Notifi('Vui lòng thêm đầy đủ thông tin !', 'warning', 'red');
    } else {
      Loading.show();
      axios
        .post('https://636caa44ab4814f2b26a713e.mockapi.io/product', product)
        .then(function (response) {
          Notifi('Thêm Thành Công !', 'positive', 'positive');
          resetProduct();
          loadData();
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          Loading.hide();
        });
    }
  };
  const UpdateProduct = (product) => {
    if (product.id === '') {
      Notifi('Vui Lòng Chọn Sản Phẩm Cần Chỉnh Sửa !', 'warning', 'red');
    } else {
      Loading.show();
      axios
        .put(
          `https://636caa44ab4814f2b26a713e.mockapi.io/product/${product.id}`,
          product
        )
        .then(function (response) {
          Notifi('Cập Nhập Thành Công !', 'positive', 'positive');
          resetProduct();
          loadData();
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          Loading.hide();
        });
    }
  };

  const updateId = (data) => {
    product.id = data.id;
    product.name = data.name;
    product.image = data.image;
    product.price = data.price;
    product.describle = data.describle;
    product.soluong = data.soluong;
  };

  const Delete = (product) => {
    Loading.show();
    axios
      .delete(
        `https://636caa44ab4814f2b26a713e.mockapi.io/product/${product.id}`
      )
      .then(function () {
        Notifi('Xóa Thành Công !', 'positive', 'positive');
        resetProduct();
        loadData();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        Loading.hide();
      });
  };

  return {
    product,
    checkData,
    addProduct,
    UpdateProduct,
    loadData,
    Delete,
    updateId,
    data,
  };
});
