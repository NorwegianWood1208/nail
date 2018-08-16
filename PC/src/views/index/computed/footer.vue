<template>
    <footer class="foot">
        <div class="left">
            <div class="des1">
                {{$t("than")}}
            </div>
            <div class="des2">
                  {{$t("Covering")}}
            </div>
        </div>
        <div class="right">
            <!-- <div class="right-title">
                <span class="title1">{{$t("Business")}}</span>
                <span class="title2">{{$t("Customer")}}</span>
            </div> -->
            <!-- <div class="right-pic">
                <span class="pic1"></span>
                <span class="pic2"></span>
            </div> -->
        </div>
        <div class="des3">
            <span class="http">©Copyright 2018 18 NailFuture.com. All rights reserved</span>
            <span href="support@nailfuture.com" class="eamil">support@nailfuture.com</span>
            <img src="../../../assets/imgs/推特_twitter43.png" alt="">
            <img src="../../../assets/imgs/tw.png" alt="">
            <img src="../../../assets/imgs/facebook.png" alt="">
        </div>
    </footer>
</template>

<script>
export default{
    name:'IndexFooter'
}
</script>
<style lang="less">
    .foot{
      width: 1500px;
      overflow: hidden;
      background: #343434;
      margin: 0 auto;
      color: #fff;
      .left{
          width: 900px;
          float: left;
          margin-right: 80px;
          box-sizing: border-box;
          background: #343434;
          padding-top: 54px;
          .des1{
              width: 100%;
              text-indent: 55px;
              font:bold 20px/36px "微软雅黑";
          }
          .des2{
              width: 100%;
              text-align: left;
              text-indent: 55px;
              font:bold 20px/36px "微软雅黑";
              margin-bottom: 40px;
          }
          
      }
      .right{
          width: 300px;
          height: 170px;
          padding-top: 33px;
          float: left;
          .right-title{
              width: 100%;
              height: 37px;
              box-sizing: border-box;
              font: 12px/37px "微软雅黑";
              color: #ebebeb;
              padding-left: 263px;
              .title1{
                  margin-right: 90px;   
              }
          }
          .right-pic{
              width: 100%;
              height: 100px;
              box-sizing: border-box;
              padding-left: 263px;
              .pic1{
                  float: left;
                  width: 100px;
                  height: 100px;
                  background: #585858;
                  margin-right: 120px; 
              }
              .pic2{
                  float: left;
                  width: 100px;
                  height: 100px;
                  background: #585858;
              }
          }
      }
      .des3{
            width: 800px;;
            overflow: hidden;
            color: #fff;
            margin-left: 55px;
            font: 14px/56px "微软雅黑";
            .http{
                margin-bottom: 40px;
                float: left;
            }
            .eamil{
                color: #fff;
                float: left;
                margin-left: 40px;
                margin-top: 20px;
                padding-right: 10px;
                font: 14px/14px "微软雅黑";
                border-right: 1px solid #969696;
                img{
                    width: 36px;
                    height: 36px;
                }
            }
            img{
                width: 22px;
                height: 22px;
                margin-left: 20px;
            }
        }
    }
</style>

