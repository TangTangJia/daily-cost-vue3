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
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
