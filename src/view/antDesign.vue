<template>
  <div id="antDesign">
    <vinput v-model="form.inputval"></vinput>
    <vselect v-model="form.selectval"></vselect>
    <vradio v-model="form.radioval"></vradio>
    <vcheckbox v-model="form.checkboxval"></vcheckbox>
    <vdatepicker v-model="form.dateval"></vdatepicker>
    <vrate v-model="form.vrateval"></vrate>
    <vupload v-model="form.fileList"></vupload>
    <vtable></vtable>
<!--    <vempty></vempty>-->
    <a-button type="primary" @click="check" style="margin-top: 10px">查看</a-button>
  </div>
</template>

<script>
  import vinput from '../components/antDesign/VInput'
  import vselect from '../components/antDesign/VSelect'
  import vradio from '../components/antDesign/VRadio'
  import vcheckbox from '../components/antDesign/VCheckbox'
  import vdatepicker from '../components/antDesign/VDatePicker'
  import vrate from '../components/antDesign/VRate'
  import vupload from '../components/antDesign/VUpload'
  import vempty from '../components/antDesign/VEmpty'
  import vtable from '../components/antDesign/VTable'
  export default {
    name: "antDesign",
    components:{vinput,vselect,vradio,vcheckbox,vdatepicker,vrate,vupload,vempty,vtable},
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
