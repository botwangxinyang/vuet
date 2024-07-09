<template>
    <div class="contain">
        <div class="register-container">
            <h1>Register</h1>
            <el-form ref="registerFormRef" v-model="registerForm">
                <el-form-item label="userName" prop="userName">
                    <el-input placeholder="请输入用户名" v-model="registerForm.userName" class="Input-Content"></el-input>   
                </el-form-item>
                <el-form-item label="password" prop="password">
                    <el-input placeholder="请输入密码" v-model="registerForm.password" class="Input-Content"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
    name: 'UserRegister',
    setup() {
        const registerForm=ref({
            userName:"",
            password:""
        });


        return{
            registerForm,
        }

    }
})
</script>

<style scoped>
.contain{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.register-container {
    position: relative;
    max-width: 300px;
    margin: 20px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
.Input-Content{
    margin:10px;
  }
</style>