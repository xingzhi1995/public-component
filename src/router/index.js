import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index'
import antdesign from '../view/antDesign'
import vantUi from "../view/vantUi";
import graphics from "../view/graphics";
import echart from "../view/echart";
import element from '../view/element'
import pc_loading from "../view/animation/pc_loading";
import interlacedAnimation from "../view/animation/interlacedAnimation";
import threeD_loading from "../view/animation/threeD_loading"
import app_Loading from "../view/animation/app_Loading";

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
        },
        {
          path: '/pc_loading',
          name: 'pc_loading',
          component: pc_loading
        },
        {
          path: '/interlacedAnimation',
          name: 'interlacedAnimation',
          component: interlacedAnimation
        },
        {
          path: '/threeD_loading',
          name: 'threeD_loading',
          component: threeD_loading
        },
        {
          path: '/app_Loading',
          name: 'app_Loading',
          component: app_Loading
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
