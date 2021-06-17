<template>
  <div id="element">
    <vinputnumber v-model="form.money"></vinputnumber>
    <el-button type="primary" @click="check">查看</el-button>
  </div>
</template>

<script>
  import vinputnumber from '../components/element/VInputNumber'
  import {elementMxins} from '../utils/elementMxins'
  export default {
    name: "element",
    components:{vinputnumber},
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
