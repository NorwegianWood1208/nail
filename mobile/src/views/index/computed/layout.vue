<template>
    <div class="con-layout">
        <div class="layout-top">
            <div class="layout-title">{{$t("Strategic")}}</div>
            <div class="layout-tree">
                <div class="layout-des" ref="layoutdes">
                    <div class="one1">{{$t("Digital")}}</div>
                    <div class="one2">{{$t("ecological")}}</div>
                    <div class="one3">{{$t("institution")}}</div>
                </div>
                <div class="layout-right" ref="layoutright">
                    <div class="one4">{{$t("Recognition")}}</div>
                    <div class="one5">{{$t("Trading")}}</div>
                    <div class="one6">{{$t("Exchange")}}</div>
                </div>
            </div>
        </div>
        <div class="layout-bottom">
            <div class="title">{{$t("layout")}}</div>
            <div class="ul">
                <div class="con">
                    <!-- 第一个模块 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/LO.png" alt="">
                        <!-- zh -->
                        <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("high")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Stock")}}</div>
                                    <div class="swiper-lis">{{$t("NASDAQ")}}</div>
                                    <div class="swiper-lis">{{$t("Tokyo")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- en -->
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("high")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Stock")}}</div>
                                    <div class="swiper-lis">{{$t("NASDAQ")}}</div>
                                    <div class="swiper-lis">{{$t("Tokyo")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- ja -->
                        <swiper  :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("high")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Stock")}}</div>
                                    <div class="swiper-lis">{{$t("NASDAQ")}}</div>
                                    <div class="swiper-lis">{{$t("Tokyo")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 第二个模块 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/imp.png" alt="">
                        <!-- zh -->
                        <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Inauguaration")}}</div>
                                    <div class="swiper-lis">{{$t("Designated")}}</div>
                                    <div class="swiper-lis">{{$t("publicity")}}</div>
                                    <div class="swiper-lis">{{$t("customer")}}</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("programme")}}</div>
                                    <div class="swiper-lis">{{$t("vulenteers")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- en -->
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide style="width=215px;">
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">Inauguaration ceremony of global top-level exchange</div>
                                    <div class="swiper-lis">Designated blockchain landmarks of 20 sovereign countries</div>
                                    <div class="swiper-lis">National  TV publicity </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">Offline customer exchange services among high-end VIP customers around the world</div>
                                    <div class="swiper-lis">NAIL excahnge hall of Eco-hatching programme </div>
                                    
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Implementation")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">NAIL global vulenteers technology training business institute</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- ja -->
                        <swiper  :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">世界最高取引所上場のカード式</div>
                                    <div class="swiper-lis">20個の主権国家設定ブロックチェーン</div>
                                    <div class="swiper-lis">国家レベルテレビの宣伝宣伝</div>
                                    <div class="swiper-lis">オフライン各国の高級</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">vip顧客との交流サービス</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 第三个模块 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/sup.png" alt="">
                        <!-- zh -->
                        <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("Github")}}</div>
                                    <div class="swiper-lis">{{$t("construction")}}</div>
                                    <div class="swiper-lis">{{$t("management")}}</div>
                                    <div class="swiper-lis">{{$t("offline")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- en -->
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">NAIL ecological construction</div>
                                    <div class="swiper-lis">NAIL management on market value</div>
                                    <div class="swiper-lis">NAIL offline exchange club of global VIP</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">Real-time updating of  original code  data of  Github , NAIL business institute is built with offline communication  club ( free of charge for possessing some</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis"> certain quantities).NAIL hatching base , market value management team and multidimensionally build up the world class project.</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- ja -->
                        <swiper  :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">NAIL生態建設</div>
                                    <div class="swiper-lis">NAIL時価管理</div>
                                    <div class="swiper-lis">NAILグローバルvip線の下で交流会</div>
                                    <div class="swiper-lis">githubは、ソースコードの</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">データがリアルタイムで更新の交流サービス</div>
                                    <div class="swiper-lis">され、nail商学院が設立し、nail線下交流会で(一定数量のフリーを保有している)、nailの基地</div>
                                    <div class="swiper-lis"></div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">、nail市の値管理チーム、nailは、全方向性の全面的なな世界最高のプロジェクトを構築する。</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 第四个模块 -->
                    <div class="lis no-magin-r">
                        <img src="../../../assets/imgs/fir.png" alt="">
                        <!-- zh -->
                        <swiper :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("ecol")}}</div>
                                    <div class="swiper-lis">{{$t("Investment")}}</div>
                                    <div class="swiper-lis">{{$t("platform")}}</div>
                                    <div class="swiper-lis">{{$t("Blockchain")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- en -->
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">NAIL ecology entails investment & financing platform,  media publicity platform,  blockchain project hatching platform, exchange, business institute  </div>
    
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">etc . all these engagement of businesses will be conducted on the premise of multi-nation support, therefore, NAIL is the optimal choice.</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">Investment Financing platform </div>
                                    <div class="swiper-lis">National media publicity platform </div>
                                    <div class="swiper-lis">Blockchain project hatching platform</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- ja -->
                        <swiper  :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">所有这些业务的参与都需要多个国家相互支持为前提，而NAIL就是最好的选择。ナイル生态系は、投资プラットフォーム、メディアの宣伝プラッ</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">トフォーム取引所、商业学院など、すべての业务の参加には、复数の国の相互援助を前提にしており、nailは最高の选択である。</div>
                                    
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                     <div class="swiper-lis">融資プラットフォーム</div>
                                    <div class="swiper-lis">国家レベルのメディアの宣伝プラットフォーム。</div>
                                    <div class="swiper-lis">ブロックチェーン化プラットフォーム</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 五个 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/gre.png" alt="">
                        <swiper :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">20个主权合作国家分别是：日本、韩国、蒙古、美国、新加坡、中国、马来西亚、加拿大、印度、吉尔吉斯斯坦</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">乌兹别克斯坦、哈萨克斯坦、俄罗斯、布里亚特、印尼、越南、泰国、菲律宾、阿塞拜疆、白俄罗斯、英国</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">The 20  sovereign countries are respectively : Japan, Korea, Mongolia, the United States, Singapore, China, Malaysia, Canada, India, kyrgyzstan,</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis"> Uzbekistan, kazakhstan, Russia, Buryatia, Indonesia, Vietnam, Thailand, Philippines, Azerbaijan, Belarus and the United Kingdom.</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <!-- ja -->
                        <swiper :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">20カ国の主権協力国は、日本、韓国、モンゴル、米国、シンガポール、中国、マレーシア、カナダ、インド、キルギスタン、カザフスタン、ロシア、ブリティット、</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Great")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">インドネシア、ベトナム、タイ、フィリピン、アゼルバイジャン、ベラルーシ、英国である</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>

                    <!-- 留个 -->
                    <div class="lis">
                        <img  src="../../../assets/imgs/block.png" alt="">
                        <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">即将建设区块链地标的国家分别是：日本、韩国、蒙古、新加坡、中国、马来西亚、加拿大、吉尔吉斯斯坦、美国、俄罗斯</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">The countries to build up blockchain landmarks are as follows: Japan, Korea, Mongolia, Singapore, China, Malaysia, Canada, kyrgyzstan, the United States</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis"> and Russia.</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">ブロックチェーンを建設する国は日本、韓国、モンゴル、シンガポール、中国、マレーシア、カナダ、キルギスタン、米国、ロシア。</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 七个 -->
                    <div class="lis">
                        <img style="paddingTop:5px;" src="../../../assets/imgs/international.png" alt="">
                        <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("international")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("stribuild")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("international")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("stribuild")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("international")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">この国は、日本、韓国、モンゴル、中国、キルギスタンで行われる。</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>
                    <!-- 八个 -->
                    <div class="lis no-magin-r">
                        <img  src="../../../assets/imgs/mail.png" alt="">
                        <swiper  :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("hatching")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("base")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="mySwiper">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("hatching")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("base")}}</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                        <swiper :options="swiperOption" class="ja">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("hatching")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">ブロックチェーンを建設する国は、日本、中国、キルギスタンで行われる</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                        </swiper>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'IndexLayout',
  data(){
      return {
          swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/

            pagination: {
                    el: '.swiper-pagination',
            },
        }
      }
  },
   updated() {
        let lang = window.localStorage.getItem('language')
        let one1 = document.getElementsByClassName('one1')[0]
        let one2 = document.getElementsByClassName('one2')[0]
        let one4 = document.getElementsByClassName('one4')[0]
        let one5 = document.getElementsByClassName('one5')[0]
        var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var slide = document.querySelectorAll('.mySwiper')
        var ja = document.querySelectorAll('.ja')
        if (lang === 'en') {
            this.$refs.layoutright.style.paddingTop = '15px'
            this.$refs.layoutdes.style.paddingTop = '0px'
            one1.style.marginBottom = '10px'
            one2.style.marginBottom = '20px'
            one4.style.marginBottom = '16px'
            one5.style.marginBottom = '16px'
        //  console.log(one1);
            for (let i = 0; i < zhh.length; i++) {
                zhh[i].style.display = 'none'
            }
            for (let i = 0; i < zh.length; i++) {
                zh[i].style.display = 'none'
            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'block'
            }
            for (let i = 0; i < ja.length; i++) {
                ja[i].style.display = 'none'
            }
        }else if(lang === 'ja'){
            for (let i = 0; i < zh.length; i++) {
                zh[i].style.display = 'none'
            }
            for (let i = 0; i < zhh.length; i++) {
                zhh[i].style.display = 'none'
            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'none'
            }
            for (let i = 0; i < ja.length; i++) {
                ja[i].style.display = 'block'
            }
            one2.style.marginBottom = '20px'
            this.$refs.layoutright.style.paddingTop = '20px'
            this.$refs.layoutdes.style.paddingTop = '10px'
            one1.style.marginBottom = '16px'
            one4.style.marginBottom = '31px'
            one5.style.marginBottom = '32px'
        }else{
            for (let i = 0; i < zh.length; i++) {
                zh[i].style.display = 'block'
            }
            for (let i = 0; i < zhh.length; i++) {
                zhh[i].style.display = 'block'
            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'none'
            }
            for (let i = 0; i < ja.length; i++) {
                ja[i].style.display = 'none'
            }
            this.$refs.layoutright.style.paddingTop = '20px'
            this.$refs.layoutdes.style.paddingTop = '10px'
            one1.style.marginBottom = '20px'
            one2.style.marginBottom = '30px'
            one4.style.marginBottom = '33px'
            one5.style.marginBottom = '30px'
        }
    },
  mounted (){
      let lang = window.localStorage.getItem('language')
      let one1 = document.getElementsByClassName('one1')[0]
      let one2 = document.getElementsByClassName('one2')[0]
      let one4 = document.getElementsByClassName('one4')[0]
      let one5 = document.getElementsByClassName('one5')[0]
      var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var ja = document.querySelectorAll('.ja')
        var slide = document.querySelectorAll('.mySwiper')
      if (lang === 'en') {
         this.$refs.layoutright.style.paddingTop = '15px'
         this.$refs.layoutdes.style.paddingTop = '0px'
         one1.style.marginBottom = '10px'
         one2.style.marginBottom = '20px'
         one4.style.marginBottom = '16px'
         one5.style.marginBottom = '16px'
         for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'none'
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'block'
        }
        for (let i = 0; i < ja.length; i++) {
                ja[i].style.display = 'none'
            }
        //  console.log(one1);
         
      }else if(lang === 'ja'){
            for (let i = 0; i < zhh.length; i++) {
                zhh[i].style.display = 'none'
            }
            for (let i = 0; i < slide.length; i++) {
                slide[i].style.display = 'none'
            }
            for (let i = 0; i < ja.length; i++) {
                ja[i].style.display = 'block'
            }
           one2.style.marginBottom = '20px'
            this.$refs.layoutright.style.paddingTop = '20px'
            this.$refs.layoutdes.style.paddingTop = '10px'
            one1.style.marginBottom = '16px'
            one4.style.marginBottom = '31px'
            one5.style.marginBottom = '32px'
      }else{
        for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'block'
        }
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'none'
        }
        for (let i = 0; i < ja.length; i++) {
            ja[i].style.display = 'none'
        }
        this.$refs.layoutright.style.paddingTop = '20px'
        this.$refs.layoutdes.style.paddingTop = '10px'
        one1.style.marginBottom = '20px'
        one2.style.marginBottom = '30px'
        one4.style.marginBottom = '33px'
        one5.style.marginBottom = '30px'
      }
  }
}
</script>
<style lang="less">
 #app .no-magin-r{
    margin-right: 0;
}
#app .width{
    width: 300px;
}
.con-layout{
    width: 100%;
    height: 2030px;
    box-sizing: border-box;
    background: #fff;
    padding-top: 60px;
    .layout-top{
        height: 436px;
        background: url(../../../assets/imgs/tree2.png) no-repeat 50% 65px;
        background-size: 58px 306px;
        .layout-title{
            width: 350px;
            height: 60px;
            color: #fff;
            background: #4e4e4e;
            text-align: center;
            margin:  0 auto;
            font: 26px/60px Calibri,"微软雅黑";
        }
        .layout-tree{
            width: 100%;
            overflow: hidden;
            padding-top: 30px;
            box-sizing: border-box;
            .layout-des{
                width: 290px;
                height: 300px;    
                float: left;
                padding-top: 20px;
                margin-left: 40px;
                box-sizing: border-box;
                color: #9c9c9c;
                text-align: right;
                font: 24px/32px Calibri,"微软雅黑";
                .one1{
                    color:#9c9c9c;
                    margin-bottom: 40px;
                }
                .one2{
                    color:#9c9c9c;
                     margin-bottom: 60px;
                }
                .one3{
                    color:#9c9c9c;
                }
            }
            .layout-right{
                width: 303px;
                height: 300px;
                float: left;
                padding-top: 60px;
                margin-left: 90px;
                box-sizing: border-box;
                color: #9c9c9c;
                font: 24px/32px Calibri,"微软雅黑";
                .one4{
                    color:#9c9c9c;
                    margin-bottom: 60px;
                }
                .one5{
                    color:#9c9c9c;
                    margin-bottom: 60px;
                }
                .one6{
                    color:#9c9c9c;
                }
            }
        }
    }
    .layout-bottom{
        width: 100%;
        .title{
            padding-left: 40px;
            font:bold 30px/60px "Humnst777";
            margin-bottom: 30px;
        }
        .ul{
            width: 100%;
            .con{
                width: 100%;
                height: 320px;
                padding-left: 10px;
                .swiper-pagination-bullets{
                    // width: 100%;
                    // height: 20px;
                    .swiper-pagination-bullet{
                        // width: 8px;
                        // height: 8px;
                        // padding: 0;
                        margin-right: 0;
                        border-radius: 8px;
                        background: #3d3d3d;
                    }
                    .swiper-pagination-bullet-active{
                        // width: 8px;
                        // height: 8px;
                        // margin: 0;
                        border-radius: 8px;
                        background: #969696;
                    }
                }
                
                .lis{
                    width: 48%;
                    height: 320px;
                    float: left;
                    margin-bottom: 40px;
                    // margin-right: 20px;
                    img{
                        float: left;
                    }
                    .zhh{
                        margin-top: 20px;
                        .swiper-slide{
                            width: 280px;
                            height: 340px;
                            float: left;
                            .swiper-title{
                                height: 76px;
                                font:bold 28px/28px Calibri,"微软雅黑";
                                margin-bottom: 20px;
                            }
                            .swiper-con{
                                font: 24px/24px Calibri,"微软雅黑";
                            }
                        }
                    }
                    .ja{
                        margin-top: 20px;
                        .swiper-slide{
                            width: 280px;
                            height: 341px;
                            float: left;
                            .swiper-title{
                                height: 76px;;
                                font:bold 28px/28px Calibri,"微软雅黑";
                                margin-bottom: 20px;
                            }
                            .swiper-con{
                                font: 24px/24px Calibri,"微软雅黑";
                            }
                        }
                    }
                    .swiper-container{
                        width: 280px;
                        height: 340px;
                        float: left;
                        margin-top: 25px;
                        .swiper-slide{
                            width: 280px;
                            height: 340px;
                            float: left;
                            .swiper-title{
                                height: 90px;
                                font:bold 28px/40px Calibri,"微软雅黑";
                                margin-bottom: 20px;
                                text-align:justify;
                                text-justify:inter-ideograph;
                                word-break:break-all;
                            }
                            .swiper-con{
                                width: 280px;
                                font: 24px/28px Calibri,"微软雅黑";
                                text-align:justify;
                                text-justify:inter-ideograph;
                                word-break:break-all;
                            }
                        }
                    }
                    
                }
            }
        }
    }
}
       
</style>

