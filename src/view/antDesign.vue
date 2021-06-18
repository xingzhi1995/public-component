<template>
  <div id="antDesign">
    <VInput v-model="form.inputval"></VInput>
    <VSelect v-model="form.selectval"></VSelect>
    <VRadio v-model="form.radioval"></VRadio>
    <VCheckbox v-model="form.checkboxval"></VCheckbox>
    <VDatePicker v-model="form.dateval"></VDatePicker>
    <VRate v-model="form.vrateval"></VRate>
    <VUpload v-model="form.fileList"></VUpload>
    <VTable></VTable>
    <!--    <vempty></vempty>-->
    <a-button type="primary" @click="check" style="margin-top: 10px">查看</a-button>
  </div>
</template>

<script>
  export default {
    name: "antDesign",
    data(){
      return{
        form:{
          inputval:'',
          selectval:'',
          radioval:'',
          checkboxval:[],
          dateval:'',
          vrateval:0,
          fileList:[]
        }
      }
    },
    methods:{
      check(){
        console.log('form======',this.form)
      }
    }
  }
</script>

<style scoped>
#antDesign>div{
  margin-top: 10px;
}
</style>
