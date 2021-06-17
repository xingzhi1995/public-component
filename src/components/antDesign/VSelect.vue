<template>
  <div id="VSelect">
    <a-select @change="handleChange">
      <a-select-option v-for="(item,index) in testData" :value="item.value" :key="index">{{item.label}}</a-select-option>
    </a-select>
  </div>
</template>

<script>
  export default {
    name: "VSelect",
    props:{
      keyval:{
        type:String,
        default:''
      },
    },
    model:{
      prop:'keyval',
      event:'change'
    },
    data(){
      return{
        testData:[
          {label:'jack',value:'jack'},
          {label:'lucy',value:'lucy'},
          {label:'Yiminghe',value:'Yiminghe'},
          {label:'Disabled',value:'Disabled'}
        ]
      }
    },
    methods:{
      handleChange(value){
        this.$emit('change',value)
      }
    }
  }
</script>

<style scoped>
  .ant-select{
    width: 200px;
  }
</style>
