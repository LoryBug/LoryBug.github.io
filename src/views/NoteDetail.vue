<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { notes } from '@/data/notes'

const route = useRoute()
const note = computed(() => notes.find((item) => item.id === route.params.id))
</script>

<template>
  <section v-if="note" class="detail-page section-shell">
    <RouterLink class="back-link" to="/">Back to home</RouterLink>

    <header class="detail-header">
      <p class="eyebrow">Lab note / {{ note.date }}</p>
      <h1>{{ note.title }}</h1>
      <p>{{ note.summary }}</p>
      <div class="tag-row">
        <span v-for="item in note.tags" :key="item" class="tag">{{ item }}</span>
      </div>
    </header>

    <MarkdownRenderer :content="note.content" />
  </section>

  <section v-else class="detail-page section-shell">
    <RouterLink class="back-link" to="/">Back to home</RouterLink>
    <h1>Note not found.</h1>
  </section>
</template>
