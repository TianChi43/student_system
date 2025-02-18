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
    path: '/users/studentlogin/',
    name: 'studentlogin',
    component: StudentLoginView
  },
  {
    path: '/studeninfo/',
    name: 'studentinfo',
    component: StudentInfoView
  },
  {
    path: '/users/studentregister/',
    name: 'studentregister',
    component: StudentRegisterView
  },
  {
    path: '/users/adminlogin/',
    name: 'adminlogin',
    component: AdminLoginView
  },
  {
    path: '/users/adminregister/',
    name: 'adminregister',
    component: AdminRegisterView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
