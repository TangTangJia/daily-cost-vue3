<template>
  <van-popup :show="showAdd" @click-overlay="toggle" position="bottom" round style="height:62%">
    <div class="popup">
      <div class="top">
        <div class="btn-sure" @click="onSubmit">确定</div>
      </div>
      <div class="title">
        <div class="tabs">
          <div :class="{ active: type === 'expense' }" @click="changeType('expense')">支出</div>
          <div :class="{ active: type === 'income' }" @click="changeType('income')">收入</div>
        </div>
        <div class="date" @click="showMonth = true">
          {{ day }}
          <i class="iconfont sort-down"></i>
        </div>
      </div>
      <div class="money">
        <span class="sufix">¥</span>
        <span class="amount animation">{{ amount }}</span>
      </div>
      <!-- 支出类型 -->
      <ul class="type" v-if="type === 'expense'">
        <li v-for="v in expense" :key="v.id" @click="selectType(v.id, v.name)">
          <div :class="['type-icon', { active: currentId === v.id }]">
            <i :class="['iconfont', typeMap[v.id].icon]"></i>
          </div>
          <div class="type-name">{{ v.name }}</div>
        </li>
      </ul>
      <!-- 收入类型 -->
      <ul class="type" v-else>
        <li v-for="v in income" :key="v.id" @click="selectType(v.id, v.name)">
          <div :class="['type-icon', { now: currentId === v.id }]">
            <i :class="['iconfont', typeMap[v.id].icon]"></i>
          </div>
          <div class="type-name">{{ v.name }}</div>
        </li>
      </ul>
      <van-number-keyboard :show="true" extra-key="." @input="onInput" @delete="onDelete" />
    </div>
    <Month v-model:showMonth="showMonth" :isDate="true" @select="selectMonth" />
  </van-popup>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from "vue";
import { typeMap } from "@/util/global";
import $http from "@/util/request/api";
import Month from "@/components/Month";
import dayjs from "dayjs";
export default {
  props: ["showAdd"],
  components: {
    Month
  },
  setup(props, context) {
    const showMonth = ref(false);
    const state = reactive({
      type: "expense", // 账单类型
      typeMap: typeMap,
      currentId: 1,
      currentName: "餐饮",
      amount: "",
      expense: [],
      income: [],
      date: new Date(),
      day: dayjs(new Date()).format("MM-DD")
    });

    onMounted(() => {
      $http.getTypeList().then(({ data: { list } }) => {
        state.expense = list.filter(i => i.type == 1);
        state.income = list.filter(i => i.type == 2);
      });
    });

    const toggle = () => {
      context.emit("update:showAdd", false);
    };

    const changeType = type => {
      console.log(type);
      state.type = type;
      state.currentId = type === "expense" ? 1 : 11;
      state.currentName = type === "expense" ? "餐饮" : "工资";
    };

    const selectType = (id, name) => {
      state.currentId = id;
      state.currentName = name;
    };

    const selectMonth = value => {
      state.date = value;
      state.day = dayjs(value).format("MM-DD");
      console.log(value);
      console.log(state.day);
    };

    const onInput = v => {
      // 当输入的值为 '.' 且 已经存在 '.'，则不让其继续字符串相加。
      if (v == "." && state.amount.includes(".")) return;
      // 小数点后保留两位，当超过两位时，不让其字符串继续相加。
      if (
        v != "." &&
        state.amount.includes(".") &&
        state.amount &&
        state.amount.split(".")[1].length >= 2
      )
        return;
      state.amount += v;
    };

    const onDelete = () => {};
    // 提交账单
    const onSubmit = () => {
      const params = {
        amount: Number(state.amount).toFixed(2),
        type_id: state.currentId,
        type_name: state.currentName,
        date: dayjs(state.date).unix() * 1000,
        pay_type: state.payType == "expense" ? 1 : 2
      };
      $http.addAccount(params).then(() => {
        context.emit("add");
        toggle();
      });
    };

    return {
      toggle,
      showMonth,
      ...toRefs(state),
      changeType,
      selectType,
      onInput,
      onDelete,
      selectMonth,
      onSubmit
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
.type {
  display: flex;
  padding-bottom: 10px;
  margin: 0 30px;
  margin-top: 20px;
  overflow-x: auto;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  .type-icon {
    width: 32px;
    height: 32px;
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    line-height: 32px;
    background-color: #f5f5f5;
    border-radius: 50%;
    &.active {
      color: #fff;
      background-color: #39be77;
    }
    &.now {
      color: #fff;
      background-color: #ecbe25;
    }
  }
  .type-name {
    color: #666;
    font-size: 12px;
  }
}
</style>
