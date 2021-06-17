<template>
  <div id="index">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider>
        <a-menu mode="inline" style="width: 100%">
          <a-sub-menu v-for="(item,index) in global.json.menuList" :key='index'>
            <span slot="title">{{item.label}}</span>
            <a-menu-item v-for="(data,idx) in item.children" :key="`${index}-${idx}`" @click="$router.push(data.path)">
              {{data.label}}
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>

<style scoped>
  #index{
    height: 100vh;
  }
  #index>.ant-layout{
    height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .ant-layout-content{
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    minHeight: 280px
  }
</style>
