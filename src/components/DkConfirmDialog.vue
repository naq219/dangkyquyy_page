<template>
  <el-dialog width="90%" :model-value="visible" @close="$emit('cancel')" title="Xác nhận đăng ký">

    <table>
      <tr valign="top">
        <td>Họ tên: <strong>{{ modelHovaten }}</strong></td>
      </tr>
      <tr>
        <td>SĐT: {{ form.sodienthoai }}</td>
      </tr>
      <tr>
        <td>Năm Sinh: {{ form.namsinh }}</td>
      </tr>
      <tr>
        <td>Giới Tính: {{ form.gioitinh }}</td>
      </tr>
      <tr>
        <td>ĐC Thường Trú: {{ fullAddressThuongTru }}</td>
      </tr>
      <tr>
        <td>Nơi ở hiện tại: {{ fullAddressTamTru }}</td>
      </tr>
    </table>

    <div style="margin-top: 1em;">
      <el-button type="primary" @click="$emit('submit')" :loading="submitting">Xác nhận</el-button>
      <el-button @click="$emit('cancel')">Hủy</el-button>
    </div>

  </el-dialog>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  form: { type: Object, required: true },
  modelHovaten: { type: String, default: '' },
  modelWard: { type: String, default: '' },
  modelProvince: { type: String, default: '' },
  modelWard11: { type: String, default: '' },
  modelProvince11: { type: String, default: '' },
  submitting: { type: Boolean, default: false }
})

defineEmits(['submit', 'cancel'])

const fullAddressThuongTru = computed(() =>
  props.form.sonhatt + ', ' + props.modelWard + ', ' + props.modelProvince
)

const fullAddressTamTru = computed(() =>
  props.form.sonhatt11 + ', ' + props.modelWard11 + ', ' + props.modelProvince11
)
</script>
