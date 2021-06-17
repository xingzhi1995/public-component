<template>
  <div id="VRate">
    <a-rate v-model="value" @change="getVal">
      <a-icon slot="character" type="heart" />
    </a-rate>
  </div>
</template>

<script>
  export default {
    name: "VRate",
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
        value:0
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
