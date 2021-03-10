<template>
  <el-container>
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container :style="conheight">
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-main>
        <app-main></app-main>
      </el-main>
      <el-footer>
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import AppMain from "@/views/layout/components/AppMain";
import Navbar from "@/views/layout/components/Navbar";
import Sidebar from "@/views/layout/components/Sidebar";
import AppFooter from "@/views/layout/components/AppFooter";

export default {
  name: "Layout",
  components: {AppFooter, Sidebar, Navbar, AppMain},
  data() {
    return {
      conheight: {
        height: ''
      }
    }
  },
  created() {
    window.addEventListener('resize', this.getHeight);
    this.getHeight()
  },
  methods: {
    getHeight() {
      this.conheight.height = window.innerHeight - 170 + 'px';
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>