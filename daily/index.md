---
aside: false
---

# 交易日报

<script setup>
import { ref } from 'vue'

import List from '../src/components/list/List.vue'
import result from '../public/articles.json'

const daily = result.daily

daily.sort((d1, d2) => d2.key.localeCompare(d1.key))

const dataSource = ref(daily)
</script>

<List :dataSource="dataSource">
  <template v-slot="props">
    <span>{{ props }}</span>
  </template>
</List>