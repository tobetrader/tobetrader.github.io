---
aside: false
---

# 交易心得

<script setup>
import { ref } from 'vue'

import List from '../src/components/list/List.vue'
import result from '../public/articles.json'

const viewpoint = result.viewpoint

viewpoint.sort((d1, d2) => d2.key.localeCompare(d1.key))

const dataSource = ref(viewpoint)
</script>

<List :dataSource="dataSource">
  <template v-slot="props">
    <span>{{ props }}</span>
  </template>
</List>