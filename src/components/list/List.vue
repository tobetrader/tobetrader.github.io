<template>
  <div class="list">
    <Loading v-if="props.loading"/>
    <ul>
      <li v-for="item of props.dataSource">
        <a v-bind:href="item.views" target="_blank">
          <span class="title">{{ item.title }}</span>
          <span v-if="!!item.desc && item.desc.length !== 0" class="content">{{ item.desc }}</span>
          <span v-if="!!item.author" class="sub-content">
            {{ item.author }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.createTime }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>

import { defineProps } from 'vue'

import Loading from '../loading/Loading.vue';
const props = defineProps({
  loading: Boolean,
  dataSource: {
    type: Array,
    default: []
  },
})

</script>

<style scoped lang="less">
.list {
  position: relative;
  min-height: 480px;
  ul {
    padding: 0;
    li {
      list-style: none;
      border-bottom: solid 1px  var(--vp-c-divider);
      margin-top: 0!important;
      a {
        display: flex;
        flex-direction: column;
        padding: 14px 0;
        text-decoration: none;
        box-sizing: border-box;
        color: var(--vp-c-text-1);
        font-size: 14px;
        .title {
          font-weight: bold;
          font-size: 18px;
        }
        .content {
          padding-top: 6px;
        }

        .sub-content {
          font-size: 12px;
          color: var(--vp-c-text-2);
          padding-top: 8px;
        }
        &:hover {
          color: var(--vp-c-brand);
          .sub-content {
            color: var(--vp-c-brand);
          }
        }
      }
    }
    
  }
}
</style>