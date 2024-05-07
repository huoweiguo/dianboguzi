<template>
  <div class="news-detail-contanier">
    <div class="concept-bg">
    </div>
    <DHeader></DHeader>
    <div class="news-left">
      <ul>
        <li @click="setType(1)" class="left-item" :class="{active:type === 1}">最新</li>
        <li @click="setType(2)" class="left-item" :class="{active:type === 2}">线上活动</li>
        <li @click="setType(3)" class="left-item" :class="{active:type === 3}">线下活动</li>
        <li @click="setType(4)" class="left-item" :class="{active:type === 4}">加入我们</li>
      </ul>
    </div>
    <div class="news-right">
      <div v-if="type === 1" class="news-content">
        <h3>cp30参展决定！</h3>
        <p class="news-content-date">2024/01/15</p>
        <div class="news-content-text">
          尊敬的电波谷子居民：<br/>
          你好<br/>
          这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。
          这里要能跳转链接：哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
        </div>
      </div>
      <div v-if="type === 4" class="news-content2">
        <h3>二次元运营（线下）</h3>
        <p class="news-content-date">扬州丨运营类丨全职/兼职    2024/04/25 发布</p>
        <h4>职位描述</h4>
        <div class="news-content-text">
          尊敬的电波谷子居民：<br/>
          你好<br/>
          这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新闻稿，是的，确实是一段新闻稿，看似说了很多，实际上啥也没说。这是一段新

          请投递至邮箱：
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const type = ref<number>(Number(route.query.type))
const setType = (num: number) => {
  router.push(`/news?type=${num}`)
  }
</script>

<style lang="scss" scoped>
.news-detail-contanier{
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
    .active{
      color:#6960A7;
    }
  }
  .news-right{
    position: relative;
    width: 78%;
    margin-left: 22%;
    padding-bottom: 0.5rem;
  }
  .news-content{
    width: 11rem;
    height: 7.72rem;
    border: 1px solid #ccc;
    background: #fff;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0.4rem;
    h3{
      text-align: center;
      font-size: 0.4rem;
    }
    .news-content-date{
      text-align: center;
      font-size: 0.22rem;
      line-height: 3;
    }
    .news-content-text{
      font-size: 0.24rem;
      line-height: 1.5;
    }
  }
  .news-content2{
    width: 11rem;
    height: 7.72rem;
    border: 1px solid #ccc;
    background: #fff;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0.4rem;
    h3{
      font-size: 0.48rem;
      color: #564F84;
    }
    .news-content-date{
      font-size: 0.24rem;
      line-height: 3;
    }
    h4{
      font-size: 0.4rem;
      color: #484751;
      margin: 0.6rem 0 0.2rem 0;
    }
    .news-content-text{
      font-size: 0.24rem;
      line-height: 1.5;
    }

  }
}
</style>
