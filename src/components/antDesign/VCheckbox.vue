<template>
  <div id="VCheckbox">
    <a-checkbox-group
      name="checkboxgroup"
      :options="options"
      @change="onChange"
    />
  </div>
</template>

<script>
  export default {
    name: "VCheckbox",
    props:{
      keyval:{
        type:[Object,Array],
        default:()=>[]
      },
    },
    model:{
      prop:'keyval',
      event:'change'
    },
    data(){
      return{
        options:[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ],
        value:[]
      }
    },
    methods: {
      onChange(checkedValues) {
        this.$emit('change',checkedValues)
      },
    }
  }
</script>

<style scoped>

</style>
