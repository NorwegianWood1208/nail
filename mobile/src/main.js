import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import echarts from 'echarts'
import './assets/reset.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts 
import VueI18n from 'vue-i18n'
import i18n from './lang/index'  
import 'lib-flexible/flexible.js'
// import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VueI18n);
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
}
setHtmlFontSize();
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
