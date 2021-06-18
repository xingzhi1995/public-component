<template>
  <div id="element">
    <vInputNumber v-model="form.money"></vInputNumber>
    <el-button type="primary" @click="check">查看</el-button>
  </div>
</template>

<script>
  import {elementMxins} from '../utils/elementMxins'
  export default {
    name: "element",
    mixins:[elementMxins],
    data(){
      return{
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
