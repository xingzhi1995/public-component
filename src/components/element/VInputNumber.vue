<template>
  <el-input-number v-model="value" @change="getVal" :min="1" :max="10"></el-input-number>
</template>

<script>
  export default {
    name: "VInputNumber",
    props:{
      keyval:{
        type:Number,
        default:0
      },
    },
    model:{
      prop:'keyval',
      event:'change'
    },
    data(){
      return{
        value:''
      }
    },
    methods:{
      getVal(){
        this.$emit('change',this.value)
      }
    }
  }
</script>

<style scoped>

</style>
