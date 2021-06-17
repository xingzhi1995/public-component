<template>
  <div id="VInput">
    <a-input placeholder="Basic usage" @change="getVal" v-model="value"/>
  </div>
</template>

<script>
  export default {
    name: "VInput",
    props:{
      keyval:{
        type:[Number,String],
        default:null
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
