<template>
  <router-view />
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">明细</van-tabbar-item>
    <van-tabbar-item icon="search">统计</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const active = ref(0);
    const router = useRouter();
    const onChange = index => {
      const link = ["Home", "Total", "About"];
      router.push({ name: link[index] });
    };
    return {
      active,
      onChange
    };
  }
};
</script>
