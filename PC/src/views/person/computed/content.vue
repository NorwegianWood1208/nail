<template>
    <div class="person-index">
        <div class="person-head">
            <div class="head-left">
                <span class="bili1">{{lock_rate}}</span>
                <span class="bili2">{{valid_rate}}</span>
                <schart
                    class="can" 
                    :canvasId="canvasId"
                    :type="type"
                    :width="width"
                    :height="height"
                    :data="data"
                    :options="options"
                ></schart>
            </div>
            <div class="head-right">
                <div class="data1">
                    <div class="lis">
                        <div class="title">总资产</div>
                        <div class="des">{{list1.total}}</div>
                    </div>
                    <div class="lis">
                        <div class="title">可用</div>
                        <div class="des">{{list1.valid_num}}   </div>
                    </div>
                    <div class="lis">
                        <div class="title">锁定</div>
                        <div class="des">{{list1.lock_num}}     </div>
                    </div>
                </div>
                <div class="data2">
                    <div class="title">解锁方式</div>
                    <div class="lis">
                        <span>√交易平台</span>
                        <input type="text">
                        <button>提交</button>
                    </div>
                    <div class="lis">
                        <span>√交易平台</span>
                        <input type="text">
                        <button>提交</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="person-content">
            <div class="con-title">代币解锁</div>
            <table class="con-con">
                <tr class="thead">
                    <th class="wid">时间</th>
                    <th class="wid">数量</th>
                    <th class="wid">类型</th>
                    <th class="wid">解锁方式</th>
                    <th>钱包地址</th>
                    <th>状态</th>
                </tr>
                <tr v-for="(value,index) in datalist" :key="index">
                    <td>{{value.create_time}}</td>
                    <td class="wid">{{value.num}}</td>
                    <td class="wid">{{value.status_name}}</td>
                    <td class="wid">{{value.unlock_name}}</td>
                    <td>{{value.address}}</td>
                    <td>已发放</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import Schart from 'vue-schart';
