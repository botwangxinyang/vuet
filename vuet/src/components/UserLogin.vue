<template>
    <div class="login-container">
        <h1>Login</h1>
        <el-input placeholder="请输入用户名" id="UserName"></el-input>
        <el-input placeholder="请输入密码" id="Password"></el-input>
        <el-button type="primary" round></el-button>
    </div>
    
</template>
<style scoped>
.login-container {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
</style>