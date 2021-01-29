<template>
  <div class="header">
    <div class="type" @click="showType = true">
      <div>全部类型</div>
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
  <!-- 账单列表 -->
  <div class="account-wrap">
    <ul class="account-list">
      <li class="account-item">
        <div class="info">
          <div>2021-01-28</div>
          <div class="num">
            <span class="spend">支 0.00</span>
            <span>收 1000.00</span>
          </div>
        </div>
        <ul class="detail-list">
          <li class="detail">
            <div class="detail-item">
              <div class="top">
                <div>奖金</div>
                <div class="money">+1000.00</div>
              </div>
              <div class="time">10:34</div>
            </div>
          </li>
          <li class="detail">
            <div class="top">
              <div>奖金</div>
              <div class="money">+1000.00</div>
            </div>
            <div class="time">10:34</div>
          </li>
        </ul>
      </li>
      <li class="account-item">
        <div class="info">
          <div>2021-01-28</div>
          <div class="num">
            <span class="spend">支 0.00</span>
            <span>收 1000.00</span>
          </div>
        </div>
        <ul class="detail-list">
          <li class="detail">
            <div class="detail-item">
              <div class="top">
                <div>奖金</div>
                <div class="money">+1000.00</div>
              </div>
              <div class="time">10:34</div>
            </div>
          </li>
          <li class="detail">
            <div class="top">
              <div>奖金</div>
              <div class="money">+1000.00</div>
            </div>
            <div class="time">10:34</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <!-- 添加账单气泡 -->
  <div class="popover">
    <van-icon name="records" size="22" />
  </div>
  <!-- 分类弹框 -->
  <TypePopup v-model:showType="showType" />
</template>

<script>
import { ref } from "vue";
import TypePopup from "./components/TypePopup";
export default {
  name: "Home",
  components: {
    TypePopup
  },
  setup() {
    const showType = ref(false);
    return {
      showType
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
.account-wrap {
  min-height: calc(100vh - 80px);
  padding: 10px;
  background-color: #f5f5f5;
}
.account-list {
  .account-item {
    margin-bottom: 20px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    color: #666;
    font-size: 12px;
    padding: 0 15px;
    background-color: #f9f9f9;
    .num {
      span {
        display: inline-block;
      }
      .spend {
        margin-right: 20px;
      }
    }
  }
  .detail-list {
    .detail {
      height: 66px;
      color: #666;
      font-size: 14px;
      padding: 0 15px;
      background-color: #fff;
      .detail-item {
        border-bottom: 1px solid #f5f5f5;
      }
      .top {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        .money {
          color: #ecbe25;
          font-size: 16px;
        }
      }
      .time {
        margin: 10px 0;
      }
    }
  }
}
.popover {
  position: fixed;
  bottom: 100px;
  right: 20px;
  color: #39be77;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 52px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
}
</style>
<style lang="less">
@import url("@/styles/custom.less");
.van-tabbar-item--active {
  color: @primary!important;
}
</style>
