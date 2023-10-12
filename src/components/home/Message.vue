<script setup>
import { onMounted, ref } from 'vue'

const messages = ref([])

const scrollbar = ref(null)

onMounted(() => {
  const request = async () => {
    try {
      const baseUrl = !import.meta.env.PROD ? '/' : 'https://47.103.71.106/'
      const response = await fetch(`${baseUrl}bot/get_message`)
      const result = await response.json()
      messages.value = result || []
      if (messages.length > 0) {
        scrollbar.value.scrollTo({ top: 100000 })
      }
    } catch (e) {
    }
  }
  request()
})
</script>

<template>
  <div v-if="messages.length > 0" class="home-message">
    <a class="title" href="/message/index.html">实时消息</a>
    <ul
      ref="scrollbar"
      class="scroll">
      <li v-for="message in messages" class="message">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home-message {
  width: 100%;
  padding-top: 30px;
  max-width: 500px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    padding: 0 20px;
    cursor: pointer;
    &:after {
      display: inline-block;
      content: "";
      margin-left: 4px;
      width: 9px;
      height: 9px;
      border-top: solid 2px var(--vp-c-text-1);
      border-right: solid 2px var(--vp-c-text-1);
      transform: rotate(45deg);
    }
  }
  .scroll {
    height: 220px;
    overflow-y: auto;
    .message {
      display: block;
      margin: 10px 20px;
      border-radius: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 13px;
      color: var(--vp-c-text-1);
      padding: 4px 10px;
      background-color: rgba(22, 119, 255, 0.1);
      transform: scale(1);
      transition: all .3s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.02);
        background-color: rgb(22, 119, 255);
        color: #fff;
      }
    }
  }
}

</style>