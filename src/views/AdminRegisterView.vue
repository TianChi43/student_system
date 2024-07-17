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
          <el-input v-model="ruleForm.passward" placeholder="Please input" />
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
import ContentBase from "../components/ContentBase.vue";

export default {
  name: "AdminLoginView",
  components: {
    ContentBase,
  },
  setup() {
    const ruleForm = reactive({
      username: "",
      passward: "",
    });
    const submitForm = () => {
      console.log("Form submitted:", ruleForm);
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
