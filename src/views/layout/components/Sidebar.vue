<template>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template #title>分组一</template>
        <el-menu-item index="/">选项1</el-menu-item>
        <el-menu-item index="/about">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/about">
      <i class="el-icon-menu"></i>
      <template #title>导航二</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
name: "Sidebar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>