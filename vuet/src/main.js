import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import UserRouter from './router/UserRouter';
import axios from 'axios';
const app = createApp(App);
axios.defaults.baseURL='http://localhost:8088/api';
app.config.globalProperties.$axios=axios;
app.use(ElementPlus);
app.use(UserRouter);
app.mount('#app');

