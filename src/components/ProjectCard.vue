<script setup lang="ts">
import type { Project } from '@/data/projects'

defineProps<{
  project: Project
  compact?: boolean
}>()
</script>

<template>
  <RouterLink class="project-card" :class="{ compact }" :to="{ name: 'project', params: { id: project.id } }">
    <div class="card-topline">
      <span>{{ project.kind }}</span>
      <span>{{ project.status }}</span>
    </div>
    <h3>{{ project.title }}</h3>
    <p>{{ project.summary }}</p>
    <div class="tag-row" aria-label="Tech stack">
      <span v-for="item in project.stack.slice(0, compact ? 3 : 5)" :key="item" class="tag">
        {{ item }}
      </span>
    </div>
  </RouterLink>
</template>
