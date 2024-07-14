<template>
  <el-card class="card-container">
    <template #header>
      <div class="card-header">
        <slot name="header"></slot>
      </div>
    </template>
    <template #default>
      <div class="card-body">
        <slot name="body"></slot>
      </div>
    </template>
  </el-card>
</template>
    
  <script>
export default {
  name: "ContentBase",
  props: {
    backgroundUrl: {
      type: String,
      default: "",
    },
  },
};
</script>
    
  <style scoped>
.card-container {
  max-width: 400px;
  margin: 200px auto 0;
}
.card-header,
.card-body {
  text-align: center;
}
</style>
  