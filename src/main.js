// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import Global from './components/global'
import echarts from 'echarts'
import * as dd from 'dingtalk-jsapi'; // 此方式为整体加载，也可按需进行加载
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import antplugins from "./components/ant_plugins";
import element_plugins from './components/element_plugins'
import vant_plugins from './components/vant_plugins'
import echart_plugins from './components/echart_plugins'
import '../src/style/style.styl'

Vue.use(antplugins);
Vue.use(element_plugins);
Vue.use(vant_plugins);
Vue.use(echart_plugins);

Vue.use(ElementUI);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(Antd);
Vue.use(Vant);

Vue.prototype.global=Global

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
