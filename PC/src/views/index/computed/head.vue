<template>
    <header class="head"
    >
        <router-link to="/"><img class="h1" src="../../../assets/imgs/h1.png" alt=""></router-link>
        <div class="float-right">
            <nav class="nav">
                <!-- <div class="lis">{{$t("home")}}</div> -->
                <!-- <div class="lis">{{$t("Assets")}}</div>
                <div class="lis">{{$t("Introduction")}}</div> -->
            </nav>
            

            <BaseSelect v-on:select="showProject"
              :selectedValue="projectName"
              :dataList="list"
              :widthData="widthData"></BaseSelect>
            <div class="lis-login">
                <div @click="login" class="btnlogin">{{$t("Login")}}/</div>
                <div @click="register" class="btnregister">{{$t("Register")}}</div>
            </div>
        </div>
    </header>
</template>

<script>
import BaseSelect from '../../../components/xiala'
import { mapState,mapMutations } from 'vuex'
import axios from 'axios'
import  Vue from 'vue'
Vue.prototype.$list = '11' 
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
        num:this.$store.state.lists,
        loginvalue:true
      }
    },
    mounted(){

    },
    methods:{
      showProject (){
            var params = new URLSearchParams();
            let token = localStorage.token
            params.append('language', this.projectName.key);
            params.append('token', token);
            let that = this;
            axios({
			url:' http://www.nailfuture.com/Userapi/currencyList',
			method: 'post',
			data: params,
            })
            .then(function (res) {
                if (res.data.msg == 'success') {
                     that.$store.commit('getlist',res.data.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      login(){
          let register = document.querySelector('.register-wrap')
          let login = document.querySelector('.login-wrap')
          register.style.display = 'none'
          login.style.display = 'block'
      },
      register(){
          let register = document.querySelector('.register-wrap')
          let login = document.querySelector('.login-wrap')
          register.style.display = 'block'
          login.style.display = 'none'
      }
    },
    computed:{
        m(){
            return this.$store.state.lists
        }
    }
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
            float: right;
            margin-left: 300px;
            font: 18px/34px "华文细黑";
            color: #757575;
                .btnlogin,.btnregister:hover{
                    cursor: pointer;
                }
                .btnlogin{
                    float: left;
                     color: #757575;
                }
                .btnregister{
                    float: left;
                    color: #757575;
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

