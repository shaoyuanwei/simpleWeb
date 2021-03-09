<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button type="primary" size="mini" @click="click">hello world</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import user from '@/store/modules/user'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    click() {
      user.actions.Login(11, 111);
    }
  }
}
</script>
