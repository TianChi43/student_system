import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentLoginView from '../views/StudentLoginView.vue'
import StudentRegisterView from '../views/StudentRegisterView.vue'
import AdminLoginView from '../views/AdminLoginView.vue'
import AdminRegisterView from '../views/AdminRegisterView.vue'
import StudentInfoView from '../views/StudentInfoView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/studentlogin/',
    name: 'studentlogin',
    component: StudentLoginView
  },
  {
    path: '/studeninfo/',
    name: 'studentinfo',
    component: StudentInfoView
  },
  {
    path: '/studenregister/',
    name: 'studentregister',
    component: StudentRegisterView
  },
  {
    path: '/adminlogin/',
    name: 'adminlogin',
    component: AdminLoginView
  },
  {
    path: '/adminregister/',
    name: 'adminregister',
    component: AdminRegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
