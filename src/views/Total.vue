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
      <div class="center-title">
        <div>收支构成</div>
        <div>
          <div>支出</div>
          <div>收入</div>
        </div>
      </div>
    </div>
    <div class="charts"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.total {
  min-height: 100vh;
  background-color: #f5f5f5;
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
  height: 170px;
  background-color: #fff;
  margin-top: 10px;
}
</style>
