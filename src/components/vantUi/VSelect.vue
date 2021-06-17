<template>
  <div id="VSelect">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" @change="getVal"/>
    </van-dropdown-menu>
  </div>
</template>

<script>
  export default {
    name: "VSelect",
    props:{
      keyval:{
        type:[Number,String],
        default:''
      },
      option:{
        type:[Object,Array],
        default:()=>[
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 }
        ]
      }
    },
    model:{
      prop:'keyval',
      event:'change'
    },
    data() {
      return {
        value: 0,
      };
    },
    methods:{
      getVal(){
        this.$emit('change',this.value)
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>
