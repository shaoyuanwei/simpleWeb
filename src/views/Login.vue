<template>
  <div class="homepage-hero-module">
    <div class="login-container">
    </div>
    <div class="video-container">
      <!--      <div :style="fixStyle" class="filter"></div>-->
      <video class="video" :style="fixStyle" autoplay loop v-on:canplay="canplay" muted style="z-index: -1">
        <source :src="PATH_TO_MP4" type="video/mp4"/>
        浏览器不支持 video 标签，建议升级浏览器。
        <source :src="PATH_TO_WEBM" type="video/webm"/>
        浏览器不支持 video 标签，建议升级浏览器。
      </video>
      <div class="login-form" style="z-index: 100;">
        <!--标题-->
        <div class="login-title" style="color: #909399;">
          <span>登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
        </div>
        <!--表单-->
        <div>
          <el-form label-width="80px" :model="loginForm">
            <el-form-item label="账号" size="mini" style="width: 88%">
              <el-input v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" size="mini" style="width: 88%">
              <el-input v-model="loginForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item size="mini" style="margin-right: 15%; float: right;">
              <el-button type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mp4Path from "../assets/video/fate.mp4"
import webmPath from "../assets/video/fate.mp4"
import user from '@/store/modules/user'

export default {
  name: 'Login',
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: '',
      PATH_TO_MP4: '',
      PATH_TO_WEBM: '',
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  created() {
    window.addEventListener('hashchange', this.afterQRScan)

    this.PATH_TO_MP4 = mp4Path
    this.PATH_TO_WEBM = webmPath
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true
    },
    submitForm() {
      const res = user.actions.Login(11, this.loginForm)
      console.log(res);
      res.then(re => {
        if (re.result == 0) {
          this.$notify({
            title: '成功',
            message: '登陆成功',
            type: 'success'
          })
          this.$router.push("/")
        } else {
          this.$notify.error({
            title: '错误',
            message: re.message
          })
        }
        console.log(re);
      }).catch(err => {
        console.log(err);
      })
      // this.$router.push("/")
    },
  },
  mounted: function () {
    window.onresize = () => {
      // const windowWidth = document.body.clientWidth
      // const windowHeight = document.body.clientHeight
      // console.log(windowHeight, windowWidth);
      this.fixStyle = {
        // height: windowHeight / 16 + 'em',
        width: '100%',
        opacity: 0.3,
      }
    }
    window.onresize()
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;


    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
.login-form {
  border: 0.5px solid white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
  border-radius: 10px;
  width: 30%;
  height: 260px;
  margin: 200px auto;
  background-color: #F2F6FC;
}

.login-title {
  text-align: center;
  font-size: 20px;
  padding: 30px;
}

.video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: - 100;
  -webkit-filter: grayscale(20%);
}
</style>
