<template>
  <nav>
    <router-link to="/" class="logo">
      <img src="../assets/images/logo-new.png" alt="logoImg" />
    </router-link>
    <div class="linkButtonList">
      <!-- 原本的多加一層 div ，沒有特別需要其實可以不用，拿掉不影響css也讓html更乾淨
        重點是加上原本的css讓你的元素範圍變很奇怪，你的滑鼠在移動的時候要移到元素上才有hover效果
    -->
      <router-link to="introduce" class="linkButton">introduce</router-link>
      <router-link to="reserve" class="linkButton">reserve</router-link>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  padding: 8px;
  justify-content: space-between;
}

.logo img {
  /* 高度可以不用特別設，可以吃圖片比例 */
  width: 50px;
}
/* 
原本的
.linkButtonList{
    display: flex;
    justify-content: end;
    padding-top: 20px;
}*/

.linkButtonList {
  display: flex;
  align-self: center;
  gap: 10px;
}

.linkButton {
  color: white;
  font-size: 20px;
  margin: 0 10px;
  padding: 10px 10px 0 10px;
  text-decoration: none;
}

.linkButton:hover {
  background: linear-gradient(to bottom, #ffffff00, rgb(255, 208, 78, 0.5));
  border-bottom: 3px solid white;
  animation: navHover 0.8s;
}

@keyframes navHover {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
