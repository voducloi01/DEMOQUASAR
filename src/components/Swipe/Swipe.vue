<template>
  <div class="row justify-center">
    <q-card
      v-touch-repeat.mouse="handleRepeat"
      class="custom-area cursor-pointer bg-blue-grey-1 text-white shadow-2 relative-position row flex-center"
    >
      <div v-if="info" class="custom-info">
        <img :src="info" alt="">
      </div>
      <div v-else class="text-center">
        Click/touch and hold.
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref ,reactive } from 'vue'

export default {
  name : "demoSwiper" ,
  setup () {
    const info = ref("https://cdn.tgdd.vn/2021/07/CookProduct/BeFunky-collage(3)-1200x676-1.jpg")
    const info1 = reactive([{
      id: 1,
      text : "abb"
    }])
    const handleRepeat = () =>
    {       
      info.value =array
    }   
    return {
      info,
      handleRepeat
    
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-area
  width: 100%
  border-radius: 3px
  padding: 8px

.custom-info pre
  width: 190px
  font-size: 12px
</style>
