<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-pink-12 dialog_title" >Chương Trình Khuyến Mãi Ăn 3 Tính tiền 2 !<q-icon name="mood" /> </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        <img src="https://hoanhap.vn/uploads/photos/40/2-2/60248f6bc0281.jpg" class="dialog_img"/>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name : "quasarDialog" ,
  setup () {
    return {
      alert: ref(true),
    }
  }
}
</script>

<style>
.dialog_title{
    font-size: 1.5rem;
}
.dialog_img {
    width: 100%;
    height: 100%;
}
</style>
