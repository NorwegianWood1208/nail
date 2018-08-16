<template>
    <footer class="foot">
        <div class="left">
            <div class="des1">
                {{$t("than")}}
            </div>
            <div class="des2">
                {{$t("Covering")}}
            </div>
            <div class="other">
                <div class="pic-left">
                    
                    <!-- <span class="title1">{{$t("Business")}}</span> -->
                    <!-- <span class="pic1"></span> -->
                </div>
                <div class="pic-right">
                    <!-- <span class="title2">{{$t("Customer")}}</span> -->
                    <!-- <span class="pic2"></span> -->
                </div>
            </div>
            <div class="des3">
                <span class="http">©Copyright 2018 18 NailFuture.com. All rights reserved</span>
                <div class="eamil">
                    <span href="support@nailfuture.com" class="m-eamil">support@nailfuture.com</span>
                    <img src="../../../assets/imgs/推特_twitter43.png" alt="">
                    <img src="../../../assets/imgs/tw.png" alt="">
                    <img src="../../../assets/imgs/facebook.png" alt="">
                </div>
            </div>
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
      width: 100%;
      overflow: hidden;
      background: #343434;
      color: #fff;
      .left{
          width: 100%;
          float: left;
          margin-right: 80px;
          box-sizing: border-box;
          background: #343434;
          padding-top: 54px;
          .des1{
              width: 100%;
              text-indent: 35px;
              font:bold 28px/48px "微软雅黑";
          }
          .des2{
              width: 100%;
              box-sizing: border-box;
              text-align: left;
              padding-left: 35px;
              font:bold 28px/48px "微软雅黑";
          }
          .des3{
              width: 100%;
              overflow: hidden;
              padding-left: 30px;
              color: #fff;
              margin-bottom: 40px;
              font: 24px/56px "微软雅黑";
              .http{
                  float: left;
                  width: 70%;
              }
              .eamil{
                  width: 95%;
                  color: #fff;
                  float: left;
                  margin-top: 20px;
                  text-align: right;
                  font: 24px/28px "微软雅黑";
                  .m-eamil{
                        color: #fff;
                        margin-top: 20px;
                        padding-right: 10px;
                        font: 24px/28px "微软雅黑";
                        border-right: 1px solid #969696;
                  }
                  img{
                      width: 36px;
                      height: 38px;
                  }
              }
              img{
                  margin-left: 20px;
              }
          }
          .other{
              width: 100%;
              overflow: hidden;
              padding-left: 35px;
              box-sizing: border-box;
              margin-bottom: 31px;
              .pic-left{
                width: 50%;   
                float: left;
                .title1{
                    font: 16px/32px "微软雅黑"; 
                }
                .pic1{
                    display: block;
                    width: 100px;
                    height: 100px;
                    display: none;
                    background: #585858;
                }
            }
            .pic-right{
                width: 50%;
                float: left;
                .title2{
                    font: 16px/32px "微软雅黑"; 
                }
                .pic2{
                    display: block;
                    width: 100px;
                    height: 100px;
                    display: none;
                    background: #585858;
                }
            }
          }
      }
    
      
    }
</style>

