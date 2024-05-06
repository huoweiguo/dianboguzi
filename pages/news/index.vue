<template>
  <div class="news-contanier">
    <div class="concept-bg">
    </div>
    <div class="header-container">
      <div class="logo-mobile">
        <img src="../../public/logo.png" class="电波谷子"/>
        <span>登录/注册</span>
      </div>
      <ul>
        <li>首页</li>
        <li>概率展示</li>
        <li>新闻</li>
        <li>兑换码</li>
        <li>联系我们</li>
      </ul>
      <span></span>
    </div>
    <div class="news-left">
      <ul>
        <li @click="setType(1)" class="left-item">最新</li>
        <li @click="setType(2)" class="left-item">线上活动</li>
        <li @click="setType(3)" class="left-item">线下活动</li>
        <li @click="setType(4)" class="left-item">加入我们</li>
      </ul>
    </div>
    <div class="news-right">
      <div v-show="type===1" class="news-right-latest">
        <div v-show="!show" class="latest-home">
          <img class="latest-img" src="../../public/news.png" alt="">
          <ul>
            <li @click="pushUrl()" v-for="(item,index) in 3" :key="index" class="latest-item">
              <span>cp30参展决定！活动详情展示。</span>
              <span class="latest-item-date">2024/01/05</span>
            </li>
          </ul>
          <p @click="setShow(true)" class="latest-more">更多...</p>
        </div>
        <div v-show="show" class="latest-list">
          <ul>
            <li @click="pushUrl()" v-for="(item,index) in 10" :key="index" class="latest-item">
              <span>cp30参展决定！活动详情展示。</span>
              <span class="latest-item-date">2024/01/05</span>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="type===4" class="join-list">
        <ul>
          <li @click="pushUrl()" v-for="(item,index) in 10" :key="index" class="join-item">
            <div>
              <div class="join-item-title">
                二次元运营（线下）<p class="join-item-icon">急招</p>
              </div>
              <p class="join-item-text">扬州丨运营类丨全职/兼职</p>
            </div>
            <div class="join-item-date">2024/01/05</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const show = ref<boolean>(false)
const type = ref<number>(1)
const setShow = (bol: boolean) => {
  show.value = bol
}
const setType = (num: number) => {
    show.value = false
    type.value = num
  }
const pushUrl = () => {
  router.push(`/news/1?type=${type.value}`)
}
</script>

<style lang="scss" scoped>
.news-contanier{
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
  .header-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 70px;
      z-index: 10;
      .logo-mobile {
        display: flex;
        align-items: center;
        img {
          width: 60px;
        }
        span {
          width: 110px;
          display: block;
          font-size: 18px;
          text-align: center;
          font-weight: 300;
        }
      }
      ul {
        display: flex;
        li {
          width: 110px;
          font-size: 18px;
          text-align: center;
          font-weight: 300;
        }
      }
  }
  .news-left{
    position: absolute;
    left: 1.1rem;
    top: 1.7rem;
    .left-item{
      text-align: center;
      font-size: 0.36rem;
      margin-bottom: 1rem;
      cursor: pointer;
    }
  }
  .news-right{
    position: relative;
    width: 78%;
    margin-left: 22%;
    padding-bottom: 0.5rem;
  }
  .latest-img{
    width: 11rem;
    height: 2rem;
  }
  .latest-item{
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    justify-content:space-between;
    font-size: 0.31rem;
    background: #fff;
    width: 11rem;
    height: 1.21rem;
    line-height: 1.21rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    color: #484751;
    .latest-item-date{
      font-size: 0.22rem;
    }
  }
  .latest-more{
    width: 11rem;
    cursor: pointer;
    text-align: center;
    font-size: 0.22rem;
  }
  .latest-list{
    height: 78vh;
    overflow-y: auto;
  }
  .join-list{
    height: 78vh;
    overflow-y: auto;
  }
  .join-item{
    cursor: pointer;
    border: 1px solid #ccc;
    display: flex;
    justify-content:space-between;
    font-size: 0.31rem;
    background: #fff;
    width: 11rem;
    height: 1.21rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
    align-items: center;
    color: #484751;
    .join-item-date{
      font-size: 0.22rem;
    }
    .join-item-text{
      font-size: 0.2rem;
      line-height: 2;
    }
    .join-item-title{
      display: flex;
    }
    .join-item-icon{
      font-size: 0.2rem;
      color: #fff;
      width: 0.54rem;
      height: 0.31rem;
      text-align: center;
      line-height: 0.31rem;
      background: #C3BBEb;
      border-radius: 0.1rem;
    }
    .join-item-icon2{
      background: #86AEEA;
    }
  }
}
</style>
