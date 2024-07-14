<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="lightgray"
  >
    <el-menu-item class="stu_icon" disabled> StudentManageSystem </el-menu-item>
    <el-menu-item index="1">
      <router-link class="e-link" :to="{ name: 'home' }">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2"
      ><router-link class="e-link" :to="{ name: 'studentinfo' }"
        >查看学生信息</router-link
      >
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="3">
      <template #title>学生登陆</template>
      <el-menu-item index="3-1"
        ><router-link class="e-link" :to="{ name: 'studentlogin' }"
          >学生登陆</router-link
        ></el-menu-item
      >
      <el-menu-item index="3-2"
        ><router-link class="e-link" :to="{ name: 'studentregister' }"
          >学生注册</router-link
        ></el-menu-item
      >
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>管理员登陆</template>
      <el-menu-item index="4-1"
        ><router-link class="e-link" :to="{ name: 'adminlogin' }"
          >管理员登陆</router-link
        ></el-menu-item
      >
      <el-menu-item index="4-2"
        ><router-link class="e-link" :to="{ name: 'adminregister' }"
          >管理员注册</router-link
        ></el-menu-item
      >
    </el-sub-menu>
  </el-menu>
</template>
  
<script lang="ts">
export default {
  name: "NavBar",
};
</script>
  
<style scoped>
.stu_icon {
  font-size: medium;
  color: red;
}

.img {
  width: 50%;
  height: 50%;
}

.flex-grow {
  flex-grow: 1;
}

.e-link {
  text-decoration: none;
  color: inherit;
}
</style>
  