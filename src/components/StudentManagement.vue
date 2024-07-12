<template>
  <div class="logincontent">
    <div class="form-container">
      <div style="margin: 10px" />
      <el-row justify="center">
        <el-form
          label-width="auto"
          :model="formLabelAlign"
          class="centered-form"
          style="max-width: 600px"
        >
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="formLabelAlign.gender" placeholder="请选择">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="爱好">
            <el-input v-model="formLabelAlign.hobbies" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  name: "StudentManagement",
  setup() {
    const formLabelAlign = reactive({
      name: "",
      gender: "",
      hobbies: "",
    });
    const submitForm = () => {
      console.log("from submitted:", formLabelAlign);
      formLabelAlign.name = "";
      formLabelAlign.gender = "";
      formLabelAlign.hobbies = "";
    };
    return {
      submitForm,
      formLabelAlign,
    };
  },
};
</script>

<style scoped>
.logincontent {
  display: flex;
  flex-direction: column;
  background-image: url("../../static/images/2.jpg");
  background-size: cover; /* 使用 cover 使背景图片覆盖整个容器 */
  background-attachment: fixed; /* 背景图片固定 */
  background-position: center; /* 背景图片居中 */
  width: 100%;
  height: 100vh; /* 使用视口高度 */
  min-width: 900px;
  min-height: 1000px;
  box-sizing: border-box; /* 确保内边距和边框包含在元素总宽度和高度中 */
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 使用视口高度 */
  width: 100%; /* 占满整个宽度 */
}

.centered-form {
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 30px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.el-form-item {
  margin-bottom: 20px;
  text-align: center;
}
</style>
