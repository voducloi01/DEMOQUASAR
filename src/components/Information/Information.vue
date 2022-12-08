<template>
      <div class="wrap_introduce">
                <div class="q-pa-md">
                <div class="row">
                <div class="col-12 col-md-12" >
                   <div class="wrapp_content q-pa-md">
                        <div class="item_content">

                            <p class="title_content">
                                Có bao giờ bạn thức dậy và mất rất nhiều thời gian để nghĩ về việc: sáng nay ăn gì chưa? Hãy ghé Mini Bao để tìm câu trả lời nào.
                            </p>
                        </div>
                        <div class="image_content">
                            <img src="https://file.hstatic.net/200000278005/file/12_bac31668db9d46c1930b237359483889_grande.jpg" alt="">
                            <br/>
                            <img src="//file.hstatic.net/200000278005/file/11_bab0a37d298b489abe0a74c02d59782d_grande.jpg"/>
                        </div>
                        <div class="item_content q-pa-lg">
                            <p class="title_content" style="font-size: 1.5rem;">
                                Địa Điểm Cửa hàng !
                            </p>
                               <p class="title_content" >
                                Của hàng 1 : 21 Nguyễn Thị Định , Huyện Krông Pắc ,Tỉnh ĐakLak .
                            </p>

                        </div>
                   </div> 
                </div>
          </div>
  </div>

            </div>
</template>

<script>
export default {
    name: 'QuasarInformation',

    setup()
    {
    
     }
};
</script>

<style lang="scss" scoped>

.menu_item{
    display: flex;
    justify-content: center;
    padding: 20px ; 
}
.wrapper_item{
    :hover {
        cursor: pointer;
        background: rgb(241, 236, 236);
    }
    .title_img {
        height: 100%;
        width: 100%;
    }
    .text_item{
    color: rgb(228, 15, 50) ;
    margin:  0 ;
    font-size: 1.2rem ;
    text-decoration: none ;
}
}
 
.wrapp_content{
     .image_content{
      display: flex;
      flex-direction: column;     
      align-items: center;
    }
    .title_content{
        font-size: 1.2rem;
    }
}

</style>