<template>
  <van-popup :show="showType" @click-overlay="toggle" position="bottom" round style="height:70%">
    <div class="prop">
      <div :class="['item', { active: currentId === -1 }]" @click="selectType(-1)">全部类型</div>
      <div class="spend">
        <div class="title">支出</div>
        <ul class="list">
          <li
            :class="['item', { active: currentId === v.id }]"
            v-for="v in expense"
            :key="v.id"
            @click="selectType(v.id)"
          >{{ v.name }}</li>
        </ul>
      </div>
      <div class="income">
        <div class="title">收入</div>
        <ul class="list">
          <li
            :class="['item', { active: currentId === v.id }]"
            v-for="v in income"
            :key="v.id"
            @click="selectType(v.id)"
          >{{ v.name }}</li>
        </ul>
      </div>
    </div>
  </van-popup>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import $http from "@/util/request/api";
export default {
  props: ["showType"],
  setup(props, context) {
    const data = reactive({
      currentId: -1,
      expense: [],
      income: []
    });

    onMounted(() => {
      $http.getTypeList().then(({ data: { list } }) => {
        data.expense = list.filter(i => i.type == 1);
        data.income = list.filter(i => i.type == 2);
      });
    });

    const toggle = () => {
      context.emit("update:showType", false);
    };

    const selectType = v => {
      data.currentId = v;
      context.emit("select", v);
      toggle();
    };

    return {
      // ...toRefs(state),
      toggle,
      ...toRefs(data),
      selectType
    };
  }
};
</script>

<style lang="less" scoped>
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
    &.active {
      color: #fff;
      background-color: #39be77;
    }
  }
}
</style>
