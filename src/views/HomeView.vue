<!-- <template>
  <div class="box">
    <div class="login">
      <h3 style="font-weight: 700; margin-bottom: 10px">ELADMIN后台管理系统</h3>

      <el-form :model="form" style="max-width: 600px">
        <el-form-item>
          <el-input v-model="form.name" :prefix-icon="UserFilled" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.name" :prefix-icon="Lock" />
        </el-form-item>
        <el-form-item>
          <div class="madie">
            <el-input v-model="form.name" :prefix-icon="SuccessFilled" />
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
import { reactive, ref } from 'vue'
const checked3 = ref(false)
const form = reactive({
  name: ''
})
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
}
.login {
  padding: 20px;
  background-color: #fff;
  color: black;
  width: 400px;
  text-align: center;
}
.el-button {
  width: 400px;
}
.el-input {
  height: 40px;
  margin-top: 5px;
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
</style> -->
<template>
  <div>12</div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped></style>
