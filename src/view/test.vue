<template>
  <div id="test">
    <div class="header">
      <div class="title">0111南昌滨江豪园店</div>
    </div>
    <div class="cont">
      <div class="cont_title">预计奖金包</div>
      <div class="money">¥0.00</div>
      <div class="date">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value" :options="option" />
        </van-dropdown-menu>
        <span class="dateSpan">2021-06-01 ~ 2021-06-20</span>
      </div>
    </div>
    <div class="notice">
      <van-notice-bar color="#9D9D9D" background="#FCFCFC" left-icon="volume-o">
        绩效规则：销售收入达成率>=.......................
      </van-notice-bar>
      <van-notice-bar color="#9D9D9D" background="#FCFCFC" left-icon="volume-o">
        绩效规则：销售收入达成率>=.......................
      </van-notice-bar>
    </div>
    <div class="grid">
      <van-grid :gutter="10" :column-num="3">
        <van-grid-item v-for="(item,index) in list" :key="index" :text="item.label">
          <template slot="icon"><div>{{item.value}}</div></template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
  export default {
    name: "test",
    data() {
      return {
        value:0,
        option: [
          { text: '0111', value: 0 }
        ],
        list:[
          {label:'销货收入目标',value:'123',icon:'hot-o'},
          {label:'当月销售收入',value:'123',icon:'hot-o'},
          {label:'销售收入达成率',value:'123',icon:'hot-o'},
          {label:'鲜食占比目标',value:'123',icon:''},
          {label:'当月鲜食占比',value:'123',icon:''},
          {label:'现实占比达成率',value:'123',icon:''},
          {label:'鲜食销售目标',value:'123',icon:''},
          {label:'当月鲜食收入',value:'123',icon:''},
          {label:'鲜食销售达成率',value:'123',icon:''},
          {label:'当月容许报废额',value:'123',icon:''},
          {label:'当月实际报废额',value:'123',icon:''},
          {label:'剩余可报废额',value:'123',icon:''},
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus">
  #test{
    height 100vh
    background-color #FCFCFC
    .header{
      width: 100%;
      min-height 10rem
      background-color: #36A168;
      .title{
        width 100%
        text-align center
        color white
        font-size 18px
        padding 10px 0
      }
    }
    .cont{
      width: 80%;
      height: 11rem;
      position: absolute;
      top: 7%;
      left: 0;
      right: 0;
      margin: auto;
      border-radius 8px
      /*box-shadow:0 0 9px 2px #eaeaea;*/
      border 1px solid white
      background: linear-gradient(to bottom,#36A168 60%,#F0F0F0);
      padding 1rem
      .cont_title{
        color white
        font-size 1.3rem
      }
      .money{
        color white
        font-size 1.5rem
      }
      .date{
        width 100%
        padding 0 10px
        display flex
        align-items center
        margin-top 1rem
        .van-dropdown-menu{
          .van-dropdown-menu__bar{
            background none
            .van-dropdown-menu__item{
              justify-content left
              .van-dropdown-menu__title{
                color white
              }
            }
          }
        }
        .dateSpan{
          margin-left 40px
          color white
          font-size 0.8rem
        }
      }
    }
    .notice{
      margin-top 6rem
      margin-bottom 1rem
      .van-notice-bar{
        i{
          font-size 1.5rem
          color #36A168
        }
        .van-notice-bar__wrap{
          margin-left 0.8rem
          .van-notice-bar__content{
            border-radius 10px
            color black
            font-size 0.4rem
            padding 0.1rem 0.8rem 0.1rem 0
          }
        }
      }
    }
    .grid{
      .van-grid{
        .van-grid-item{
          border-radius 8px
          overflow hidden
        }
      }
    }
  }


</style>
