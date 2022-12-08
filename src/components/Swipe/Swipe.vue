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
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
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
