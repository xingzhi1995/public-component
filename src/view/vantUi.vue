<template>
  <div id="vantUi">
    <van-divider>输入框</van-divider>
    <vinput v-model="form.inputval"></vinput>
    <van-divider>下拉框</van-divider>
    <vselect v-model="form.selectval"></vselect>
    <van-divider>下拉列表</van-divider>
    <vlist></vlist>
    <van-divider>按钮</van-divider>
    <van-button type="primary" block @click="check">查看</van-button>
  </div>
</template>

<script>
  import vinput from '../components/vantUi/VInput'
  import vselect from '../components/vantUi/VSelect'
  import vlist from '../components/vantUi/VList'
  export default {
    name: "vantUi",
    components:{vinput,vselect,vlist},
    data(){
      return{
        form:{
          inputval:'',
          selectval:''
        }
      }
    },
    methods:{
      check(){
        console.log('form=====',this.form)
      }
    }
  }
</script>

<style scoped>

</style>
