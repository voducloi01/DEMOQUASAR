import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useData = defineStore('useData', () => {
  const setData = (data) => {
    LocalStorage.clear();
    LocalStorage.set('data', data) || [];
  };

  const getData = () => {
    return LocalStorage.getItem('data');
  };

  const updateData = (data) => {
    setData([...data]);
  };

  return { setData, getData, updateData };
});
