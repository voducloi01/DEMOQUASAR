import { defineStore } from 'pinia';
import { ref, onMounted, reactive } from 'vue';
import { Loading, QSpinnerFacebook } from 'quasar';
import { Notify } from 'quasar';
import axios from 'axios';
import { data } from 'browserslist';

export const useAuthor = defineStore('useAuthor', () => {
  const author = ref([]);
  const user = reactive({
    username: '',
    password: '',
  });

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
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/user')
      .then((response) => {
        author.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => Loading.hide());
  };

  const register = (dataUser, dataAuthor) => {
    const itemName = dataAuthor.map((e) => e.username);
    const check = itemName.includes(dataUser.username);
    if (!check) {
      if (dataUser.username == '' || dataUser.password == '') {
        const text = 'Vui Lòng Nhập Đầy Đủ Thông Tin !';
        notify(text);
      } else {
        Loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'red',
          spinnerSize: 140,
          backgroundColor: '#cccccc',
        });
        axios
          .post('https://636caa44ab4814f2b26a713e.mockapi.io/user', {
            ...dataUser,
          })
          .then((response) => {
            const text = 'Đăng Ký Thành Công !';
            notify(text);
            loadData();
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => Loading.hide());
      }
    } else {
      const text = 'Trùng User Name!';
      notify(text);
    }
  };

  return { author, register, user, loadData };
});
