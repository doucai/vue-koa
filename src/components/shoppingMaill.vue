<template>
  <div class="search-bar">
    <van-row gutter="5">
      <van-col span="3">
        <img :src="locationIcon" width="60%" class="location-icon" />
      </van-col>
      <van-col span="16">
        <input type="text" class="search-input">
      </van-col>
      <van-col span="5">
        <van-button size="mini">查找</van-button>
      </van-col>
    </van-row>  

    <!--swipwer area-->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerPicArray" :key="index">
        <img v-lazy="image.image" width="100%"/>
      </van-swipe-item>
    </van-swipe>

    <div class="type-bar">
        <div  v-for="(cate,index) in category" :key="index" >
                <img v-lazy="cate.image" width="90%" />
                <span>{{cate.mallCategoryName}}</span> 
        </div>
    </div>
    <!--AD banner area-->
    <div class="ad-banner">
        <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        locationIcon: require("../assets/search.png"),
        bannerPicArray:"",
        category:"",
        adBanner:""
      }
    },
    created () {
      this.$http({
        url:"https://www.easy-mock.com/mock/5ae2b3c4ab5bad29ce810a51/example/xiaocai",
        method:"get",
      }).then((res)=>{
        console.log(res)
        if(res.status == 200){
          this.category=res.data.data.category
          this.adBanner = res.data.data.advertesPicture
          this.bannerPicArray=res.data.data.slides
        }
      }).catch((err)=>{
        console(err)
      })
    }

  };

</script>
<style>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid 1px !important;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    padding-top: .2rem;
    padding-left: .6rem;
  }
  .swiper-area{
      width:100%;
      clear:both;
      overflow: hidden;
  }
  .van-swipe{
    width: 100%;
  }

 .type-bar{
      background-color: #fff;
      margin:0 .3rem .3rem .3rem;
      border-radius: .3rem;
      font-size:14px;
      display: flex;
      flex-direction:row;
      flex-wrap:nowrap;
  }
  .type-bar div{
      padding: .3rem;
      font-size: 12px;
      text-align: center;
  }
 
</style>

