import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../views/index/index')
const Category = () => import('../views/category/category')
const Select = () => import('../views/select/select')
const Mine = () => import('../views/mine/mine')
Vue.use(Router)
const routes = [{
  path: '',
  redirect: '/index'
}, {
  path: '/index',
  component: Index
}, {
  path: '/category',
  component: Category
},
{
  path: '/select',
  component: Select
},
{
  path: '/mine',
  component: Mine
}
]

export default new Router({
  routes,
  mode: 'history'
})
