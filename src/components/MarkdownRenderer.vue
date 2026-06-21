<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { computed } from 'vue'

const props = defineProps<{
  content: string
}>()

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

const rendered = computed(() => md.render(props.content))
</script>

<template>
  <article class="markdown-body" v-html="rendered" />
</template>
