<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    label-width="auto"
    class="demo-ruleForm"
  >
    <el-form-item label="Password">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="Age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">Submit</el-button>
      <el-button @click="resetForm">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
    
  <script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";

const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const submitForm = () => {
  console.log("submit!", ruleForm);
};

const resetForm = () => {
  if (ruleFormRef.value) {
    ruleFormRef.value.resetFields();
  }
};
</script>
  
  <style scoped>
.demo-ruleForm {
  max-width: 600px;
}
</style>
  