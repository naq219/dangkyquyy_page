<template>
  <div class="phapdanh-page">
    <h2 style="text-align: center; color: #005c70;">📿 Nhập Pháp Danh</h2>

    <!-- Bộ lọc giới tính -->
    <div class="filter-bar">
      <span style="margin-right: 0.5em;">Hiển thị:</span>
      <el-checkbox v-model="showNam" label="Nam" @change="applyFilter" />
      <el-checkbox v-model="showNu" label="Nữ" @change="applyFilter" />
      <span style="margin-left: auto; color: #999;">
        {{ filteredRows.length }} / {{ allRows.length }} người
      </span>
    </div>



    <div v-loading="loading" style="margin-top: 1em;">
      <div class="phapdanh-list">
        <div v-for="(row, idx) in filteredRows" :key="row.id" class="phapdanh-card">
          <div class="card-info">
            <span class="card-index">{{ idx + 1 }}.</span>
            <div class="card-details">
              <div class="card-name">{{ row.hovaten }}</div>
              <div class="card-meta">
                {{ row.gioitinh }} · {{ row.namsinh }} · {{ formatRelative(row.created_at) }}
              </div>
              <div v-if="row.ghichu" class="card-note">📝 {{ row.ghichu }}</div>
            </div>
          </div>
          <div class="card-input">
            <el-input
              v-model="row._phapdanh"
              placeholder="Nhập pháp danh..."
              size="default"
              @input="onPhapdanhChange(row)"
              clearable
            />
          </div>
        </div>
      </div>

      <div v-if="filteredRows.length === 0 && !loading" style="text-align: center; color: #999; padding: 2em;">
        Không có dữ liệu
      </div>
    </div>

    <!-- Nút lưu -->
    <div class="save-bar" v-if="dirtyCount > 0">
      <span>{{ dirtyCount }} pháp danh chưa lưu</span>
      <el-button type="primary" @click="saveAll" :loading="saving">
        💾 Lưu tất cả ({{ dirtyCount }})
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { getPhapdanhList, updatePhapdanhBatch } from '../composables/useTursoDb'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/vi'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.locale('vi')

function formatRelative(dateStr: string) {
  if (!dateStr) return '—'
  const d = dayjs.utc(dateStr).local()
  if (!d.isValid()) return '—'
  return d.fromNow()
}

// ====== Data ======
const allRows = ref<any[]>([])
const loading = ref(false)
const saving = ref(false)

// Giới tính filter
const showNam = ref(true)
const showNu = ref(true)

const filteredRows = computed(() => {
  return allRows.value.filter((r: any) => {
    if (showNam.value && showNu.value) return true
    if (showNam.value && r.gioitinh === 'Nam') return true
    if (showNu.value && r.gioitinh === 'Nữ') return true
    return false
  })
})

function applyFilter() {
  // Vue reactivity handles it automatically
}

// Track dirty (changed) rows
const dirtyIds = ref<Set<number>>(new Set())

const dirtyCount = computed(() => dirtyIds.value.size)

function onPhapdanhChange(row: any) {
  if (row._phapdanh !== row._originalPhapdanh) {
    dirtyIds.value.add(row.id)
  } else {
    dirtyIds.value.delete(row.id)
  }
  // Trigger reactivity
  dirtyIds.value = new Set(dirtyIds.value)
  // Debounce auto-save 3 giây sau khi nhập
  scheduleAutoSave()
}

async function loadData() {
  loading.value = true
  try {
    const rows = await getPhapdanhList() as any[]
    // Thêm _phapdanh (editable) và _originalPhapdanh (để track changes)
    allRows.value = rows.map((r: any) => ({
      ...r,
      _phapdanh: r.phapdanh || '',
      _originalPhapdanh: r.phapdanh || ''
    }))
    dirtyIds.value = new Set()
  } catch (e: any) {
    ElMessage.error('Lỗi tải dữ liệu: ' + (e.message || e))
  } finally {
    loading.value = false
  }
}

// ====== Save ======
async function saveAll() {
  const items = allRows.value
    .filter((r: any) => dirtyIds.value.has(r.id))
    .map((r: any) => ({ id: Number(r.id), phapdanh: r._phapdanh }))

  if (items.length === 0) return

  saving.value = true
  try {
    await updatePhapdanhBatch(items)
    // Cập nhật original values
    for (const r of allRows.value) {
      if (dirtyIds.value.has(r.id)) {
        r._originalPhapdanh = r._phapdanh
      }
    }
    dirtyIds.value = new Set()
    ElMessage.success(`Đã lưu ${items.length} pháp danh`)
  } catch (e: any) {
    ElMessage.error('Lỗi lưu: ' + (e.message || e))
  } finally {
    saving.value = false
  }
}

// ====== Auto-save debounce 3 giây sau khi nhập ======
let autoSaveTimeout: ReturnType<typeof setTimeout> | null = null

function scheduleAutoSave() {
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout)
  autoSaveTimeout = setTimeout(autoSave, 3000)
}

async function autoSave() {
  if (dirtyIds.value.size === 0) return

  const items = allRows.value
    .filter((r: any) => dirtyIds.value.has(r.id))
    .map((r: any) => ({ id: Number(r.id), phapdanh: r._phapdanh }))

  try {
    await updatePhapdanhBatch(items)
    for (const r of allRows.value) {
      if (dirtyIds.value.has(r.id)) {
        r._originalPhapdanh = r._phapdanh
      }
    }
    const count = dirtyIds.value.size
    dirtyIds.value = new Set()
    ElMessage.success(`✅ Tự động lưu ${count} pháp danh`)
  } catch (e) {
    console.warn('Auto-save error:', e)
  }
}

onMounted(() => {
  loadData()
})

onUnmounted(() => {
  if (autoSaveTimeout) clearTimeout(autoSaveTimeout)
})
</script>

<style scoped>
.phapdanh-page {
  max-width: 800px;
  margin: auto;
  padding: 1.5em;
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.75em 1em;
  background: #f5f7fa;
  border-radius: 8px;
  margin-top: 1em;
}

.phapdanh-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.phapdanh-card {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.75em 1em;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  transition: box-shadow 0.2s;
}

.phapdanh-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.card-info {
  display: flex;
  align-items: flex-start;
  gap: 0.5em;
  flex: 1;
  min-width: 0;
}

.card-index {
  color: #999;
  font-size: 0.85em;
  min-width: 2em;
}

.card-details {
  flex: 1;
  min-width: 0;
}

.card-name {
  font-weight: 600;
  color: #303133;
}

.card-meta {
  font-size: 0.85em;
  color: #909399;
  margin-top: 2px;
}

.card-note {
  font-size: 0.8em;
  color: #e6a23c;
  margin-top: 2px;
}

.card-input {
  width: 200px;
  flex-shrink: 0;
}

.save-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1em;
  background: #fff;
  border-top: 2px solid #409eff;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.auto-save-toast {
  position: fixed;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.6em 1.5em;
  background: #f0f9eb;
  color: #67c23a;
  border-radius: 8px;
  font-size: 0.9em;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 200;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .phapdanh-card {
    flex-direction: column;
    align-items: stretch;
  }
  .card-input {
    width: 100%;
  }
}
</style>
