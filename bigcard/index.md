---
aside: false
---

# 风云人物

<script setup>
import { ref } from 'vue'

import List from '../src/components/list/List.vue'
import result from '../public/articles.json'

const bigCard = result.bigcard

bigCard.sort((d1, d2) => d2.key.localeCompare(d1.key))

const dataSource = ref(bigCard)
</script>

<List :dataSource="dataSource">
  <template v-slot="props">
    <span>{{ props }}</span>
  </template>
</List>