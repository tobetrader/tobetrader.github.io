---
aside: false
---

# 大事纪实

<script setup>
import { ref } from 'vue'

import List from '../src/components/list/List.vue'
import result from '../public/articles.json'

const news = result.news
news.sort((d1, d2) => d2.key.localeCompare(d1.key))

const dataSource = ref(news)
</script>

<List :dataSource="dataSource">
  <template v-slot="props">
    <span>{{ props }}</span>
  </template>
</List>