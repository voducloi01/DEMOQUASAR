<template>

    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="1500"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://netamthuc.vn/wp-content/uploads/2021/04/Banh-bao-sau-khi-duoc-hap-chin.jpg" />
      <q-carousel-slide :name="2" img-src="https://i.ytimg.com/vi/ECcjnKmFdEY/maxresdefault.jpg" />
      <q-carousel-slide :name="3" img-src="https://i.ytimg.com/vi/u9hHhR0vj4I/maxresdefault.jpg" />
      <q-carousel-slide :name="4" img-src="http://img.websosanh.vn/v2/users/review/images/9-cong-thuc-lam-banh-kem-khong/3np0ll0juu5km.jpg" />
    </q-carousel>

</template>

<script>
import { ref } from 'vue'

export default {
  name : "DemoSwiper",
  setup () {

    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>
<style lang="scss">
.q-carousel {
    height: 100%;
    position: absolute;
    background-color: #fff;
    width: 100%;
}

</style>
