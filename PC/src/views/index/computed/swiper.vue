<template>
    <div class="con-swiper">
       <h3><span>offc</span>ial</h3>
        <div class="logo">
            <img class="facebook" src="../../../assets/imgs/facebook.png" alt="">
            <img class="tw1" src="../../../assets/imgs/推特_twitter43.png" alt="">
            <img class="tw2" src="../../../assets/imgs/tw.png" alt="">
        </div>
        <swiper :options="swiperOption" class="swiper-container">
            <swiper-slide class="swiper-slider">
                <div class="swiper-title1">{{$t("ecology")}}</div>
                <div class="swiper-title2">{{$t("Alliance")}}</div>
                <div class="swiper-des">{{$t("Digital")}}</div>
                <img src="../../../assets/imgs/btc.png" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slider">
                <div class="swiper-title1">{{$t("world")}}</div>
                <div class="swiper-title3">{{$t("finance")}}</div>
                <!-- <div class="swiper-des">{{$t("finance")}}</div> -->
                <img src="../../../assets/imgs/btc.png" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            
        </swiper>
        <div class="swiper-button-prev swiper_btn"></div>
        <div class="swiper-button-next swiper_btn"></div>
    </div>
</template>

<script>
export default{
    name:'IndexSwiper',
    data(){
        return {
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    el:'.swiper-pagination',
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            
        }
    }
}
</script>
<style lang="less">
     .con-swiper{
        width: 100%;
        height: 508px;
        padding:  0 60px;
        position: relative;
        box-sizing: border-box;
        background:  #3b3b3b ;
        h3{
            width: 69px;
            height: 28px;
            color: #fff;
            font: 18px/28px "微软雅黑";
            transform: rotate(-90deg);
            position: absolute;
            top: 240px;
            span{
                color: #646464;
            } 
        }
        .logo{
            width: 28px;
            height: 100%;
            margin-left: 24px;
            padding-top: 310px;
            float: left;
            img{
                margin-bottom: 12px;
            }
        }
        .swiper-container{
            width: 1200px;
            height: 500px;
            box-sizing: border-box;
            padding-top: 70px;
            margin-left: 208px;
            .swiper-slide{
                width: 1200px;
                height: 120px;
                color: #fff;
                font: 42px/66px "微软雅黑";
                img{
                    position: absolute;
                    left: 700px;
                    top: 40px;
                }
                .swiper-title3{
                    margin-top: 50px;
                    margin-left: 80px;
                }
                .swiper-des{
                    width: 310px;
                    height: 90px;
                    margin-top: 80px;
                    margin-left: 160px;
                    color: #909090;
                    font: 24px/38px "微软雅黑";
                }
            }
            .swiper-pagination{
                text-align: right;
                left: 0px;
                top: 90%;
                padding-right: 150px;
                box-sizing: border-box;
                .swiper-pagination-bullet{
                    border-radius: 0;
                    width: 40px;
                    height: 3px;;
                }
                .swiper-pagination-bullet{
                    background: #969696;
                }
                .swiper-pagination-bullet-active{
                    background: #969696;
                }
            }
           
        }
         .swiper-button-next{
            position: absolute;
            right: 50px;
            top: 90%;
            width: 46px;
            height: 46px;;
            outline:none;
            background: url(../../../assets/imgs/right.png) no-repeat;
        }
        .swiper-button-prev{
            position: absolute;
            left: 1350px;
            top: 90%;
            width: 46px;
            height: 46px;;
            outline:none;
            background: url(../../../assets/imgs/lift.png) no-repeat;
        }
    }
</style>

