import { defineStore } from 'pinia';
import { reactive } from 'vue';
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

  return { product, resetProduct, checkData };
});
