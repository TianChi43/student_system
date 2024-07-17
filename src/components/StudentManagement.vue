<template>
  <div>
    <el-table :data="paginatedData" style="width: 100%">
      <el-table-column label="Username" prop="username" />
      <el-table-column label="Password" prop="password" />
      <el-table-column align="right">
        <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
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
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="filterTableData.length"
      layout="prev, pager, next"
    />
  </div>
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
    const currentPage = ref(1);
    const pageSize = ref(5);

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

    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize.value;
      const end = start + pageSize.value;
      return filterTableData.value.slice(start, end);
    });

    const handleCurrentChange = (page: number) => {
      currentPage.value = page;
    };

    const handleEdit = (index: number, row: User) => {
      console.log(index, row);
    };

    const handleDelete = (index: number, row: User) => {
      console.log(index, row);
    };

    return {
      search,
      filterTableData,
      paginatedData,
      currentPage,
      pageSize,
      handleCurrentChange,
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
