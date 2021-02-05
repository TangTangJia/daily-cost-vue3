<template>
  <van-popup :show="showAdd" @click-overlay="toggle" position="bottom" round style="height:70%">
    <div class="popup">
      <div class="top">
        <div class="btn-sure">确定</div>
      </div>
      <div class="title">
        <div class="tabs">
          <div :class="{ active: type === 'expense' }" @click="changeType('expense')">支出</div>
          <div :class="{ active: type === 'income' }" @click="changeType('income')">收入</div>
        </div>
        <div class="date">
          02-05
          <i class="iconfont sort-down"></i>
        </div>
      </div>
      <div class="money">
        <span class="sufix">¥</span>
        <span class="amount animation">{{ amount }}</span>
      </div>
      <ul class="type">
        <li>
          <div>
            <!-- <i :class="['iconfont', typeMap[item.id].icon]"></i> -->
          </div>
        </li>
      </ul>
    </div>
  </van-popup>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { typeMap } from "@/util/global";
export default {
  props: ["showAdd"],
  setup(props, context) {
    const state = reactive({
      type: "expense", // 账单类型
      typeMap: typeMap
    });

    const toggle = () => {
      context.emit("update:showAdd", false);
    };

    const changeType = type => {
      state.type = type;
    };

    onMounted(() => {});

    return {
      toggle,
      ...toRefs(state),
      changeType
    };
  }
};
</script>

<style lang="less" scoped>
@import url("@/styles/custom.less");
.popup {
  padding: 10px;
}
.top {
  text-align: right;
}
.btn-sure {
  display: inline-block;
  width: 50px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: #39be77;
  border-radius: 2px;
}
.date {
  width: 70px;
  height: 24px;
  color: #666;
  font-size: 14px;
  text-align: center;
  line-height: 24px;
  background-color: #f0f0f0;
  border-radius: 20px;
}
.title {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  margin-bottom: 20px;
  .text {
    font-size: 18px;
    color: #666;
  }
  .tabs {
    display: flex;
    div {
      width: 50px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      font-size: 12px;
      color: #666;
      border-radius: 20px;
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
.money {
  padding-bottom: 12px;
  border-bottom: 1px solid #e9e9e9;
  margin: 0 24px;
  .sufix {
    font-size: 36px;
    font-weight: bold;
    vertical-align: top;
  }
  .amount {
    font-size: 40px;
    padding-left: 10px;
  }
}
.animation::after {
  content: "";
  display: inline-block;
  margin-left: 5px;
  width: 2px;
  height: 28px;
  animation: blink 1s infinite steps(1, start);
}
@keyframes blink {
  0% {
    background-color: white;
  }
  50% {
    background-color: @color-text-secondary;
  }
  100% {
    background-color: white;
  }
}
</style>
