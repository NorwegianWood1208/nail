<template>
  <!--下拉单选框-->
  <div class="base-select" @click="showDataList" v-bind:style="{width: widthData}">
      <div class="sub-selected-value">
        {{lange.value}}<!--显示选择的值-->
        <div class="sub-select-list" v-bind:style="{width: widthData}" v-if="showData">
          <div class="sub-select-item" v-for="(item, index) in dataList" :key="index" @click.stop="select(item, index)">
            {{item.value}}
          </div>
        </div>
      </div>
      <img src="../assets/imgs/xiala.png" alt="">
  </div>
</template>
<style lang="less">
  .base-select:hover{
    cursor: pointer;
  }
  .base-select {
    width: 80px;
    height: 49px;;
    position: relative;
    top: -7px;
    float: right;
    // border: 1px solid;
    // height: 25px;
    color: #969696;
    font-size: 18px;
    //width: 160px;
    &:after {
      position: absolute;
      top: 50%;
      right: 2px;
      transform: translateY(-50%);
      content: '';
      width: 0;
      // border-top: 5px solid black;
      // border-left: 4px solid transparent;
      // border-right: 4px solid transparent;
      height: 0;
    }
      .sub-selected-value {
        position: absolute;
        top: 15px;
        .sub-select-list:hover{
          cursor: pointer;
        }
        .sub-select-list {
          position: absolute;
          top: 33px;
          background: #3d3d3d;
          //width: 160px;
          // box-shadow: 1px 1px 1px 1px #D9D9D9;
          z-index: 9;
          .sub-select-item:hover{
            color: #fff;
          }
          .sub-select-item {
            width: auto;
            // min-width: 7.25rem;
            // height: 20px;
            line-height: 40px;
            position: relative;
            text-align: left;
            img {
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(-0.1rem, -50%);
              width: .8125rem;
              height: .625rem;
            }
          }
        }
      }
      img{
          width: 10px;
          height: 5px;
          position: absolute;
          right: 20px;;
          top: 22px;
      }
  }
</style>
<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        showData: false,
        lange:{
          key:'zh',
          value:'中文'
        }
      }
    },
    props: {
      dataList:Array,
      selectedValue: Object,//传回父组件的选择值
      widthData:{
        type: String,
        default: "160px"
      }
    },
    methods: {
      showDataList(){
        this.showData=!this.showData
      },
      select(item,index){
        this.showData=false;
        this.selectedValue.key=item.key;
        this.selectedValue.value=item.value;
        
        window.localStorage.setItem('language', item.key)
        window.localStorage.setItem('lang', item.value)
        this.$emit('select');
        
        // if (this.selectedValue.value) {
        //   this.$refs.def.style.display = 'none';
        // }
        let lan = window.localStorage.getItem('lang')
        let lang = window.localStorage.getItem('language')
        this.$i18n.locale = lang
        // console.log(this.$i18n.locale);
        this.lange.value = lan
      },
    },
    mounted(){
      this.$i18n.locale = window.localStorage.getItem('language')?window.localStorage.getItem('language'):this.lange.key

      this.lange.value = window.localStorage.getItem('lang')?window.localStorage.getItem('lang'):this.lange.value 
    },
    watch: {
      lang(aaa,bbb){
        console.log(aaa,bbb);
        
      }
    }
  }
</script>