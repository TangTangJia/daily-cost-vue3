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
      <div class="date" @click="showMonth = true">
        {{ date }}
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
      <li class="account-item" v-for="(v, i) in accountList" :key="i">
        <div class="info">
          <div>{{ v.date }}</div>
          <div class="num">
            <span class="spend">支 0.00</span>
            <span>收 1000.00</span>
          </div>
        </div>
        <ul class="detail-list">
          <li class="detail" v-for="sv in v.bills" :key="sv.id">
            <div class="detail-item">
              <div class="top">
                <div>{{ sv.type_name }}</div>
                <div class="money">{{ sv.amount }}</div>
              </div>
              <div class="time">{{ dayjs(sv.date).format("HH:mm") }}</div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <!-- 添加账单气泡 -->
  <div class="popover" @click="showAdd = true">
    <van-icon name="records" size="22" />
  </div>
  <!-- 分类弹框 -->
  <TypePopup v-model:showType="showType" @select="selectType" />
  <Month v-model:showMonth="showMonth" :isDate="false" @select="selectMonth" />
  <AddPopup v-model:showAdd="showAdd" @add="addAccount" />
</template>

<script>
import { reactive, ref, toRefs, onMounted } from "vue";
import TypePopup from "./components/TypePopup";
import Month from "@/components/Month";
import AddPopup from "./components/AddPopup";
import dayjs from "dayjs";
import $http from "@/util/request/api";
export default {
  name: "Home",
  components: {
    TypePopup,
    Month,
    AddPopup
  },
  setup() {
    const showType = ref(false);
    const showMonth = ref(false);
    const showAdd = ref(false);
    const data = reactive({
      dayjs: dayjs,
      date: dayjs(new Date()).format("YYYY-MM"),
      type: "all",
      accountList: []
    });

    onMounted(() => {
      getAcountList();
    });

    const selectMonth = value => {
      data.date = dayjs(value).format("YYYY-MM");
      getAcountList();
    };

    const selectType = value => {
      data.type = value === -1 ? "all" : value;
      getAcountList();
    };

    const format = v => {
      return dayjs(v).format("HH:mm");
    };

    // 获取账单列表
    const getAcountList = () => {
      $http
        .getAcountList({ date: data.date, type_id: data.type, page: 1 })
        .then(({ data: { list } }) => {
          data.accountList = list;
        });
    };

    const addAccount = () => {
      getAcountList();
    };
    return {
      showType,
      showMonth,
      showAdd,
      selectMonth,
      ...toRefs(data),
      getAcountList,
      selectType,
      format,
      addAccount
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
  padding: 10px 10px 50px 10px;
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
