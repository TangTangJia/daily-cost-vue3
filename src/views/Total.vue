<template>
  <div class="total">
    <div class="top">
      <div class="date">
        <div class="time">2021-01</div>
        <div class="line">|</div>
        <van-icon name="notes-o" />
      </div>
      <div>共支出</div>
      <div class="spend">¥350.00</div>
      <div class="money">共收入¥1000.00</div>
    </div>
    <div class="center">
      <div class="title">
        <div class="text">收支构成</div>
        <div class="tabs">
          <div :class="{ active: type === 'expense' }" @click="changeType('expense')">支出</div>
          <div :class="{ active: type === 'income' }" @click="changeType('income')">收入</div>
        </div>
      </div>
      <div class="process">
        <div class="process-item">
          <div class="icon">
            <i class="iconfont canyin"></i>
          </div>
          <div class="type-name">餐饮 57.14%</div>
          <div class="percent">
            <van-progress
              :percentage="50"
              color="rgb(57, 190, 119)"
              track-color="#fff"
              :show-pivot="false"
              :stroke-width="6"
            />
          </div>
          <div>¥350.00</div>
        </div>
        <div class="process-item">
          <div class="icon">
            <i class="iconfont canyin"></i>
          </div>
          <div class="type-name">服装 57.14%</div>
          <div class="percent">
            <van-progress
              :percentage="50"
              color="rgb(57, 190, 119)"
              track-color="#fff"
              :show-pivot="false"
              :stroke-width="6"
            />
          </div>
          <div>¥350.00</div>
        </div>
        <div class="process-item">
          <div class="icon">
            <i class="iconfont canyin"></i>
          </div>
          <div class="type-name">交通 57.14%</div>
          <div class="percent">
            <van-progress
              :percentage="50"
              color="rgb(57, 190, 119)"
              track-color="#fff"
              :show-pivot="false"
              :stroke-width="6"
            />
          </div>
          <div>¥350.00</div>
        </div>
      </div>
    </div>
    <div class="charts">
      <div class="title">
        <div class="text">收支构成</div>
        <div class="tabs">
          <div :class="{ active: type === 'expense' }" @click="changeType('expense')">支出</div>
          <div :class="{ active: type === 'income' }" @click="changeType('income')">收入</div>
        </div>
      </div>
      <div id="pie" style="width: 350px;height:400px;"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import * as echarts from "echarts";
let Echarts = null;
export default {
  setup() {
    const state = reactive({
      type: "expense" // 账单类型
    });
    const changeType = type => {
      console.log(type);
      state.type = type;
    };
    onMounted(() => {
      setPie();
    });
    // 绘制饼图
    const setPie = () => {
      Echarts = echarts.init(document.getElementById("pie"));
      Echarts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 图例
        legend: {
          orient: "horizontal",
          left: "left"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "学习" },
              { value: 735, name: "餐饮" },
              { value: 580, name: "其他" },
              { value: 484, name: "日用" },
              { value: 300, name: "购物" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    };
    return {
      ...toRefs(state),
      changeType,
      setPie
    };
  }
};
</script>

<style lang="less" scoped>
.total {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin-bottom: 20px;
  .text {
    font-size: 18px;
    color: #666;
  }
  .tabs {
    display: flex;
    div {
      width: 40px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-radius: 5px;
      background-color: #f5f5f5;
      &:nth-of-type(1) {
        margin-right: 10px;
      }
      &.active {
        color: #39be77;
        background-color: rgba(57, 190, 119, 0.2);
      }
    }
  }
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 170px;
  color: #39be77;
  font-size: 12px;
  background-color: #fff;
  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 30px;
    color: #666;
    background-color: #f5f5f5;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    .time {
      font-size: 14px;
    }
    .line {
      margin: 0 5px;
    }
    i {
      font-size: 16px;
    }
  }
  .spend {
    font-size: 22px;
    font-weight: 600;
    margin-top: 12px;
    margin-bottom: 18px;
  }
  .money {
    color: rgba(0, 0, 0, 0.5);
  }
}
.center {
  background-color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  .process {
    .process-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      font-size: 12px;
      // margin-bottom: 30px;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        color: #fff;
        border-radius: 50%;
        background-color: #39be77;
      }
      .percent {
        width: 160px;
      }
    }
  }
}
.charts {
  background-color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>
