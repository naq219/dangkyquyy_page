<template>
  <!-- ========== LOGIN ========== -->
  <div v-if="!isLoggedIn" class="login-wrapper">
    <div class="login-box">
      <h2 style="text-align: center; color: #005c70; margin-bottom: 1.5em;">🔐 Admin - Đăng ký Quy Y</h2>
      <el-form @submit.prevent="doLogin">
        <el-form-item label="Tài khoản">
          <el-input v-model="loginUser" placeholder="Username" />
        </el-form-item>
        <el-form-item label="Mật khẩu">
          <el-input v-model="loginPass" type="password" placeholder="Password" show-password
            @keyup.enter="doLogin" />
        </el-form-item>
        <p v-if="loginError" style="color: #dc3545; margin-bottom: 1em;">{{ loginError }}</p>
        <el-button type="primary" @click="doLogin" style="width: 100%;">Đăng nhập</el-button>
      </el-form>
    </div>
  </div>

  <!-- ========== DASHBOARD ========== -->
  <div v-else class="admin-dashboard">
    <div class="admin-header">
      <h2 style="margin: 0;">📋 Danh sách đăng ký Quy Y</h2>
      <div class="admin-actions">
        <el-button @click="loadData" :loading="loading" type="primary">
          🔄 Tải lại
        </el-button>
        <el-button @click="exportExcel" type="success" :disabled="rows.length === 0">
          📥 Xuất Excel ({{ rows.length }})
        </el-button>
        <el-button @click="doLogout" type="info" plain>Đăng xuất</el-button>
      </div>
    </div>

    <p v-if="loadError" style="color: #dc3545;">{{ loadError }}</p>
    <p style="color: #999; margin: 0.5em 0;">Tổng: <strong>{{ rows.length }}</strong> đăng ký</p>

    <el-table :data="rows" v-loading="loading" stripe border style="width: 100%; margin-top: 1em;"
      :default-sort="{ prop: 'id', order: 'descending' }" max-height="70vh">
      <el-table-column prop="id" label="ID" width="60" sortable />
      <el-table-column prop="hovaten" label="Họ tên" min-width="150" sortable />
      <el-table-column prop="namsinh" label="Năm sinh" width="100" sortable />
      <el-table-column prop="gioitinh" label="Giới tính" width="90" />
      <el-table-column prop="sodienthoai" label="SĐT" width="120" />
      <el-table-column prop="diachithuongtru" label="ĐC thường trú" min-width="200" show-overflow-tooltip />
      <el-table-column prop="diachitamtru" label="Nơi ở hiện tại" min-width="200" show-overflow-tooltip />
      <el-table-column prop="nguoigioithieu" label="Người giới thiệu" min-width="150" show-overflow-tooltip />
      <el-table-column prop="ghichu" label="Ghi chú" min-width="120" show-overflow-tooltip />
      <el-table-column prop="created_at" label="Thời gian" width="170" sortable />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getAllRegistrations } from '../composables/useTursoDb'
import * as XLSX from 'xlsx'

// ====== Login ======
const ADMIN_USER = 'admin'
const ADMIN_PASS = 'vienquang2024'

const isLoggedIn = ref(false)
const loginUser = ref('')
const loginPass = ref('')
const loginError = ref('')

// Check session
if (sessionStorage.getItem('admin_logged_in') === 'true') {
  isLoggedIn.value = true
}

function doLogin() {
  loginError.value = ''
  if (loginUser.value === ADMIN_USER && loginPass.value === ADMIN_PASS) {
    isLoggedIn.value = true
    sessionStorage.setItem('admin_logged_in', 'true')
    loadData()
  } else {
    loginError.value = 'Sai tài khoản hoặc mật khẩu!'
  }
}

function doLogout() {
  isLoggedIn.value = false
  sessionStorage.removeItem('admin_logged_in')
  loginUser.value = ''
  loginPass.value = ''
}

// ====== Data ======
const rows = ref<any[]>([])
const loading = ref(false)
const loadError = ref('')

async function loadData() {
  loading.value = true
  loadError.value = ''
  try {
    rows.value = await getAllRegistrations() as any[]
  } catch (e: any) {
    loadError.value = 'Lỗi tải dữ liệu: ' + (e.message || e)
    console.error(e)
  } finally {
    loading.value = false
  }
}

// ====== Excel Export ======
function exportExcel() {
  const exportData = rows.value.map((r: any) => ({
    'ID': r.id,
    'Họ tên': r.hovaten,
    'Năm sinh': r.namsinh,
    'Giới tính': r.gioitinh,
    'SĐT': r.sodienthoai,
    'ĐC thường trú': r.diachithuongtru,
    'ĐC tạm trú': r.diachitamtru,
    'Tỉnh tạm trú': r.tinhtamtru,
    'Sinh hoạt đạo tràng': r.dasinhhoatdaotrang,
    'Người giới thiệu': r.nguoigioithieu,
    'Ghi chú': r.ghichu,
    'Phiên bản': r.web_version,
    'Thời gian': r.created_at
  }))

  const ws = XLSX.utils.json_to_sheet(exportData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, 'Đăng ký Quy Y')

  // Auto column width
  const colWidths = Object.keys(exportData[0] || {}).map(key => ({
    wch: Math.max(key.length, ...exportData.map((r: any) => String(r[key] || '').length))
  }))
  ws['!cols'] = colWidths

  const now = new Date()
  const filename = `DangKy_QuyY_${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}.xlsx`
  XLSX.writeFile(wb, filename)
}

// ====== Lifecycle ======
onMounted(() => {
  if (isLoggedIn.value) {
    loadData()
  }
})
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #25497e 0%, #1a3a5c 100%);
}

.login-box {
  background: #fff;
  padding: 2em;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  margin: 1em;
}

.admin-dashboard {
  padding: 1.5em;
  max-width: 1400px;
  margin: auto;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 0.5em;
}

.admin-actions {
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}
</style>
