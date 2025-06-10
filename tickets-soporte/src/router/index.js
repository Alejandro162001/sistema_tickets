import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tickets from '../views/Tickets.vue'
import Reports from '../views/Reports.vue'
import ReportProblem from '../views/ReportProblem.vue'
import RequestService from '../views/RequestService.vue' // <-- Importa tu nuevo componente

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/tickets', name: 'Tickets', component: Tickets },
  { path: '/reports', name: 'Reports', component: Reports },
  { path: '/reportar-problema', name: 'ReportProblem', component: ReportProblem },
  { path: '/solicitar-servicio', name: 'RequestService', component: RequestService } // <-- Nueva ruta
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router