<template>
  <div class="header">
    <div class="type">
      <div @click="showDate = true">全部类型</div>
      <div class="line">|</div>
      <div>
        <van-icon name="apps-o" size="18" />
      </div>
    </div>
    <div class="total">
      <div class="date">
        2021-01
        <i class="iconfont sort-down"></i>
      </div>
      <div class="money">
        <div class="spend">总支出 ¥350.00</div>
        <div class="income">总收入 ¥0.00</div>
      </div>
    </div>
  </div>
  <!-- 分类弹框 -->
  <van-popup v-model:show="showDate" position="bottom" round style="height:70%">
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
import { ref } from "vue";
export default {
  name: "Home",
  setup() {
    const showDate = ref(false);
    return {
      showDate
    };
  }
};
</script>
<style lang="less" scoped>
@import url("@/styles/custom.less");
.header {
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-top: 10px;
  background-color: #39be77;
}
.type {
  display: flex;
  // align-items: center;
  justify-content: center;
  width: 105px;
  height: 30px;
  color: #fff;
  font-size: 14px;
  padding: 5px;
  background-color: #50ca84;
  border-radius: 5px;
  .line {
    margin: 0 5px;
  }
}
.total {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
  margin-top: 10px;
  i {
    font-size: 12px;
  }
  .money {
    display: flex;
    .spend {
      margin: 0 10px;
    }
  }
}
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
<style lang="less">
@import url("@/styles/custom.less");
.van-tabbar-item--active {
  color: @primary!important;
}
</style>
