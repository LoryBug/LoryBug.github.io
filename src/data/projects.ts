import cardiacContent from '@/content/projects/cardiac-mass-dss.md?raw'
import enduroContent from '@/content/projects/enduro-market-analytics.md?raw'
import glutenixContent from '@/content/projects/glutenix.md?raw'
import mbelContent from '@/content/projects/mbel-language-server.md?raw'
import riffbanksContent from '@/content/projects/riffbanks.md?raw'
import veritraceContent from '@/content/projects/veritrace.md?raw'

export type Project = {
  id: string
  title: string
  kind: string
  status: string
  summary: string
  stack: string[]
  featured: boolean
  links: Array<{
    label: string
    url: string
  }>
  content: string
}

export const projects: Project[] = [
  {
    id: 'glutenix',
    title: 'Glutenix',
    kind: 'Applied AI / Simulation',
    status: 'active',
    summary:
      'A decision-support system for gluten-free formulation, combining simulation, literature calibration, optimization, and an experimental feedback loop.',
    stack: ['Python', 'FastAPI', 'Vue', 'Bayesian Optimization', 'GPR', 'SQLite'],
    featured: true,
    links: [{ label: 'GitHub', url: 'https://github.com/LoryBug/Glutenix' }],
    content: glutenixContent,
  },
  {
    id: 'mbel-language-server',
    title: 'MBEL Language Server',
    kind: 'Developer Tools / AI Context',
    status: 'shipped',
    summary:
      'A DSL, Language Server, CLI, and editor tooling for making AI coding context more navigable, queryable, and agent-friendly.',
    stack: ['TypeScript', 'LSP', 'VS Code', 'CLI', 'OpenCode', 'Vitest'],
    featured: true,
    links: [{ label: 'GitHub', url: 'https://github.com/LoryBug/mbel-lsp' }],
    content: mbelContent,
  },
  {
    id: 'enduro-market-analytics',
    title: 'Enduro Market Analytics',
    kind: 'Data / Operational Analytics',
    status: 'published',
    summary:
      'An end-to-end analytics pipeline for the used enduro motorcycle market, from scraped historical data to actionable buying recommendations.',
    stack: ['Python', 'pandas', 'Forecasting', 'Wayback CDX API', 'Data Pipeline'],
    featured: true,
    links: [
      { label: 'GitHub', url: 'https://github.com/LoryBug/enduro-market-analytics' },
      { label: 'Report', url: 'https://lorybug.github.io/enduro-market-analytics/' },
    ],
    content: enduroContent,
  },
  {
    id: 'veritrace',
    title: 'Veritrace',
    kind: 'Agentic Systems / Research',
    status: 'work in progress',
    summary:
      'A traceability-first agentic framework exploring human-reviewed LLM rule authoring and symbolic BDI reasoning.',
    stack: ['TypeScript', 'Jason', 'AgentSpeak', 'LLM Evaluation', 'Traceability'],
    featured: true,
    links: [{ label: 'GitHub', url: 'https://github.com/LoryBug/Veritrace' }],
    content: veritraceContent,
  },
  {
    id: 'riffbanks',
    title: 'RiffBanks',
    kind: 'Full-stack Web App',
    status: 'prototype',
    summary:
      'A collaborative workspace for musicians, with bands, song assets, real-time chat, voting, and recruitment boards.',
    stack: ['Vue 3', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Docker'],
    featured: false,
    links: [{ label: 'GitHub', url: 'https://github.com/LoryBug/RiffBanks' }],
    content: riffbanksContent,
  },
  {
    id: 'cardiac-mass-dss',
    title: 'Cardiac Mass DSS',
    kind: 'Clinical DSS / Prototype',
    status: 'research prototype',
    summary:
      'A clinical decision-support prototype around cardiac mass diagnosis, built as a structured exploration of decision logic and traceability.',
    stack: ['TypeScript', 'Monorepo', 'Decision Support', 'Traceability', 'GitHub Pages'],
    featured: false,
    links: [
      { label: 'GitHub', url: 'https://github.com/LoryBug/thesis-poc' },
      { label: 'Demo', url: 'https://lorybug.github.io/thesis-poc/' },
    ],
    content: cardiacContent,
  },
]
