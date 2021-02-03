<template>
  <van-popup :show="showType" @click-overlay="toggle" position="bottom" round style="height:70%">
    <div class="prop">
      <div class="item">全部类型</div>
      <div class="spend">
        <div class="title">支出</div>
        <ul class="list">
          <li class="item">餐饮</li>
          <li class="item">服饰</li>
          <li class="item">交通</li>
          <li class="item">学习</li>
        </ul>
      </div>
      <div class="income">
        <div class="title">收入</div>
        <ul class="list">
          <li class="item">工资</li>
          <li class="item">奖金</li>
          <li class="item">转账</li>
          <li class="item">理财</li>
        </ul>
      </div>
    </div>
  </van-popup>
</template>

<script>
// import { reactive, toRefs } from "vue";
export default {
  props: ["showType"],
  setup(props, context) {
    // const { showType } = toRefs(props);
    // const state = reactive({
    //   show: showType
    // });
    const toggle = () => {
      context.emit("update:showType", false);
    };
    return {
      // ...toRefs(state),
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>
.prop {
  padding: 20px;
  .title {
    color: #666;
    font-size: 14px;
    margin-top: 10px;
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .item {
    width: 105px;
    height: 45px;
    color: #666;
    text-align: center;
    line-height: 45px;
    background-color: #f5f5f5;
    margin-top: 10px;
  }
}
</style>
