<template>
  <div>

    <div class="table-users">
      <div class="header">Cart</div>
      <table cellspacing="0">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Manager</th>
        </tr>

        <tr v-for="data of store.dataCart" :key="data.id">
          <td><img :src="data.image" alt="" /></td>
          <td>{{ data.name }}</td>
          <td>{{ formatNumber(data.price) }}</td>
          <td><input type="number" @input="store.onChange(data , $event.target.value)" :value="data.soluong"  style="width: 55px;"  min="1" max="30"/></td>
          <td style="text-align: center">
            <q-btn @click="store.deleteProductCart(data.id)"> Delete</q-btn>
          </td>
        </tr>
      </table>
    </div>
    <div class="wrapper_credit">

      <span class="total">Total : {{ handleTotal(store.dataCart) }}</span>
      <q-btn
        v-show="verifyCookies"
        class="bg-primary"
        @click="storeBill.hadlePay(store.dataCart, handleTotal(store.dataCart))"
      >
        Thanh Toán</q-btn
      >
    </div>
  </div>
</template>

<script>
import { useCart } from '../../stores/cart';
import { useBill } from 'src/stores/bill';
import { formatNumber } from '../../Utils/logicPage';
import _ from 'lodash';
import { useQuasar } from 'quasar';

export default {
  name: 'cardProduct',
  setup()
  { 
    const $q = useQuasar()
    const store = useCart();
    const storeBill = useBill();
  
    const verifyCookies = $q.cookies.has('username');
    const handleTotal = (arr) =>
    { 
      const checkArray = Array.isArray(arr)
      if (!checkArray) {
         $q.localStorage.set('Cart', [])
      }
      const sumPrice = _.sumBy(arr, function (e)
      {
        return e.price * e.soluong;
      });
      return formatNumber(sumPrice);
    };
 
 

    return { formatNumber, store, handleTotal, verifyCookies, storeBill   };
  },
};
</script>

<style lang="scss" scoped>
.wrapper_credit {
  display: flex;
  justify-content: space-evenly;
}
$baseColor: #398b93;
$borderRadius: 10px;
$imageBig: 100px;
$imageSmall: 60px;
$padding: 10px;

body {
  background-color: lighten($baseColor, 30%);
  * {
    box-sizing: border-box;
  }
}
.total {
  text-align: center;
  font-size: 1.5rem;
  color: red;
}
.header {
  background-color: darken($baseColor, 5%);
  color: white;
  font-size: 1.5em;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
}

img {
  border-radius: 50%;
  height: $imageSmall;
  width: $imageSmall;
}

.table-users {
  border: 1px solid darken($baseColor, 5%);
  border-radius: $borderRadius;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  max-width: calc(100% - 2em);
  margin: 1em auto;
  overflow: hidden;
  width: 800px;
}

table {
  width: 100%;

  td,
  th {
    color: darken($baseColor, 10%);
    padding: $padding;
  }

  td {
    text-align: center;
    vertical-align: middle;

    &:last-child {
      font-size: 0.95em;
      line-height: 1.4;
      text-align: left;
    }
  }

  th {
    background-color: lighten($baseColor, 50%);
    font-weight: 300;
  }

  tr {
    &:nth-child(2n) {
      background-color: white;
    }
    &:nth-child(2n + 1) {
      background-color: lighten($baseColor, 55%);
    }
  }
}

@media screen and (max-width: 700px) {
  table,
  tr,
  td {
    display: block;
  }

  td {
    &:first-child {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: $imageBig;
    }

    &:not(:first-child) {
      clear: both;
      margin-left: $imageBig;
      padding: 4px 20px 4px 90px;
      position: relative;
      text-align: left;

      &:before {
        color: lighten($baseColor, 30%);
        content: '';
        display: block;
        left: 0;
        position: absolute;
      }
    }

    &:nth-child(2):before {
      content: 'Name:';
    }
    &:nth-child(3):before {
      content: 'Email:';
    }
    &:nth-child(4):before {
      content: 'Phone:';
    }
    &:nth-child(5):before {
      content: 'Comments:';
    }
  }

  tr {
    padding: $padding 0;
    position: relative;
    &:first-child {
      display: none;
    }
  }
}

@media screen and (max-width: 500px) {
  .header {
    background-color: transparent;
    color: lighten($baseColor, 60%);
    font-size: 2em;
    font-weight: 700;
    padding: 0;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }

  img {
    border: 3px solid;
    border-color: lighten($baseColor, 50%);
    height: $imageBig;
    margin: 0.5rem 0;
    width: $imageBig;
  }

  td {
    &:first-child {
      background-color: lighten($baseColor, 45%);
      border-bottom: 1px solid lighten($baseColor, 30%);
      border-radius: $borderRadius $borderRadius 0 0;
      position: relative;
      top: 0;
      transform: translateY(0);
      width: 100%;
    }

    &:not(:first-child) {
      margin: 0;
      padding: 5px 1em;
      width: 100%;

      &:before {
        font-size: 0.8em;
        padding-top: 0.3em;
        position: relative;
      }
    }

    &:last-child {
      padding-bottom: 1rem !important;
    }
  }

  tr {
    background-color: white !important;
    border: 1px solid lighten($baseColor, 20%);
    border-radius: $borderRadius;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    margin: 0.5rem 0;
    padding: 0;
  }

  .table-users {
    border: none;
    box-shadow: none;
    overflow: visible;
  }
}
</style>
