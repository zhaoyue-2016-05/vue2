<template>
  <div>
    <h2>Home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">新闻</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">消息</router-link>
        </li>
      </ul>
      <keep-alive include="NewsCom">
        <router-view>

        </router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCom",
  mounted() {
    console.log('HomeCom组件挂载完毕了')
  },
  beforeDestroy() {
    console.log('Home组件即将被销毁了')
  }
}
</script>

<style scoped>

</style>