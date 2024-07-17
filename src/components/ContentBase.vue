<template>
  <div class="edge-container">
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
  </div>
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
.edge-container {
  background-image: url("../static/images/123.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.card-container {
  max-width: 400px;
  margin: 200px auto 0;
}
.card-header,
.card-body {
  text-align: center;
}
</style>
  