import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Notify } from 'quasar';
import { LocalStorage } from 'quasar';

export const useCart = defineStore('useCart', () => {
  const dataCart = ref([]);
  dataCart.value = LocalStorage.getItem('Cart');

  const notify = (text) => {
    Notify.create({
      message: text,
      position: 'top',
      color: 'primary',
    });
  };
  const addCart = (product) => {
    const check = dataCart.value.some((e) => e.name == product.name);
    if (!check) {
      const text = 'Đã thêm sản phẩm vào giỏ hàng !';
      notify(text);
      dataCart.value.push({ ...product, soluong: 1 });
      LocalStorage.set('Cart', dataCart.value);
    } else {
      const index = dataCart.value.findIndex((e) => e.name == product.name);
      dataCart.value[index].soluong += 1;
      const text = 'Tăng số lượng của bạn lên 1 !';
      notify(text);
      LocalStorage.set('Cart', dataCart.value);
    }
  };
  const onChange = (data, value) => {
    const newArray = dataCart.value.map((e) => {
      if (e.name === data.name) {
        return { ...e, soluong: +value };
      }
      return e;
    });
    LocalStorage.set('Cart', newArray);
    dataCart.value = LocalStorage.getItem('Cart');
  };

  const deleteProductCart = (id) => {
    const index = dataCart.value.findIndex((e) => e.id === id);
    dataCart.value.splice(index, 1);
    LocalStorage.set('Cart', dataCart.value);
  };
  return {
    dataCart,
    addCart,
    onChange,
    deleteProductCart,
  };
});
