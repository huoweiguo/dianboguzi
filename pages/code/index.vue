<template>
  <div class="code-contanier">
    <DHeader></DHeader>
    <div class="code-form">
      <p class="code-form-title">线下兑换码</p>
      <div class="verify-login">
        <div class="form-ipt"><p>谷子编号</p><input type="text"/></div>
        <div class="form-ipt"><p>兑换码</p><input type="text"/></div>
      </div>
      <div class="form-btn">
        <span>兑换</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.code-contanier{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);
  .code-form{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 350px;
    background-color: rgba(255,255,255, 0.5);
    border-radius: 10px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;
    padding-top: 0.4rem;
    .code-form-title{
      text-align: center;
      font-size: 0.3rem;
      margin-bottom: 0.4rem;
    }
    .verify-login {
      width: 500px;
    }
    .form-ipt {
        font-size: 14px;
        font-weight: 300;
        text-align: left;
        width: 380px;
        margin: 0 auto 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          text-align: right;
          width: 70px;
          margin-right: 10px;
        }
        input {
          width: 300px;
          height: 34px;
          border: 0;
          outline: none;
          padding: 0 10px;
          border-radius: 5px;
        }
        .verify-ipt {
          width: 140px;
        }
        span {
          display: block;
          background-color: #fff;
          height: 34px;
          line-height: 34px;
          border-radius: 5px;
          text-align: center;
          width: 100px;
          font-size: 12px;
          cursor: pointer;
        }
    }
  }
  .form-btn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    height: 40px;
    cursor: pointer;
    span {
      display: block;
      width: 140px;
      height: 40px;
      background-image: linear-gradient(90deg, #bebae7 12%, #a8a3e1);
      font-size: 16px;
      line-height: 40px;
      color: #fff;
      font-weight: 300;
      border-radius: 5px;
    }
  }
}
</style>