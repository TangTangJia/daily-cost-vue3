<template>
  <div class="total">
    <div class="top">
      <div class="date">
        <div class="time">2021-01</div>
        <div class="line">|</div>
        <van-icon name="notes-o" />
      </div>
      <div>共支出</div>
      <div>¥350.00</div>
      <div>共收入</div>
    </div>
    <div class="center"></div>
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
  height: 185px;
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
}
</style>
