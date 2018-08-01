import Vue from 'vue'
import Router from 'vue-router'
import movie from '@/page/movie.vue'
import movieHome from '@/page/movieHome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/movie',
      name: 'movie',
      component: movie,
      children: [
        {
          path: '',
          name: 'movieHome',
          component: movieHome
        }
      ]
    },
    {
      path: '/movie/detail/:id',
      name: 'movieDetail'
    }
  ]
})
