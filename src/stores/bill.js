import { defineStore } from 'pinia';
import axios from 'axios';
import { Loading, QSpinnerFacebook } from 'quasar';
import { Notify } from 'quasar';
import { date } from 'quasar';
import { Cookies } from 'quasar';
import { LocalStorage } from 'quasar';
export const useBill = defineStore('useBill', () => {
  const notify = (text) => {
    Notify.create({ message: text, position: 'center', color: 'primary' });
  };
  const hadlePay = (dataPay, total) => {
    const newDate = Date.now();
    const formatDate = date.formatDate(newDate, 'YYYY-MM-DDTHH:mm:ss');
    const nameProduct = dataPay.map((e) => e.name);
    const user = Cookies.get('username');
    Loading.show({
      spinner: QSpinnerFacebook,
      spinnerColor: 'red',
      spinnerSize: 140,
      backgroundColor: '#cccccc',
    });
    axios
      .post('https://636caa44ab4814f2b26a713e.mockapi.io/bill', {
        time: formatDate,
        name: nameProduct.toString(),
        total: total,
        khachhang: user,
      })
      .then(() => {
        const text = 'Thanh Toán Thành Công !';
        dataPay.length = 0;
        LocalStorage.set('Cart', []);
        notify(text);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  return {
    hadlePay,
  };
});
