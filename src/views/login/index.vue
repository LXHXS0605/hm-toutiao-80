<template>
    <div class="container">
        <el-card class="my-card">

             <img src="../../assets/images/logo_index.png" alt="">
        <el-from :model="loginFrom">
          <el-from-item>
            <el-input v-model="loginFrom.mobile" placeholder="请输入手机号"></el-input>
          </el-from-item>
          <el-from-item >
            <el-input v-model="loginFrom.code" placeholder="请输入验证码" style="width:230px;margin-right:15px;margin-top:30px;"></el-input>
            <el-button>发送验证码</el-button>
          </el-from-item>
          <el-from-item>
          <el-checkbox v-model="checked" style="margin-top:30px;">我已阅读并接受用户协议和隐私条款</el-checkbox>
          </el-from-item>
          <el-from-item>
            <el-button type="primary" style="width:100%;margin-top:20px">登录</el-button>
            </el-from-item>
        </el-from>
        </el-card>

    </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      loginFrom: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-card{
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    img{
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
