import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { Loading, QSpinnerFacebook } from 'quasar';
import { Notify } from 'quasar';
import axios from 'axios';
import { useRouter } from 'vue-router';
export const useAuthor = defineStore('useAuthor', () => {
  const author = ref([]);
  const user = reactive({
    username: '',
    password: '',
  });
  const resetForm = () => {
    return (user.username = ''), (user.password = '');
  };
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
    const check = dataAuthor.some((e) => e.username === dataUser.username);
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
            resetForm();
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
  const router = useRouter();
  const hadleLogin = (user, author) => {
    const check = author.some(
      (e) => e.username === user.username && e.password === user.password
    );
    if (!check) {
      const text = 'Sai Tài Khoảng hoặc mật khẩu !';
      notify(text);
    } else {
      const text = 'Đăng nhập thành công !';
      notify(text);
      router.replace({ path: 'sanpham' });
    }
  };

  return { author, register, user, loadData, hadleLogin };
});
