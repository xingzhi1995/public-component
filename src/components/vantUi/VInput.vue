<template>
  <div id="VInput">
    <van-field v-model="value" label="文本" placeholder="请输入用户名" @input="getVal" />
  </div>
</template>

<script>
  export default {
    name: "VInput",
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
