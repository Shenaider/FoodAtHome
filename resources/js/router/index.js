import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Dashboard from '../components/dashboard/Index.vue'
import SignIn from '../components/user/SignIn.vue'

const routes =  [
    {
        path: '/',
        name: 'home',
        component: Dashboard
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    }
];
export default new VueRouter({mode:'history',routes:routes})
