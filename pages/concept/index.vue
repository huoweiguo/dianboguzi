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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const type = ref<number>(2)
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
    width: 4.3rem;
    max-width: 4.87rem;
    height: 7.86rem;
  }
  .right-dzgz-box{
    width: 55%;
    margin-left: 0.1rem;
    margin-bottom: 0.3rem;
  }
  .right-dzgz-img2{
    width: 7rem;
    height: 7rem;
  }
  .right-dzgz-text{
    width: 6.8rem;
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
</style>
