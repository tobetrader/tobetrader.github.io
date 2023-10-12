---
layout: home
---

<script setup>

import Message from './src/components/home/Message.vue'

</script>

<div class="home">
  <img src="/logo.svg"/>
  <h1>ToBeTrader</h1>
  <p>🕸️ 最好的交易学习网站</p>
  <Message />
</div>

<style scoped lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 36px;
    font-weight: bold;
    padding-top: 20px
  }
  p {
    padding-top: 14px;
    color: var(--vp-c-text-2);
  }
}
</style>

