import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import antdesign from '../view/antDesign'
import vantUi from "../view/vantUi";
import graphics from "../view/graphics";
import echart from "../view/echart";
import element from '../view/element'
import test from '../view/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/antdesign',
          name: 'antdesign',
          component: antdesign
        },
        {
          path: '/vantUi',
          name: 'vantUi',
          component: vantUi
        },
        {
          path: '/graphics',
          name: 'graphics',
          component: graphics
        },
        {
          path: '/echart',
          name: 'echart',
          component: echart
        },
        {
          path: '/element',
          name: 'element',
          component: element
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
