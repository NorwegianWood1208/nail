<template>
    <div class="con-global">
        <h3 class="title"><span class="span1">{{$t("Global")}}</span> <span class="span2">{{$t("trend")}}</span> —</h3>
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
        height: 590px;
        background: #323232 url(../../../assets/imgs/global.jpg) no-repeat;
        position: relative;
        padding-top: 120px;
        box-sizing: border-box;
        .title{
            width:590px;
            height: 42px;
            font: 42px/42px '微软雅黑';
            color: #949494;
            position: absolute;
            top: 274px;
            left: -210px;
            text-align: right;
            transform: rotate(-90deg);
            .span1{
                color: #fff;
            }
            .span2{
                margin-right: 20px;
            }
        }
        .lis{
            width: 226px;
            height: 363px;
            background: #fff;
            margin-left: 37px;
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 22px;
            float: left;
            box-sizing: border-box;
            img{
                margin-left: 16px;
                margin-bottom: 15px;
            }
            .lis-title{
                width: 100%;
                height: 30px;
                text-align: center;
                font:bold 16px/30px "微软雅黑";
            }
            .lis-des{
                width: 100%;
                font: 14px/24px "微软雅黑";
                text-align:justify;
                text-justify:inter-ideograph;
                word-break:break-all;
            }
        }
    }
</style>

