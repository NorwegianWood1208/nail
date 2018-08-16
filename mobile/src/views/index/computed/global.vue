<template>
    <div class="con-global">
        <h3 class="title"><span>{{$t("Global")}}</span> {{$t("trend")}}  —</h3>
        <div class="ul1">
            <div class="ul">
                <div class="lis ma-le-160">
                    <img src="../../../assets/imgs/meiguo.png" alt="">
                    <div class="lis-title">{{$t("America")}}</div>
                    <div class="lis-des">{{$t("Commodity")}}</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/singapore.png" alt="">
                    <div class="lis-title">{{$t("Singapore")}}</div>
                    <div class="lis-des">{{$t("Bitcoin")}}</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/germany.png" alt="">
                    <div class="lis-title">{{$t("Germany")}}</div>
                    <div class="lis-des">{{$t("currency")}}</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/canada.png" alt="">
                    <div class="lis-title">{{$t("Canada")}}</div>
                    <div class="lis-des">{{$t("acknowledges")}}</div>
                </div>
                <div class="lis">
                    <img src="../../../assets/imgs/japan.png" alt="">
                    <div class="lis-title">{{$t("Japan")}}</div>
                    <div class="lis-des">{{$t("approves")}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'IndexGlobal',
}
</script>
<style lang="less">
    #app .ma-le-160{
        margin-left: 160px;
    }
    .con-global{
        width: 100%;
        height: 450px;
        background: #323232 url(../../../assets/imgs/global.jpg) no-repeat;
        background-size: 100% 450px;
        position: relative;
        padding-top: 60px;
        .title{
            width:470px;
            height: 150px;
            font: 42px/150px '微软雅黑';
            color: #949494;
            position: absolute;
            top: 160px;
            left: -160px;
            text-align: right;
            background: #323232;
            transform: rotate(-90deg);
            span{
                color: #fff;
            }
        }
        .ul1{
            width: 100%;
            height: 397px;
            overflow: auto;
            .ul{
                width: 1500px;
                height: 397px;;
                box-sizing: border-box;
                overflow-x: auto;
                overflow-y: hidden;
                .lis{
                    width: 226px;
                    height: 397px;
                    background: #fff;
                    margin-left: 37px;
                    padding-left: 30px;
                    padding-right: 30px;
                    padding-top: 22px;
                    float: left;
                    box-sizing: border-box;
                    img{
                        width: 120px;
                        height: 120px;;
                        margin-left: 16px;
                        margin-bottom: 15px;
                    }
                    .lis-title{
                        width: 100%;
                        height: 50px;
                        text-align: center;
                        font:bold 26px/50px "微软雅黑";
                    }
                    .lis-des{
                        width: 100%;
                        font: 20px/32px "微软雅黑";
                        text-align:justify;
                        text-justify:inter-ideograph;
                        word-break:break-all;
                    }
                }
            }
        }
        
    }
</style>

