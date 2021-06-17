<template>
  <div id="VRadio">
    <a-radio-group default-value="a" button-style="solid" @change="getVal" v-model="value">
      <a-radio-button v-for="(item,index) in radioData" :key="index" :value="item.value">{{item.label}}</a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
  export default {
    name: "VRadio",
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
        radioData:[
          {label:"Hangzhou",value:"a"},
          {label:"Shanghai",value:"b"},
          {label:"Beijing",value:"c"},
          {label:"Nanchang",value:"d"}
        ],
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
