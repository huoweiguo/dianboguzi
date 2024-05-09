<template>
  <div class="concept-contanier">
    <div class="concept-bg">
    </div>
    <DHeader></DHeader>
    <div class="concept-left">
      <ul>
        <li @click="setType(1)" class="left-item" :class="{active:type === 1}">柄图</li>
        <li @click="setType(2)" class="left-item" :class="{active:type === 2}">电子谷子</li>
        <li @click="setType(3)" class="left-item" :class="{active:type === 3}">痛柜</li>
      </ul>
    </div>
    <div class="concept-right">
      <div v-show="type === 2" class="concept-right-dzgz">
        <img class="right-dzgz-img1" src="../../public/concept_dzgz1.png" alt="">
        <div class="right-dzgz-box">
          <img class="right-dzgz-img2" src="../../public/concept_dzgz2.png" alt="">
          <div class="right-dzgz-text">
            在平台抽卡可以获得谷美通过和已合成的电子谷子结合，装饰自己的电子谷子。
          </div>
        </div>
      </div>
      <div v-show="type === 3" class="concept-right-tg">
        <div class="right-tg-text">
          平台给每位居民准备了痛柜进行展示可以根据自己的喜好装扮属于自己独一无二的痛柜。
        </div>
        <img class="right-tg-img" src="../../public/concept_tg.png" alt="">
      </div>
    </div>

    <!--mobile-->
  <div class="index-m-container">
    <div class="index-m-content">
      <div class="index-m-menu">
        <img src="../../public/menu-silder.png" class="menu-silder" @click="hideSlider(true)" />
        <div class="login-m">
          <span>登录 | 注册</span>
        </div>
      </div>
    </div>

    <!--menu mask-->
    <div class="menu-mask" :class="showSlider ? 'slider-action' : ''">
      <div class="menu-close"><img src="../../public/close.png" @click="hideSlider(false)" /></div>
      <ul class="menu-list">
        <li v-for="item in mobileMenu" :key="item.intro">
          <i>{{ item.title }}</i>
          <span>{{ item.intro }}</span>
          <div>{{ item.desc }}</div>
        </li>
      </ul>

      <div class="mask-platfrom">
        <img src="../../public/vector.png" alt="bilibili"/>
        <img src="../../public/xinlang.png" alt="新浪微博"/>
        <img src="../../public/xiaohongshu.png" alt="小红书"/>
        <img src="../../public/wechat.png" alt="微信"/>
        <img src="../../public/douyin.png" alt="抖音"/>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive} from 'vue';
  const type = ref<number>(2)
  const showSlider = ref<boolean>(false)

  const mobileMenu = reactive([
    { title: '首页', intro: 'DIANBO GOODS', desc: '' },
    { title: '概念展示', intro: 'CONCEPTS', desc: '谷子、谷模与谷美' },
    { title: '新闻', intro: 'NEWS', desc: '线上与线下的最新活动' },
    { title: '兑换码', intro: 'TOKENS', desc: '来兑换你最新获得的谷子吧' },
    { title: '联系我们', intro: 'CUSTOMER SERVICE', desc: '让我们听到您的声音' }
  ])
  const hideSlider = (status: boolean) => {
    showSlider.value = status
  }
  const setType = (num: number) => {
    type.value = num
  }
</script>

