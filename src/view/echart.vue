<template>
  <div id="echart">
    <vlineechart></vlineechart>
    <vpiechart></vpiechart>
  </div>
</template>

<script>
  import vlineechart from '../components/echart/VLineEchart'
  import vpiechart from '../components/echart/VPieChart'
  export default {
    name: "echart",
    components:{vlineechart,vpiechart}
  }
</script>

<style scoped>

</style>
