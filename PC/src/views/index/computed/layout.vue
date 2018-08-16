<template>
    <div class="con-layout">
        <div class="layout-top">
            <div class="layout-pic"></div>
            <div class="layout-des" ref="des">
                <div class="one" ref="one1">{{$t("Digital")}}</div>
                <div class="one"  ref="one2">{{$t("ecological")}}</div>
                <div class="one"  ref="one3">{{$t("institution")}}</div>
            </div>
            <img class="pic1" src="../../../assets/imgs/svg1.png" alt="">
            <div class="layout-title">{{$t("Strategic")}}</div>
            <img class="pic2" src="../../../assets/imgs/svg2.png" alt="">
            <div class="layout-right">
                <div class="one"  ref="one4">{{$t("Recognition")}}</div>
                <div class="one"  ref="one5">{{$t("Trading")}}</div>
                <div class="one"  ref="one6">{{$t("Exchange")}}</div>
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
                        <div class="ja" >
                            <div class="swiper-title">{{$t("high")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">{{$t("Stock")}}</div>
                                <div class="swiper-lis">{{$t("NASDAQ")}}</div>
                                <div class="swiper-lis">{{$t("Tokyo")}}</div>
                            </div>
                        </div>
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
                                    <div class="swiper-lis">オフライン各国の高級vip顧客と</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">の交流サービス</div>
                                    <!-- <div class="swiper-lis"></div>
                                    <div class="swiper-lis"></div> -->
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
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
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
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    
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
                                    <div class="swiper-lis">NAIL ecology entails investment & financing platform,  media publicity platform,  blockchain project hatching platform, exchange, business institute etc,. all </div>
    
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("supported")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">these engagement of businesses will be conducted on the premise of multi-nation support, therefore, NAIL is the optimal choice.</div>
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
                                    <div class="swiper-lis">所有这些业务的参与都需要多个国家相互支持为前提，而NAIL就是最好的选择。ナイル生态系は、投资プラットフォーム、メディアの宣伝プラットフォーム</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
                                    <div class="swiper-lis">取引所、商业学院など、すべての业务の参加には、复数の国の相互援助を前提にしており、nailは最高の选択である。</div>
                                    <div class="swiper-lis">融資プラットフォーム</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="swiper-title">{{$t("Superior")}}</div>
                                 <div class="swiper-con">
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
                        <img src="../../../assets/imgs/block.png" alt="">
                        <swiper :options="swiperOption" class="zhh">
                            <swiper-slide>
                                <div class="swiper-title">{{$t("landmark")}}</div>
                                <div class="swiper-con">
                                    <div class="swiper-lis">{{$t("follows")}}</div>
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
                        <div class="ja">
                             <div class="swiper-title">{{$t("landmark")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">ブロックチェーンを建設する国は日本、韓国、モンゴル、シンガポール、中国、マレーシア、カナダ、キルギスタン、米国、ロシア。</div>
                            </div>
                        </div>
                    </div>
                    <!-- 七个 -->
                    <div class="lis">
                        <img src="../../../assets/imgs/international.png" alt="">
                        <swiper :options="swiperOption" class="zhh">
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
                        <div class="ja">
                            <div class="swiper-title">{{$t("international")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">この国は、日本、韓国、モンゴル、中国、キルギスタンで行われる。</div>
                            </div>
                        </div>
                    </div>
                    <!-- 八个 -->
                    <div class="lis no-magin-r">
                        <img src="../../../assets/imgs/mail.png" alt="">
                        <swiper :options="swiperOption" class="zhh">
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
                        <div class="ja">
                            <div class="swiper-title">{{$t("hatching")}}</div>
                            <div class="swiper-con">
                                <div class="swiper-lis">ブロックチェーンを建設する国は、日本、中国、キルギスタンで行われる</div>
                            </div>
                        </div>
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
      if (lang === 'en') {
        var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var slide = document.querySelectorAll('.mySwiper')
        var ja = document.querySelectorAll('.ja')
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
         this.$refs.des.style.paddingTop = '53px'
         console.log(this.$refs.one1);
         
         this.$refs.one1.style.marginBottom = '20px'
         this.$refs.one4.style.marginBottom = '40px'
      }else if(lang === 'ja'){
          var zh = document.querySelectorAll('.zh')
          var zhh = document.querySelectorAll('.zhh')
          var ja = document.querySelectorAll('.ja')
           var slide = document.querySelectorAll('.mySwiper')       
            console.log(zh);
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
            this.$refs.one1.style.marginBottom = '40px'
          this.$refs.one3.style.marginBottom = '75px'
          this.$refs.one2.style.marginBottom = '50px'
          this.$refs.des.style.paddingTop = '70px'
      }else{
          var zh = document.querySelectorAll('.zh')
          var zhh = document.querySelectorAll('.zhh')
          var ja = document.querySelectorAll('.ja')
           var slide = document.querySelectorAll('.mySwiper')
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
         this.$refs.des.style.paddingTop = '83px'
         this.$refs.one1.style.marginBottom = '35px'
         this.$refs.one2.style.marginBottom = '75px'
         this.$refs.one4.style.marginBottom = '75px'
      }
  },
  mounted (){
      let lang = window.localStorage.getItem('language')
      if (lang === 'en') {
        var zh = document.querySelectorAll('.zh')
        var zhh = document.querySelectorAll('.zhh')
        var ja = document.querySelectorAll('.ja')
        var slide = document.querySelectorAll('.mySwiper')
        for (let i = 0; i < zhh.length; i++) {
            zhh[i].style.display = 'none'
        }
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'none'
        }

        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = 'block'
        }
         this.$refs.des.style.paddingTop = '53px'
         this.$refs.one1.style.marginBottom = '20px'
         this.$refs.one4.style.marginBottom = '40px'
      }else if(lang === 'ja'){
          var zh = document.querySelectorAll('.zh')
          var zhh = document.querySelectorAll('.zhh')
          var ja = document.querySelectorAll('.ja')
           var slide = document.querySelectorAll('.mySwiper')       
            console.log(zh);
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
            this.$refs.one1.style.marginBottom = '40px'
          this.$refs.one3.style.marginBottom = '75px'
          this.$refs.one2.style.marginBottom = '50px'
          this.$refs.des.style.paddingTop = '70px'
      }else{
          var zh = document.querySelectorAll('.zh')
          var zhh = document.querySelectorAll('.zhh')
          var ja = document.querySelectorAll('.ja')
           var slide = document.querySelectorAll('.mySwiper')
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
         this.$refs.des.style.paddingTop = '83px'
         this.$refs.one1.style.marginBottom = '35px'
         this.$refs.one2.style.marginBottom = '75px'
         this.$refs.one4.style.marginBottom = '75px'
      }
  }
}
</script>
<style lang="less">
 #app .no-magin-r{
    margin-right: 0;
}
.con-layout{
    width: 100%;
    padding: 0 60px;
    box-sizing: border-box;
    background: #fff;
    .layout-top{
        position: relative;
        height: 436px;
        .pic1{
            position: absolute;
            top: 120px;
            left: 451px;
        }
        .pic2{
            position: absolute;
            top: 120px;
            left: 866px;
        }
        .layout-pic{
            width: 330px;
            height: 425px;
            position: absolute;
            top: -38px;
            left: 84px;
            background: url(../../../assets/imgs/pic.png) no-repeat;
        }
        .layout-des{
            width: 303px;
            height: 378px;
            padding-top: 83px;
            box-sizing: border-box;
            background: rgba(120, 120, 126, .46);
            // opacity: 0.46;
            padding-left: 10px;
            position: absolute;
            top: 30px;
            left: 100px;
            z-index: 11;
            font: 24px/32px Calibri;
            .one{
            
                // position: absolute;
                // z-index: 12;
                color: #fff;
                margin-bottom: 55px;
            }
        }
        .layout-des1{
            width: 303px;
            height: 378px;
            padding-top: 83px;
            box-sizing: border-box;
            // opacity: 0.46;
            padding-left: 10px;
            position: absolute;
            top: 30px;
            left: 100px;
            z-index: 11;
            font: 24px/32px Calibri;
            .one{
            
                position: absolute;
                z-index: 12;
                color: #fff;
                margin-bottom: 55px;
            }
        }
        .layout-title{
            width: 350px;
            height: 60px;
            color: #fff;
            background: #4e4e4e;
            position: absolute;
            top: 200px;
            left: 516px;
            text-align: center;
            font: 26px/60px "Humnst777";
        }
        .layout-right{
            width: 355px;
            height: 378px;
            padding-top: 83px;
            box-sizing: border-box;
            position: absolute;
            top: 23px;
            right: 70px;
            color: #78787e;
            font: 24px/32px Calibri;
            .one{
                margin-bottom: 75px;
            }
        }
    }
    .layout-bottom{
        width: 100%;
        .title{
            font: 30px/90px "Humnst777";
            margin-bottom: 50px;
        }
        .con{
            overflow: hidden;
            padding-left: 44px;
            .swiper-pagination-bullet{
                background: #3d3d3d;
            }
            .swiper-pagination-bullet-active{
                background: #969696;
            }
            .lis{
                width: 245px;
                height: 280px;
                float: left;
                overflow: hidden;
                margin-right: 100px;
                img{
                    float: left;
                }
                .zh{
                    width: 213px;
                    height: 280px;
                    float: left;
                    display: none;
                    .swiper-title{
                        font: 16px/28px "Humnst777";
                        margin-bottom: 20px;
                    }
                    .swiper-con{
                        font: 14px/24px "Humnst777";
                    }
                }
                .ja{
                    width: 213px;
                    height: 220px;
                    float: left;
                    display: none;
                    .swiper-title{
                        font: 16px/28px "Humnst777";
                        margin-bottom: 20px;
                    }
                    .swiper-con{
                        font: 14px/24px "Humnst777";
                    }
                }
                .swiper-slide{
                    height: 220px;
                    float: left;
                    overflow: hidden;
                    .swiper-title{
                        font: 16px/28px "Humnst777";
                        margin-bottom: 20px;
                    }
                    .swiper-con{
                        width: 212px;
                        overflow: hidden;
                        font: 14px/24px "Humnst777";
                        .swiper-lis{
                            width: 214px;
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
       
</style>