import axios from 'axios'
export default {
    name:'PersonIndex',
     data() {
        return {
            canvasId: 'myCanvas',
            type: 'ring',
            width: 204,
            height: 204,
            data: [
                { name: '可用', value: 10},
                { name: '锁定', value: 20}
            ],
            options: {
                bgColor: '#fff', 
                showValue:false ,            // 默认背景颜色 #e3e3e3
                titlePosition: 'bottom',           // 图表标题位置: top / bottom
                colorList: ['#ff5757', '#ffd739'],    // 环形图颜色列表
                radius: 100,                    // 环形图外圆半径
                innerRadius: 40                // 环形图内圆半径
            }
           ,
           list:[],
           list1:[],
        }
    },
    computed:{
        datalist(){
            if (this.$store.state.lists.length === 0) {
                return  this.list
            } else {
                return this.$store.state.lists
            }
        },
        lock_rate(){
            return (this.list1.lock_rate*100).toFixed(2)+'%'
        },
        valid_rate(){
            return (this.list1.valid_rate*100).toFixed(2)+'%'
        }
    },
    components:{
        Schart,
        
    },
    methods: {
        // changeData(){
        //     console.log(this.$store.state.bili1);
            
        //     this.$set(this.data, 1, {name:'可用',value:0.36});
        //     this.$set(this.data, 1, {name:'可用',value:0.36});
        // },
    //   gettoken(){
    //       let that = this
    //         var params = new URLSearchParams();
    //         params.append('email', 'zhangmeilide@126.com');
    //         params.append('pwd', 'liangchao00');
    //         axios({
	// 		url:' http://www.nailfuture.com/Userapi/dologin',
	// 		method: 'post',
	// 		data: params,
	// 		})
    //         .then(function (res) {
                
    //             if (res.data.msg == 'success') {
    //                 window.localStorage.setItem('token',res.data.data.token)
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //   },
      getdata(){
            var params = new URLSearchParams();
            let token = localStorage.token
            let lan = localStorage.language?localStorage.language:'zh'
            params.append('language', lan);
            params.append('token', token);
            let that = this;
            axios({
			url:' http://www.nailfuture.com/Userapi/currencyList',
			method: 'post',
			data: params,
            })
            .then(function (res) {
                if (res.data.msg == 'success') {
                    that.list = res.data.data
                    // console.log(that.list); 
                }
            })
            .catch(function (error) {
                console.log(error);
            });
      },
      getdata1(){
            var params = new URLSearchParams();
            let token = localStorage.token
            let lan = localStorage.language
            params.append('token',  token);
            let that = this;
            axios({
			url:' http://www.nailfuture.com/Userapi/assetsInfo',
			method: 'post',
			data: params,
            })
            .then(function (res) {
                if (res.data.msg == 'success') {
                    that.list1 = res.data.data
                    that.$set(that.data, 0, {name:'锁定',value:res.data.data.lock_rate});
                    that.$set(that.data, 1, {name:'可用',value:res.data.data.valid_rate});
                }
            })
            .catch(function (error) {
                console.log(error);
            });
      },
    },
    mounted () {
        // this.gettoken()
        this.getdata()
        this.getdata1()
        // this.changeData()   
    }
}
</script>
<style lang="less">
    #app .wid{
        width: 180px;
    }
    .person-index{
        width: 100%;
        height: 2500px;
        padding: 0 60px 0 70px;
        background: #fff;
        .person-head{
            width: 100%;
            overflow: hidden;
            padding-top: 65px;
            border-bottom: 1px solid #b8b8b8;
            .head-left{
                width: 433px;
                height: 348px;
                float: left;
                position: relative;
                // background: teal;
                .can{
                    height: 204px;;
                }
                .bili1{
                    position: absolute;
                    left: 240px;
                    top: 140px;
                    color: #fff;
                }
                .bili2{
                    position: absolute;
                    left: 140px;
                    top: 60px;
                    color: #fff;
                    transform: rotate(30deg);
                }
            }
            .head-right{
                width: 936px;
                height: 348px;
                float: left;
                .data1{
                    width: 100%;
                    padding-left: 70px;
                    box-sizing: border-box;
                    height: 113px;
                    .lis{
                        width: 275px;
                        height: 100%;
                        float: left;
                        .title{
                            color: #2f2f2f;
                            font: 24px/60px "微软雅黑";
                        }
                        .des{
                            color: #3b3b3b;
                            font: 24px/52px "微软雅黑";
                        }
                    }
                }
                .data2{
                    width: 100%;
                    height: 234px;
                    padding-left: 70px;
                    padding-top: 30px;
                    color: #2f2f2f;
                    box-sizing: border-box;
                    .title{
                        font: 20px/64px "微软雅黑";
                    }
                    .lis{
                        width: 533px;
                        height: 31px;
                        padding-left: 10px;
                        margin-bottom: 20px;
                        font: 16px/31px "微软雅黑";
                        input{
                            width: 328px;
                            height: 30px;;
                            border: none;
                            margin-left: 10px;
                            margin-top: -2px;
                            background: #f0f2f5;
                        }
                        button{
                            width: 52px;
                            height: 26px;;
                            margin-top: -2px;
                            margin-left: 27px;
                            border-radius: 12px;
                        }
                    }
                }
            }
        }
        .person-content{
            width: 100%;
            height: 1600px;
            .con-title{
                text-indent: 10px;
                font: bold 18px/76px "微软雅黑";
            }
            .con-con{
                width: 1170px;
                // height: 310px;
                margin-left: 74px;
                box-sizing: border-box;
                border: none;
                .thead{
                    height: 40px;
                    border-bottom: 2px solid #3a3a3a;
                    th{
                        height: 51px;;
                        // text-align: center;
                        border: none;
                        font: 16px/51px "微软雅黑";
                    }
                }
                td{
                    height: 42px;;
                    border: none;
                    // text-align: center;
                }
            }
        }
    }
</style>
