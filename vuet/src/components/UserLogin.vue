<template>
    <div class="container">
        <img alt="Login logo" src="../assets/Login_page.png" class="logo">
        <div class="login-container">
            <h1>Login</h1>
            <el-form ref="LoginFormRef" :model="LoginForm" :rules="rules"> 
                <el-form-item label="Username" prop="username">
                    <el-input placeholder="请输入用户名" v-model="LoginForm.username" class="Input-Content"></el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password">
                    <el-input placeholder="请输入密码" v-model="LoginForm.password" class="Input-Content"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" round class="Login-Button" @click="submitForm">Login</el-button>
                </el-form-item>
            </el-form>
            
            <div class="register">Register new account</div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref} from 'vue'
export default defineComponent({
  setup() {
    const LoginForm = ref({
      username: '',
      password: ''
    });    
    const rules = {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
        ]
    };

    const submitForm = () => {
      console.log(LoginForm.value); 
    };
    return {
      LoginForm,
      rules,
      submitForm
    };
  }
});
</script>

<style scoped>
.container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.login-container {
    position: relative;
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .Login-Button{
    display: block;
    margin: 0 auto;
  }
  .Input-Content{
    margin:10px;
  }
  .register{
    position:absolute;
    margin:10px;
    font-size: small;
    color: blue;
    left:0;
    bottom:0;
  }
  .logo{
    width: 300px;
    height: 200px;

  }
</style>