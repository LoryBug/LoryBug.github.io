<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { notes } from '@/data/notes'
import { projects } from '@/data/projects'

const featuredProjects = projects.filter((project) => project.featured)
const otherProjects = projects.filter((project) => !project.featured)
const latestNotes = notes.slice(0, 3)

const signals = ['RAG', 'LLM tools', 'semantic search', 'simulation', 'backend systems', 'developer tooling']

const capabilities = [
  {
    title: 'Applied AI systems',
    text: 'RAG pipelines, embeddings, semantic search, LLM integrations, and tools that make AI usable inside real workflows.',
  },
  {
    title: 'Backend engineering',
    text: 'APIs, services, data pipelines, asynchronous processing, testing, and pragmatic system design.',
  },
  {
    title: 'Developer and knowledge tools',
    text: 'DSLs, language servers, context systems, notes, automation, and interfaces for technical thinking.',
  },
]
</script>

<template>
  <section class="hero section-shell">
    <div class="hero-copy">
      <p class="eyebrow">Backend systems / Applied AI / Developer tools</p>
      <h1>I build software that connects data, reasoning, and real-world workflows.</h1>
      <p class="hero-text">
        I am Lorenzo Leoni, a software engineer focused on backend systems, applied AI, and experimental tools. I like turning scattered knowledge, technical constraints, and concrete problems into working software.
      </p>
      <div class="hero-actions">
        <a class="button primary" href="https://github.com/LoryBug" target="_blank" rel="noreferrer">View GitHub</a>
        <a class="button" href="https://www.linkedin.com/in/lorenzo-leoni-9b6328184/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>

    <aside class="signal-panel" aria-label="Current technical signals">
      <p>Current signals</p>
      <div class="signal-list">
        <span v-for="signal in signals" :key="signal">{{ signal }}</span>
      </div>
    </aside>
  </section>

  <section class="section-shell section-grid">
    <div class="section-heading">
      <p class="eyebrow">Selected work</p>
      <h2>Projects that show how I think and build.</h2>
    </div>
    <div class="project-grid featured-grid">
      <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
    </div>
  </section>

  <section class="section-shell split-section">
    <div>
      <p class="eyebrow">What I work on</p>
      <h2>Engineering with a bias toward useful systems.</h2>
    </div>
    <div class="capability-list">
      <article v-for="item in capabilities" :key="item.title" class="capability-item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>

  <section class="section-shell section-grid">
    <div class="section-heading">
      <p class="eyebrow">Lab notes</p>
      <h2>Short notes, project ideas, and technical observations.</h2>
    </div>
    <div class="note-list">
      <RouterLink v-for="note in latestNotes" :key="note.id" class="note-card" :to="{ name: 'note', params: { id: note.id } }">
        <span>{{ note.date }}</span>
        <h3>{{ note.title }}</h3>
        <p>{{ note.summary }}</p>
      </RouterLink>
    </div>
  </section>

  <section class="section-shell section-grid">
    <div class="section-heading">
      <p class="eyebrow">Other builds</p>
      <h2>Additional projects and experiments.</h2>
    </div>
    <div class="project-grid compact-grid">
      <ProjectCard v-for="project in otherProjects" :key="project.id" :project="project" compact />
    </div>
  </section>

  <section class="section-shell profile-section">
    <p class="eyebrow">Technical profile</p>
    <div class="profile-stack">
      <span>Python</span>
      <span>TypeScript</span>
      <span>C# / .NET</span>
      <span>Vue</span>
      <span>FastAPI</span>
      <span>Docker</span>
      <span>Kubernetes</span>
      <span>RAG</span>
      <span>LLMs</span>
      <span>MCP</span>
      <span>REST / gRPC</span>
      <span>Testing</span>
    </div>
  </section>
</template>
