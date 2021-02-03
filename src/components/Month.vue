<template>
  <van-popup :show="showMonth" @click-overlay="toggle" position="bottom" round style="height:45%">
    <van-datetime-picker v-model="currentDate" @cancel="toggle" type="year-month" title="选择年月" />
  </van-popup>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["showMonth"],
  setup(props, context) {
    const currentDate = ref("");
    const toggle = () => {
      context.emit("update:showMonth", false);
    };
    return {
      toggle,
      currentDate
    };
  }
};
</script>

<style lang="scss" scoped></style>