<style lang="scss" scoped>
.concept-contanier {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(45deg, #b2d6fa, #f8d3f8);
  position: relative;
  .concept-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    min-height: 100%;
    background: url('../../public/concept.png') no-repeat 100% 100%;
    background-size: 100% 100%;
  }
  .concept-left{
    position: absolute;
    left: 1.1rem;
    top: 1.7rem;
    .left-item{
      text-align: center;
      font-size: 0.36rem;
      margin-bottom: 1rem;
      cursor: pointer;
      &:hover{
        color:#6960A7;
      }
    }
    .active{
      color:#6960A7;
    }
  }
  .concept-right{
    position: relative;
    width: 78%;
    margin-left: 22%;
  }
  .concept-right-dzgz{
    display: flex;
  }
  .right-dzgz-img1{
    width: 4rem;
    max-width: 4.87rem;
    height: 7.56rem;
  }
  .right-dzgz-box{
    width: 55%;
    margin-left: 0.1rem;
    margin-bottom: 0.3rem;
  }
  .right-dzgz-img2{
    width: 6.5rem;
    height: 6.5rem;
  }
  .right-dzgz-text{
    width: 6.3rem;
    height: 1.72rem;
    border: 0.01rem solid #333;
    margin-top: -0.6rem;
    background: #fff;
    font-size:0.3rem;
    padding: 0.40rem 0.40rem;
    box-sizing: border-box;
    line-height: 1.5;
  }
  .concept-right-tg{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right-tg-text{
    width: 8.9rem;
    height: 1.72rem;
    border: 0.01rem solid #333;
    background: #fff;
    font-size:0.3rem;
    padding: 0.40rem 0.40rem;
    box-sizing: border-box;
    line-height: 1.5;
  }
  .right-tg-img{
    width: 2.85rem;
    height: 5.88rem;
    margin-top: 0.5rem;
  }
}

.index-m-container {
  display: none;
  padding-top: 0.5rem;
  height: calc(100vh - 0.5rem);
  width: 100%;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  .index-m-content {
    padding: 0.2rem;
    box-sizing: border-box;
    .menu-silder {
      display: block;
      height: 0.28rem;
    }
    .index-m-menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.6rem;
      .login-m {
        font-size: 0.24rem;
        background-color: rgba(255, 255, 255, 0.3);
        width: 1.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.3rem;
        color: #39404a;
      }
    }
    .mask-text {
      position: fixed;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 1;
    }
    .m-logo {
      position: absolute;
      left: 0.2rem;
      top: 2rem;
      height: 1.2rem;
    }
    .index-m-image {
      position: fixed;
      right: 5%;
      top: 50%;
      height: 45vh;
      transform: translate(0, -50%);
      z-index: 10;
      img {
        height: 100%;
      }
      .m-text {
        position: absolute;
        height: 1rem;
        left: -1.3rem;
        bottom: 1.3rem;
      }
      .m-layer {
        position: absolute;
        right: 0;
        top: 45vh;
        width: 4.8rem;
      }
    }
    .index-m-download {
      position: absolute;
      bottom: 0.3rem;
      left: 0.2rem;
      img {
        display: block;
        margin: 0.1rem 0;
        width: 1rem;
      }
    }
  }
  .menu-mask {
    position: fixed;
    width: 50%;
    top: 0;
    left: -50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
    padding: 0.2rem;
    box-sizing: border-box;
    animation: leave 0.5s;
    .menu-list {
      li {
        margin: 0.2rem 0;
        i {
          display: inline-block;
          color: #384e6f;
          font-size: 0.3rem;
          height: 0.4rem;
          line-height: 0.4rem;
          background-color: #fff;
          padding: 0.06rem 0.15rem;
          border-radius: 0.06rem;
        }
        span {
          display: block;
          font-size: 0.28rem;
          color: #fff;
          font-family: PingFang SC;
          margin: 0.15rem 0;
        }
        div {
          font-size: 0.22rem;
          color: #fff;
        }
      }
    }
    .mask-platfrom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      display: flex;
      background-color: #000;
      padding: 0.15rem;
      justify-content: space-around;
      box-sizing: border-box;
      img {
        height: 0.4rem;
      }
    }
  }
  .slider-action {
    left: 0;
    animation: move 0.5s;
  }
}

@keyframes move {
  0% {
    left: -50%;
  }
  100% {
    left: 0;
  }
}

@keyframes leave {
  0% {
    left: 0;
  }
  100% {
    left: -50%;
  }
}

@media screen and (max-width: 750px){
  .concept-contanier {
    .concept-bg{
      display: none;
    }
    .concept-left{
      display: none;
    }
    .concept-right{
      display: none;
    }
  }
  .index-m-container{
    display: block;
  }
  
}
</style>
