<template>
  <div id="VDatePicker">
    <a-date-picker @change="onChange" v-if="type=='date'"/>
    <a-month-picker placeholder="Select month" @change="onChange" v-if="type=='month'"/>
    <a-range-picker @change="onChange" v-if="type=='range'"/>
    <a-week-picker placeholder="Select week" @change="onChange" v-if="type=='week'"/>
  </div>
</template>

<script>
  export default {
    name: "VDatePicker",
    props:{
      keyval:{
        type:String,
        default:''
      },
      type:{
        type:String,
        default:'date'
      }
    },
    model:{
      prop:'keyval',
      event:'change'
    },
    methods: {
      onChange(date, dateString) {
        this.$emit('change',dateString)
      },
    }
  }
</script>

<style scoped>

</style>
