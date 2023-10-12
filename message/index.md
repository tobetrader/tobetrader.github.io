---
aside: false
---

# 每日消息

<script setup>
import { ref } from 'vue'

import List from '../src/components/list/List.vue'
import result from '../public/articles.json'

const messages = result.message || []
messages.sort((d1, d2) => d2.key.localeCompare(d1.key))

const dataSource = ref(messages)
</script>

<List :dataSource="dataSource">
  <template v-slot="props">
    <span>{{ props }}</span>
  </template>
</List>