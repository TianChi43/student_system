<template>
  <ContentBase>
    <template #header>
      <div>管理员注册</div>
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
          <el-button type="primary" @click="submitForm">注册</el-button>
        </el-form-item>
      </el-form>
    </template>
  </ContentBase>
</template>

<script lang="ts">
import { reactive } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import ContentBase from "../components/ContentBase.vue";

export default {
  name: "AdminRegisterView",
  components: {
    ContentBase,
  },
  setup() {
    const ruleForm = reactive({
      username: "",
      password: "",
    });

    const submitForm = async () => {
      const url = "http://localhost:3000/users/adminregister";
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
        } else {
          ElMessage.error(r.msg);
        }
      } catch (error) {
        console.error(error);
        ElMessage.error("注册失败，请稍后重试");
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
