<template>
  <el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="Username" prop="username" />
    <el-table-column label="Password" prop="password" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { computed, ref, onMounted } from "vue";
import axios from "axios";

interface User {
  username: string;
  password: string;
}

export default {
  name: "StudentManagement",
  setup() {
    const search = ref("");
    const tableData = ref<User[]>([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/studentinfo/"
        );
        if (response.data.code === 200) {
          tableData.value = response.data.data;
          console.log("Fetched data:", tableData.value);
        } else {
          console.error("Failed to fetch data:", response.data.msg);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData().catch((error) => {
        console.error("Error on mounting:", error);
      });
    });

    const filterTableData = computed(() =>
      tableData.value.filter(
        (data) =>
          !search.value ||
          data.username.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const handleEdit = (index: number, row: User) => {
      console.log(index, row);
    };

    const handleDelete = (index: number, row: User) => {
      console.log(index, row);
    };

    return {
      search,
      filterTableData,
      handleEdit,
      handleDelete,
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
