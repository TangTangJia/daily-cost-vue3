<template>
  <van-popup :show="showMonth" @click-overlay="toggle" position="bottom" round style="height:45%">
    <van-datetime-picker
      v-model="currentDate"
      @cancel="toggle"
      @confirm="confirm"
      :type="isDate ? 'date' : 'year-month'"
      title="选择年月"
    />
  </van-popup>
</template>

<script>
import { ref } from "vue";
// import dayjs from "dayjs";
export default {
  props: ["showMonth", "isDate"],
  emits: ["select", "update:showMonth"],
  setup(props, context) {
    const currentDate = ref(new Date());
    const toggle = () => {
      context.emit("update:showMonth", false);
    };
    const confirm = value => {
      console.log(value);
      context.emit("select", value);
      toggle();
    };
    return {
      toggle,
      currentDate,
      confirm
    };
  }
};
</script>
