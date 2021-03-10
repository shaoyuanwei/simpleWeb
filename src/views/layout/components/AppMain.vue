<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- 在这里映射不同的路由到Layout中的app-main -->
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>

export default {
  name: "AppMain",
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>