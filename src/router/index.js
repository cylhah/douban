import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/page/movie.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: movie
    }
  ]
})
