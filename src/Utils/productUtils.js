import { useCart } from '../stores/cart';
const storeCard = useCart();

export const addProduct = (data) => {
  const itemName = storeCard.dataCart.map((e) => e.name);
  const check = itemName.includes(data.name);
  if (!check) {
    storeCard.postData(data);
  } else {
    const index = storeCard.dataCart.findIndex((e) => e.name === data.name);
    const idCart = storeCard.dataCart[index].id;
    storeCard.updateData(idCart, data);
  }
  return { storeCard };
};

export const handleSort = (value, min, max) => {
  return value.filter((e) => e.price >= min && e.price <= max);
};
