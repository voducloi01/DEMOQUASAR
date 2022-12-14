import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';
import { api } from '../boot/axios';
import { useQuasar } from 'quasar';

export const useData = defineStore('useData', () => {
  const $q = useQuasar();
  const data = ref();

  function loadData() {
    api
      .get('https://636caa44ab4814f2b26a713e.mockapi.io/product')
      .then((response) => {
        console.log((data.value = response.data));
      })
      .catch(() => {
        $q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem',
        });
      });
  }
  onMounted(() => {
    loadData();
    console.log(123);
  });

  return { data };
});
