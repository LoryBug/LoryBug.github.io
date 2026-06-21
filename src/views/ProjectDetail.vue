<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MarkdownRenderer from '@/components/MarkdownRenderer.vue'
import { projects } from '@/data/projects'

const route = useRoute()

const project = computed(() => projects.find((item) => item.id === route.params.id))
</script>

<template>
  <section v-if="project" class="detail-page section-shell">
    <RouterLink class="back-link" to="/">Back to home</RouterLink>

    <header class="detail-header">
      <p class="eyebrow">{{ project.kind }} / {{ project.status }}</p>
      <h1>{{ project.title }}</h1>
      <p>{{ project.summary }}</p>
      <div class="tag-row">
        <span v-for="item in project.stack" :key="item" class="tag">{{ item }}</span>
      </div>
      <div class="detail-links">
        <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noreferrer">
          {{ link.label }}
        </a>
      </div>
    </header>

    <MarkdownRenderer :content="project.content" />
  </section>

  <section v-else class="detail-page section-shell">
    <RouterLink class="back-link" to="/">Back to home</RouterLink>
    <h1>Project not found.</h1>
  </section>
</template>
