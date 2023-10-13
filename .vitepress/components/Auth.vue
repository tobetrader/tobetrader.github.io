<script setup>
import { onMounted, ref } from 'vue'
import getToken from './getToken'

const user = ref(null)

const redirect = ref('')

onMounted(() => {
  redirect.value = window.location.href
  const request = async () => {
    try {
      const baseUrl = !import.meta.env.PROD ? '/' : 'https://47.103.71.106/'
      const response = await fetch(
        `${baseUrl}query/v1.0/CheckToken`,
        {
          headers: {
            Accept: 'text/plain;',
            // 'Access-Control-Allow-Origin': '*',
            Otoken: getToken(),
          },
          // withCredentials: true
        }
      )
      const result = await response.json()
      if (result.UserID) {
        user.value = result
      }
    } catch (e) {
    }
  }
  request()
})
</script>

<template>
  <div class="auth">
    <a v-if="!user" href="https://exchange.tobetrader.com/zh-CN/register">注册</a>
    <a v-if="!user" class="login" :href="'https://exchange.tobetrader.com/zh-CN/login?redirect='+redirect">登录</a>
    <svg
      v-if="user"
      width="16"
      height="16"
      viewBox="0 0 1024 1024">
      <path d="M512.3 460.2c109.2 0 198.1-88.9 198.1-198.1s-88.9-198-198.1-198S314.2 153 314.2 262.2s88.9 198 198.1 198z m0-324.1c69.5 0 126.1 56.6 126.1 126.1s-56.6 126.1-126.1 126.1-126.1-56.6-126.1-126.1c0.1-69.6 56.6-126.1 126.1-126.1zM956.6 873c-6.8-46.5-22.5-91.8-46.6-134.5-24.2-43-55.9-81.4-94.1-114.2-39.8-34.2-85.2-60.9-135-79.5-52.9-19.7-109.7-29.7-168.7-29.7-59 0-115.8 10-168.7 29.7-49.8 18.6-95.2 45.3-135 79.5-38.2 32.8-69.8 71.2-94.1 114.2-24 42.7-39.6 87.9-46.4 134.5-3.2 21.9 3.3 44.1 17.7 60.8 14.4 16.7 35.4 26.3 57.5 26.3h738.3c22.1 0 43-9.6 57.5-26.3 14.3-16.8 20.8-38.9 17.6-60.8z m-72.2 13.7c-1.2 1.4-2.5 1.4-3 1.4H143.2c-0.4 0-1.8 0-3-1.4-0.8-0.9-1.1-2.1-1-3.3 5.5-37.7 18.3-74.6 38.1-109.6 20.1-35.7 46.5-67.6 78.3-94.9 33.3-28.6 71.4-51 113.2-66.6 44.9-16.7 93.2-25.2 143.5-25.2s98.7 8.5 143.5 25.2c41.8 15.6 79.9 38 113.2 66.6 31.8 27.3 58.1 59.3 78.3 94.9 19.7 35 32.5 71.9 38.1 109.6 0.1 1.2-0.2 2.3-1 3.3z"/>
    </svg>
    <span v-if="user" style="margin-left: 8px;">{{ user.UserID }}</span>
    <div class="download">
      <svg class="icon" viewBox="0 0 1024 1024" width="20" height="20">
        <path d="M384 744H296a240 240 0 0 1 0-480h56a32 32 0 0 1 0 64h-56a176 176 0 0 0 0 352h88a32 32 0 0 1 0 64z" />
        <path d="M736 384a32 32 0 0 1-32-32v-40a192 192 0 0 0-382.08-27.44 32 32 0 0 1-63.36-9.04A256 256 0 0 1 768 312v40a32 32 0 0 1-32 32z" />
        <path d="M728 744H640a32 32 0 0 1 0-64h88a176 176 0 0 0 6.8-352 32 32 0 1 1 2.4-64A240 240 0 0 1 728 744zM512 568a32 32 0 0 1 32 32v280a32 32 0 0 1-64 0V600a32 32 0 0 1 32-32z" />
        <path d="M512 488.08m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" />
        <path d="M512 968a48 48 0 0 1-33.92-14L353.6 829.52A32 32 0 0 1 398.88 784L512 897.36 625.12 784a32 32 0 0 1 45.28 45.28l-124.48 124.64A48 48 0 0 1 512 968z"/>
      </svg>
      <span>客户端下载</span>
      <ul class="popover">
        <li>
          <img src="/download_android_qr_code.png"/>
          <span>Android</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
.auth {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  color: var(--vp-c-text-1);
  fill: var(--vp-c-text-1);
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 30px;
    margin-left: 10px;
    padding: 0 14px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    &.login {
      background-color: #1677ff;
      color: #fff;
    }
  }
  .download {
    position: relative;
    display: none;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
    font-size: 14px;
    color: var(--vp-c-text-1);
    height: 100%;
    cursor: pointer;
    .icon {
      fill: var(--vp-c-text-1);
      margin-right: 4px;
    }
    .popover {
      position: absolute;
      z-index: 10;
      top: 100%;
      right: 0;
      background-color: #fff;
      box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1), 0px 16px 48px rgba(0, 0, 0, 0.1);
      width: 120px;
      transform: scaleY(0);
      transform-origin: top;
      opacity: 0;
      transition: all .2s ease-in-out;
      border-radius: 6px;
      li {
        padding: 10px;
        text-align: center;
      }
    }
    &:hover {
      .popover {
        transform: scaleY(1);
        opacity: 1;
      }
    }
  }

  @media (min-width: 640px) {
    .download {
      display: flex;
    }
  }

}
</style>