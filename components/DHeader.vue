<template>
  <div class="header-container">
    <div class="index-left">
      <img src="../public/logo.png" class="index-logo" />
      <img src="../public/iphone-download.png" class="ios-dl" />
      <img src="../public/andorid-download.png" class="andorid-dl" />
      <div class="qrcode"></div>
    </div>

    <ul>
      <li class="active">首页</li>
      <li>新闻</li>
      <li>联系我们</li>
      <li>登录/注册</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header-container {
  position: relative;
  display: flex;
  min-width: 1280px;
  height: 50px;
  line-height: 50px;
  z-index: 999;
  justify-content: flex-end;
  ul {
    display: flex;
    height: 50px;
    li {
      position: relative;
      list-style: none;
      font-size: 24px;
      width: 175px;
      text-align: center;
      margin: 0 20px;
      height: 50px;
      cursor: pointer;
      &:last-child {
        margin-left: 160px;
      }
      &:hover,
      &.active {
        &::after {
          position: absolute;
          top: 50%;
          left: 0;
          content: '';
          display: block;
          width: 175px;
          height: 16px;
          background-color: #c3b9ea;
          opacity: 0.5;
          z-index: -1;
          border-radius: 10px;
          margin-top: -8px;
        }
      }
    }
  }
  .index-left {
    position: absolute;
    left: 80px;
    top: 30px;
    .index-logo,
    .ios-dl,
    .andorid-dl {
      width: 160px;
      display: block;
      margin-bottom: 60px;
    }
    .ios-dl,
    .andorid-dl {
      margin-bottom: 25px;
    }
    .qrcode {
      width: 160px;
      height: 160px;
      background-color: #aaa;
    }
  }
}
</style>
