<template>
  <div class="contactUs-contanier">
    <div class="concept-bg">
    </div>
    <DHeader></DHeader>
    <div class="contactUs-box">
       <div class="service">
         <div class="index-qrcode"></div>
         <p class="service-title">QQ客服</p>
       </div>
       <div class="service">
         <div class="index-qrcode"></div>
         <p class="service-title">微信客服</p>
       </div>
    </div>
    <div class="contactUs-email">电子邮箱：business@dianboguzi.com</div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.contactUs-contanier{
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
  .contactUs-box{
    width: 100vw;
    justify-content: center;
    position: relative;
    display: flex;
    .service{
      width: 2.5rem;
      margin: 0 0.7rem;
      margin-top: 0.7rem;
    }
    .index-qrcode {
      width: 2.5rem;
      height: 2.5rem;
      background-color: #aaa;
      border-radius: 0.1rem;
    }
    .service-title{
      font-size: 0.2rem;
      text-align: center;
      line-height: 2;
 
    }
  }
  .contactUs-email{
    width: 100vw;
    text-align: center;
    font-size: 0.2rem;
    position: relative;
    margin-top: 0.6rem;
  }
}
</style>