import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '@/components/UserLogin.vue';
import UserRegister from '@/components/UserRegister.vue';

const routes=[
    {
        path:"/",
        name:"UserLogin",
        component:UserLogin

    },
    {
        path: '/register',
        name: 'UserRegister',
        component: UserRegister
    }
];

const UserRouter = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default UserRouter