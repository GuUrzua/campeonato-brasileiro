import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicio from '../views/Inicio.vue'
import TabelaClassificacao from '../views/TabelaClassificacao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PaginaInicio
  },
  {
    path: '/tabela',
    name: 'Tabela',
    component: TabelaClassificacao
  }
]

const router = new VueRouter({
  routes
})

export default router
