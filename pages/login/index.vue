<template>
  <div class="page-content">
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

    <div class="login-form">
      <img src="../../public/logo-image.png" class="logo-image"/>
      <div class="login-inner" :class="verifyLogin ? '' : 'login-active'">
        <div class="verify-login">
          <div class="form-ipt">手机号: <input type="text"/></div>
          <div class="form-ipt">验证码: <input type="password" class="verify-ipt"/> <span>发送验证码</span></div>
          <div class="form-text">
            <span @click="setActive(false)">账号密码登录</span>
            <span>忘记密码?</span>
          </div>
        </div>
        <div class="account-login">
          <div class="form-ipt">账号: <input type="text"/></div>
          <div class="form-ipt">密码: <input type="password"/></div>
          <div class="form-text">
            <span @click="setActive(true)">验证码登录</span>
            <span>忘记密码?</span>
          </div>
        </div>
      </div>
      <div class="form-btn">
        <span>登录/注册</span>
      </div>
      <div class="protocol-text"><label><input type="checkbox" v-model="protocol"/>同意《xxx》协议</label></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const protocol = ref<boolean>(true)
const verifyLogin = ref<boolean>(true)
const setActive = (flag: boolean) => {
  console.log(flag)
  verifyLogin.value = flag
}
</script>

<style lang="scss" scoped>
  
  .page-content {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(90deg, #b2d6fa 12%, #f8d3f8);

    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 70px;
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

    .login-form {
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
      .logo-image {
        width: 80px;
      }
      .login-inner {
        width: 1000px;
        height: 140px;
        margin-left: 0;
        transition: 0.5s;
        .account-login {
          width: 500px;
          float: left;
        }
        .verify-login {
          width: 500px;
          float: left;
        }
      }
      .login-active {
        margin-left: -500px;
      }
      .form-ipt {
        font-size: 14px;
        font-weight: 300;
        text-align: left;
        width: 320px;
        margin: 0 auto 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        input {
          width: 250px;
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
      .form-text {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        span {
          margin: 0 10px;
          font-size: 12px;
          cursor: pointer;
        }
      }
      .form-btn {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        height: 40px;
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
      .protocol-text {
        font-size: 12px;
        label {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          color: #666;
        }
      }
    }
  }

  @media screen and (max-width: 750px){
    
  }
</style>