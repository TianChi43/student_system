<template>
  <div class="HomeComponent">
    <div class="item">StudentManagementSystem</div>
    <div class="links">
      <a href="/users/adminlogin" class="a-link">管理员登陆</a>
      <a href="/users/studentlogin" class="a-link">学生登陆</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomeView",
};
</script>

<style scoped>
.HomeComponent {
  background-image: url("../static/images/2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  text-align: center;
}

.item {
  color: aliceblue;
  font-size: 80px;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.a-link {
  margin: 0 10px;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
}

.a-link:hover {
  text-decoration: underline;
}
</style>
