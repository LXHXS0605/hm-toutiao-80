<template>
  <div ref="box" class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt="">
      <el-form  ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:236px;margin-right:10px"></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
           <el-button @click="login()" type="primary" style="width:100%">登 录</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    // 定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 第一位数字只能是一,第二位数组3-9 其余9位数组结尾
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不合法'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        // 给字段加验证
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'change' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入正确的验证码' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container{
  background: url(../../assets/images/div.jpg) no-repeat center / cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-card{
    width: 400px;
    height: 350px;
    position: absolute;
    left: 20%;
    top: 45%;
    transform: translate(-50%,-50%);
    img{
      width: 200px;
      display: block;
      margin: 0 auto 30px;
    }
  }
}
</style>
