<template>
    <header class="head">
        <img class="h1" src="../../../assets/imgs/h1.png" alt="">
        <div class="float-right">
            <nav class="nav">
                <!-- <div class="lis">{{$t("home")}}</div> -->
                <!-- <div class="lis">{{$t("Assets")}}</div>
                <div class="lis">{{$t("Introduction")}}</div> -->
            </nav>
            <!-- <div class="lis-login">
                <div class="login">{{$t("Login")}}/</div>
                <div class="register">{{$t("Register")}}</div>
            </div> -->

            <BaseSelect v-on:select="showProject"
              :selectedValue="projectName"
              :dataList="list"
              :widthData="widthData"></BaseSelect>
            
        </div>
    </header>
</template>

<script>
import BaseSelect from '../../../components/xiala'
export default{
    name:'IndexHeader',
    components:{
        BaseSelect
    },
    data(){
      return {
          list:[
          {key:"zh",value:"中文"},
          {key:"en",value:"English"},
          {key:"ja",value:"日本語"}
        ],
        projectName:{//岁子组件的选择值改变而改变的值
          key:"",
          value:""
        },
        widthData:"120px",
      }
    },
    mounted(){
    //   if (lan) {
    //        this.$refs.aaa.value = lan
    //     }
    },
    methods:{
    //   handchange(event){
    //     this.$i18n.locale = event.target.value
    //     window.localStorage.setItem('language', event.target.value)
    //     window.localStorage.setItem('lang', this.langu[event.target.value])
    //   },
      showProject (){
        console.log("下拉列表的值改变了");
        console.log("213122"+this.projectName.value);
        console.log("213122"+this.projectName.key);
      },
    },
}
</script>
<style lang="less">
    .head{
        width: 100%;
        height: 63px;
        padding-top: 14px;
        box-sizing: border-box;
        background: #3b3b3b;
        .h1{
            margin-left: 40px;
        }
        .float-right{
            float: right;
            position: relative;
            .nav{
            overflow: hidden;
            float: left;
            color: #757575;
            margin-left: 620px;
            .lis{
                font: 18px/34px "华文细黑";
                float: left;
                text-align: center;
                margin:  0 40px;
                border-bottom: 1px solid #757575;
            }
            }
            .lis-login{
            overflow: hidden;
            padding:  0 40px;
            float: left;
            font: 18px/34px "华文细黑";
            color: #757575;
                .login{
                    float: left;
                }
                .register{
                    float: left;
                }
            }
            .lange{
                font-size: 16px;
                float: right;
                color: #b9bcc3;
                text-align: right;
                margin-right: 40px;
                background: #3b3b3b;
                font: 16px/34px "微软雅黑";
                -webkit-appearance: none; /*for chrome*/
                .desfont{
                    background: #3b3b3b;
                    border: none;
                }
            }
            
        }
    }
</style>

