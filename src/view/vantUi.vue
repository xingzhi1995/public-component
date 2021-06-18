<template>
  <div id="vantUi">
    <van-divider>输入框</van-divider>
    <VInput v-model="form.inputval"></VInput>
    <van-divider>下拉框</van-divider>
    <VSelect v-model="form.selectval"></VSelect>
    <van-divider>下拉列表</van-divider>
    <VList></VList>
    <van-divider>按钮</van-divider>
    <van-button type="primary" block @click="check">查看</van-button>
  </div>
</template>

<script>
  export default {
    name: "vantUi",
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
