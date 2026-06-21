import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NoteDetail from '@/views/NoteDetail.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects/:id', name: 'project', component: ProjectDetail },
    { path: '/notes/:id', name: 'note', component: NoteDetail },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
