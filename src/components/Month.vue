<template>
  <van-popup v-model:show="show" @click-overlay="toggle" position="bottom" round style="height:45%">
    <van-datetime-picker v-model="currentDate" @cancel="toggle" type="year-month" title="选择年月" />
  </van-popup>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  props: ["showMonth"],
  setup(props, context) {
    const { showMonth } = toRefs(props);
    const currentDate = ref("");
    const state = reactive({
      show: showMonth
    });
    const toggle = () => {
      context.emit("update:showMonth", false);
    };
    return {
      ...toRefs(state),
      toggle,
      currentDate
    };
  }
};
</script>

<style lang="scss" scoped></style>
