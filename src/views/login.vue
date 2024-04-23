<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="box">
    <div class="login">
      <h3 style="color: #707070; margin-bottom: 10px">ELADMIN后台管理系统</h3>
      <el-form :model="form" style="max-width: 600px">
        <el-form-item>
          <el-input v-model="form.username" :prefix-icon="UserFilled" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" :prefix-icon="Lock" show-password />
        </el-form-item>
        <el-form-item>
          <div class="madie">
            <el-input v-model="form.code" :prefix-icon="SuccessFilled" />
            <img src="../../public/5c94b8caf6081407e17701022db0c46c.png" alt="" />
          </div>
        </el-form-item>
        <el-form-item>
          <p><el-checkbox v-model="checked3" label="记住我" /></p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UserFilled, Lock, SuccessFilled } from '@element-plus/icons-vue'
// import type { FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
const checked3 = ref(false)
const form = reactive({
  username: '',
  password: '',
  code: ''
})
// const rules = reactive<FormRules<RuleForm>>({
//   username: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
//   password: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }],
//   code: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }]
// })
const onSubmit = () => {
  console.log('submit!')
}
</script>
<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  background-image: url(../../public/background.jpeg);
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    color: black;
    width: 400px;
    text-align: center;
    .el-button {
      width: 400px;
    }
    .el-input {
      height: 40px;
      margin-top: 5px;
      color: black;
    }
    .madie {
      display: flex;
      img {
        height: 40px;
        margin-left: 20px;
        margin-top: 5px;
        width: 120px;
      }
    }
  }
}
</style>
