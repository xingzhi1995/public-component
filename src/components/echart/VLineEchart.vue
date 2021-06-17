<template>
  <div id="VLineEchart">
    <div id="lineChart" class="myChart"></div>
  </div>
</template>

<script>

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }]
  }

  export default {
    name: "VLineEchart",
    mounted () {
      this.drawLine();
    },
    methods: {
      drawLine () {
        var myChart = this.$echarts.init(document.getElementById('lineChart'));
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>
.myChart{
  width: 300px;
  height: 300px;
}
</style>
