<template>
    <div class="login-wrap">
        <div class="login">
            <transition name="fade">
                <div ref="kuang" v-if="onoff2" class="kuang">{{messages}}</div>
            </transition>
            <div @click="guan" class="guan">x</div>
            <div class="title">{{$t("Login")}}</div>
            <div class="eamil">{{$t("eamil")}}</div><span class="tishi">{{this.errorText}}</span>
            <input class="eamil1"  @change="handiphone" v-model="iphone" type="text">
            <div class="eamil">{{$t("password")}}</div><span class="tishi">{{this.errorText1}}</span>
            <input class="eamil1"  @change="handpassword" v-model="password" type="password">
            <div class="remove">{{$t("forget_the_password")}}</div>
            <div class="btn" @click="login">{{$t("Login")}}</div>
            <div class="btnregister" @click="register">{{$t("Register")}}</div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return {
            iphone:'',
            password:'',
            errorText:"",
            errorText1:'',
            messages:'',
            onoff2:false
        }
    },
    methods: {
        handiphone(){
            var pwdReg =  /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
            if(this.iphone==""){
                this.errorText = '邮箱不能为空'
            }else if(!pwdReg.test(this.iphone)){
                 this.errorText = '请输入正确的邮箱'
            }else{
                this.errorText = ''
            }
        },
        handpassword(){
             var pwdReg = /^[A-Za-z0-9_-]{6,18}$/;
            if(this.password==""){
                this.errorText1 = '密码不能为空'
                
            }else if(!pwdReg.test(this.password)){
                 this.errorText1 = '密码为6-18位英文字母或数字'
            }else{
                this.errorText1 = ''
            }
        },
        guan(){
            let login = document.querySelector('.login-wrap')
            login.style.display = 'none'
        },
        register(){
            let login = document.querySelector('.login-wrap')
            login.style.display = 'none'
            let register = document.querySelector('.register-wrap')
            register.style.display = 'block'
        },
        login(){
            var params = new URLSearchParams();
            params.append('email', this.iphone);
            params.append('pwd', this.password);
            this.iphone = '';
            this.password = ''
            var that = this;
            let url = 'http://www.nailfuture.com/Userapi/dologin'
            axios.post(url, params)
                .then(function (res) {
                    console.log(res);
                    let lang = localStorage.language
                     that.onoff2= true
                     console.log(that.onoff2,lang);
                     
                    if (lang == 'zh') {
                        console.log(res.data);
                            if(res.data.ret == 1001){
                                that.messages = '邮箱为空'
                            }else if(res.data.ret == 1002){
                                that.messages = '密码为空'
                            }else if(res.data.ret == 1003){
                                that.messages = '邮箱格式不正确'
                            }else if(res.data.ret == 1004){
                                that.messages = '此账号已经禁用'
                            }else if(res.data.ret == 1005){
                                that.messages = '账号或密码错误'
                            }else if(res.data.ret == 1006){
                                that.messages = '系统繁忙'
                            }else if(res.data.ret == 0){
                                that.messages = '注册成功'
                                setTimeout(function(){
                                        that.onoff2= false
                                        let register = document.querySelector('.register')
                                        register.style.display = 'none'
                                        let login = document.querySelector('.login')
                                        login.style.display = 'block'
                                },2000)
                            }
                        } else if(lang == 'en') {
                            if(res.data.ret == 1001){
                                that.messages = 'Mailbox is empty'
                            }else if(res.data.ret == 1002){
                                that.messages = 'The password is empty'
                            }else if(res.data.ret == 1003){
                                that.messages = 'Incorrect mailbox format'
                            }else if(res.data.ret == 1004){
                                that.messages = 'This account has been disabled.'
                            }else if(res.data.ret == 1005){
                                that.messages = 'Account or password error'
                            }else if(res.data.ret == 1006){
                                that.messages = 'Busy system'
                            }else if(res.data.ret == 0){
                                that.messages = 'login was successful'
                            }
                        }else if(lang == 'ja') {
                            if(res.data.ret == 1001){
                                that.messages = 'ポストは空'
                            }else if(res.data.ret == 1002){
                                that.messages = 'パスワードは空'
                            }else if(res.data.ret == 1003){
                                that.messages = 'メールのフォーマットが正しくない'
                            }else if(res.data.ret == 1004){
                                that.messages = 'このアカウントはすでに使用禁止です'
                            }else if(res.data.ret == 1005){
                                that.messages = 'アカウントまたはパスワードのエラー'
                            }else if(res.data.ret == 1006){
                                that.messages = 'システムが忙しい'
                            }else if(res.data.ret == 0){
                                that.messages = '登録成功'
                            }
                        }
                        if (res.data.ret == 0) {
                             setTimeout(function(){
                                    that.onoff2= false
                                    that.$router.push({'path':'/person'})
                                },2000)
                        } else {
                            setTimeout(function(){
                                that.onoff2= false
                            },2000) 
                        }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
</script>
<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .login-wrap{
        width: 100%;
        height: 3000px;
        background: rgba(59, 59, 59, .8);
        position: absolute;
        z-index: 15;
        display: none;
        .login{
            width: 594px;
            height: 588px;
            position: absolute;
            left: 10%;
            top: 284px;
            // margin: 50 auto;
            z-index: 16;
            background: #252525 url(../../../assets/imgs/NAIL.png) no-repeat center top;
            background-size: 506px 152px;
            .kuang{
                width: 40%;
                height: 100px;
                text-align: center;
                font: 16px/100px "微软雅黑";
                background: #fff;
                position: absolute;
                top: 40%;
                left: 30%;
            }
            .title{
                font: 50px/130px Calibri,"微软雅黑";
                color: #fff;
                padding-top: 22px;
                text-align: center;
            }
            .eamil{
                float: left;
                font: 18px/60px Calibri,"微软雅黑";
                color: #7e7e7e;
                padding-left: 54px;
            }
            .tishi{
                float: left;
                margin-left: 20px;
                font: 12px/60px "微软雅黑";
                color: #fff;
            }
            .eamil1{
                height: 50px;
                width: 486px;;
                box-sizing: border-box;
                margin-left: 54px;
                font: 22px/50px "微软雅黑";
                background: #363636;
            }
            .remove{
                padding-left: 54px;
                color: #6c6c6c;
                font: 14px/66px "微软雅黑";
            }
            .btn{
                font: 28px/80px "微软雅黑";
                color: #fff;
                text-align: center;
            }
            .btn:hover,.btnregister ,.remove{
                cursor: pointer;
            }
            .btnregister{
                width: 90px;
                height: 46px;
                color: #7e7e7e;
                margin: 0 auto;
                text-align:center; 
                font: 14px/46px "微软雅黑";
                border-top: 2px solid #ff5757;
            }
            .guan:hover{
                cursor: pointer;
            }
            .guan{
                color: #fff;
                position: absolute;
                right: 40px;
                top: 20px;
                font: 36px/48px "微软雅黑";
            }
        }
    }
</style>
