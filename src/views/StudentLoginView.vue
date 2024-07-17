<template>
  <ContentBase>
    <template #header>
      <div>学生登录</div>
    </template>
    <template #body>
      <el-form class="form-container" :model="ruleForm" label-width="auto">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.username" placeholder="Please input" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="ruleForm.password" placeholder="Please input" />
        </el-form-item>
        <el-form-item class="form-buttons">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </template>
  </ContentBase>
</template>

<script lang="ts">
import { reactive } from "vue";
import { ElMessage } from "element-plus";
import ContentBase from "../components/ContentBase.vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "StudentLoginView",
  components: {
    ContentBase,
  },
  setup() {
    const router = useRouter();
    const ruleForm = reactive({
      username: "",
      password: "",
    });

    const submitForm = async () => {
      const url = "http://localhost:3000/users/studentlogin";
      const data = {
        username: ruleForm.username,
        password: ruleForm.password,
      };

      try {
        const response = await axios.post(url, data);
        const r = response.data;

        if (r.code === 200) {
          ElMessage({
            message: r.msg,
            type: "success",
          });
          router.push({ name: "home" }); // 跳转到学生信息页面
        } else {
          ElMessage.error(r.msg);
        }
      } catch (error) {
        console.error(error);
        ElMessage.error("登录失败，请稍后重试");
      }
    };

    return {
      ruleForm,
      submitForm,
    };
  },
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-buttons {
  display: flex;
  justify-content: center;
}
</style>
