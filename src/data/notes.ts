import livingPortfolioContent from '@/content/notes/living-portfolio.md?raw'
import proofOfWorkContent from '@/content/notes/proof-of-work.md?raw'

export type Note = {
  id: string
  title: string
  date: string
  summary: string
  tags: string[]
  content: string
}

export const notes: Note[] = [
  {
    id: 'living-portfolio',
    title: 'This site is a living portfolio',
    date: '2026-06-21',
    summary:
      'A short note on why this space exists: not just a CV, but a public index of projects, experiments, and technical direction.',
    tags: ['portfolio', 'career', 'work-in-progress'],
    content: livingPortfolioContent,
  },
  {
    id: 'proof-of-work',
    title: 'Proof of work beats static claims',
    date: '2026-06-21',
    summary:
      'A working principle for this portfolio: show decisions, tradeoffs, systems, and artifacts instead of only listing technologies.',
    tags: ['projects', 'engineering', 'positioning'],
    content: proofOfWorkContent,
  },
]
