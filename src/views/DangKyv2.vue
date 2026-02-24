<template>

  <el-button style="padding: 1em;" v-if="false" @click="clickDangKyMoi"> ĐĂNG KÝ MỚI</el-button>
  <p style="padding: 1em; color: #df1919;" v-if="clickSubmited"> </p>
  <p v-if="submitError" class="submit-error">{{ submitError }}</p>

  <div v-if="!clickSubmited" class="wrap2">

    <svg id="radar-circle">
      <circle cx="50%" cy="30%" r="0" fill-opacity="0" stroke="#ffffff51" stroke-width="2px" stroke-opacity="1">
        <animate attributeName="r" from="300" to="915" dur="20s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" from="1" to="0" dur="30s" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="50%" cy="30%" r="0" fill-opacity="0" stroke="#ffffff51" stroke-width="2px" stroke-opacity="1">
        <animate attributeName="r" from="0" to="915" dur="13s" repeatCount="indefinite" begin="0.75s" />
        <animate attributeName="stroke-opacity" from="1" to="0" dur="33s" repeatCount="indefinite" begin="0.75s">
        </animate>
      </circle>
      <circle cx="50%" cy="45%" r="0" fill-opacity="0" stroke="#ffffff51" stroke-width="2px" stroke-opacity="1">
        <animate attributeName="r" from="0" to="915" dur="23s" repeatCount="indefinite" begin="1.5s" />
        <animate attributeName="stroke-opacity" from="1" to="0" dur="23s" repeatCount="indefinite" begin="1.5s">
        </animate>
      </circle>
    </svg>

    <p
      style="color:#ffffff; text-align: center; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold ; margin: 2%; font-size: 2em;
            text-shadow: 1px 1px 2px black, 0 0 25px rgb(255, 255, 255), 0 0 5px darkblue;">
      <strong>CHÙA VIÊN QUANG</strong>
    </p>
    <div class="form_in1">
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2
              style="color:#005c70; font-stretch: expanded; font-weight: 545; font-style: inherit; text-align: center;">
              ĐĂNG KÝ QUY Y TAM BẢO (v2 - Turso)<br><br>
            </h2>
          </div>
          <div class="row clearfix">
            <div class="parent d-flex justify-content-center">

              <!-- ========== Form nhập liệu ========== -->
              <el-form-item label="Họ và tên">
                <el-input v-model="modelHovaten" placeholder="Vui lòng viết hoa chữ cái đầu tiên" />
              </el-form-item>

              <el-form-item label="Năm Sinh">
                <el-input type="number" v-model="form.namsinh" placeholder="Chỉ nhập năm sinh, ví dụ 2020" />
              </el-form-item>

              <el-form-item label="Giới tính">
                <el-radio-group v-model="form.gioitinh">
                  <el-radio label="Nam" />
                  <el-radio label="Nữ" />
                </el-radio-group>
              </el-form-item>

              <el-form-item label="Số điện thoại">
                <el-input type="tel" v-model="form.sodienthoai" />
              </el-form-item>

              <!-- ========== Địa chỉ thường trú ========== -->
              <div class="group1">
                <div style="display: flex;">
                  <p class="p_titlegroup">Địa chỉ thường trú*</p>
                  <p style="margin-left: 0.4em;"> (Theo CCCD)</p>
                </div>

                <el-link v-if="savedAddress" @click="useSavedAddress" class="saved-address-link">
                  <el-icon><Download /></el-icon> . Dùng lại: {{ savedAddressDisplay }}
                </el-link>

                <div class="quick-provinces"
                  style="margin: 4px 0 8px; display: flex; flex-wrap: wrap; align-items: center;">
                  <div class="test1">
                    <p @click="addr.selectQuickProvince('Tỉnh Nghệ An')">Nghệ An</p>
                    <p @click="addr.selectQuickProvince('Tỉnh Hà Tĩnh')">Hà Tĩnh</p>
                    <p @click="addr.selectQuickProvince('Tỉnh Thanh Hóa')">Thanh Hoá</p>
                    <p @click="addr.selectQuickProvince('Thành phố Đà Nẵng')">Đà Nẵng</p>
                    <p @click="addr.selectQuickProvince('Tỉnh Thừa Thiên Huế')">Huế</p>
                  </div>
                </div>

                <el-form-item style="margin-top: 0.1em;">
                  <el-autocomplete id="province-input" ref="addr.provinceRef" placeholder="Tỉnh/TP"
                    v-model="addr.modelProvince.value" :fetch-suggestions="addr.querySearchP" fit-input-width clearable
                    class="inline-input auto1" @select="addr.handleSelect" @focus="addr.handleFocusInput">
                  </el-autocomplete>
                </el-form-item>

                <el-form-item label="">
                  <el-autocomplete id="ward-input" ref="addr.wardRef" class="inline-input auto1" placeholder="Phường/Xã"
                    v-model="addr.modelWard.value" :fetch-suggestions="addr.querySearchW" fit-input-width clearable
                    @select="addr.handleSelectW" @focus="addr.handleFocusInput">
                  </el-autocomplete>
                </el-form-item>

                <el-text v-show="form.sonhatt.length > 0" class="ketqua">đc đầy đủ:</el-text>
                <el-text v-show="form.sonhatt.length > 0"
                  v-text="form.sonhatt + ', ' + addr.modelWard.value + ', ' + addr.modelProvince.value"
                  class="ketqua"></el-text>
                <el-input v-model="form.sonhatt" placeholder="Nhập Số nhà, Ngõ, tên đường, thôn xóm..." />
              </div>

              <!-- ========== Nơi ở hiện tại ========== -->
              <div class="group1">
                <p class="p_titlegroup">Nơi ở hiện tại*</p>

                <el-link @click="copyAddress"
                  style="padding: 0.2em; border-radius: 0.1em; border-color: #0087a5; border-width: 0.1em; border-style: solid;"
                  class="mx-1" type="primary">
                  <el-icon><Download /></el-icon> . Lấy từ địa chỉ thường trú
                </el-link>

                <el-form-item>
                  <el-autocomplete placeholder="Tỉnh/Thành Phố" v-model="addr.modelProvince11.value"
                    :fetch-suggestions="addr.querySearchP11" fit-input-width clearable class="inline-input auto1"
                    @select="addr.handleSelect11" @focus="addr.handleFocusInput">
                  </el-autocomplete>
                </el-form-item>

                <el-form-item>
                  <el-autocomplete placeholder="Phường/Xã" v-model="addr.modelWard11.value"
                    :fetch-suggestions="addr.querySearchW11" fit-input-width clearable @select="addr.handleSelectW11"
                    class="inline-input w-50 auto1" @focus="addr.handleFocusInput"> </el-autocomplete>
                </el-form-item>

                <el-text v-show="form.sonhatt11.length > 0" class="ketqua">đc đầy đủ:</el-text>
                <el-text v-show="form.sonhatt11.length > 0"
                  v-text="form.sonhatt11 + ', ' + addr.modelWard11.value + ', ' + addr.modelProvince11.value"
                  class="ketqua"></el-text>
                <el-input v-model="form.sonhatt11" placeholder="Nhập Số nhà, Ngõ, tên đường, thôn xóm..." />
              </div>

              <!-- ========== Đạo tràng ========== -->
              <div class="group1">
                <p class="p_titlegroup">Quý Phật tử Đã tham gia sinh hoạt Đạo Tràng, Chúng Thanh Niên chưa ạ?</p>
                <el-radio-group v-model="form._rdDathamGiaDaoTrang">
                  <el-radio :label="0">Chưa Tham Gia</el-radio>
                  <el-radio :label="1">Đã tham gia</el-radio>
                </el-radio-group>
                <el-input v-show="false" class="margintop1em" v-model="form._tentochucdathamgia"
                  placeholder="Nhập tên Đạo Tràng, CTN đã tham gia" />

                <div v-if="form._rdDathamGiaDaoTrang == 0">
                  <p class="p_titlegroup">Quý Phật tử có mong muốn tham gia sinh hoạt Đạo tràng/CTN không ạ?</p>
                  <el-radio-group v-model="form._rdMongMuonThamGiaDT">
                    <el-radio label='Có Muốn tham gia'>Có Muốn tham gia</el-radio>
                    <el-radio label='Không muốn tham gia'>Không muốn tham gia</el-radio>
                  </el-radio-group>
                </div>
              </div>

              <!-- ========== Người giới thiệu ========== -->
              <div class="group1">
                <p class="p_titlegroup">Người giới thiệu (nên có SĐT)</p>
                <p v-if="!savedNguoiGioiThieu" class="ss">VD: Hòa Lý Anh - 0338 699 484</p>

                <el-link v-if="savedNguoiGioiThieu" @click="useSavedNguoiGioiThieu"
                  style="max-width: 100%; display: inline-block; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; padding: 0.2em;"
                  class="mx-1" type="primary">
                  <el-icon><Download /></el-icon> . {{ savedNguoiGioiThieu }}
                </el-link>
                <br v-if="savedNguoiGioiThieu">
                <el-text v-if="savedNguoiGioiThieu" class="ss">☝️Click phía trên để dùng lại</el-text>

                <el-input class="margintop1em" v-model="form.nguoigioithieu"
                  placeholder="Hãy nhập người giới thiệu" />
              </div>

              <!-- ========== Ghi chú ========== -->
              <div class="group1">
                <p class="p_titlegroup">Thắc mắc, ghi chú2</p>
                <el-input class="margintop1em" v-model="form.ghichu" placeholder="" />
              </div>

              <!-- ========== Nút đăng ký ========== -->
              <div class="margintop1em">
                <el-button type="primary" @click="clickDangKy">Đăng Ký</el-button>
                <el-button>Hủy</el-button>
              </div>

              <p style="height: 20em;">.</p>

            </div>
          </div>
        </div>
      </div>
    </div>

    <p style="font-size: 0.7em; color: rgb(141, 175, 175); width: 100%; text-align: center; margin: 0.3em;">
      version {{ form.webversion }} - Turso
    </p>
  </div>

  <!-- Dialog xác nhận -->
  <DkConfirmDialog :visible="dialogConfirmVisible" :form="form" :modelHovaten="modelHovaten"
    :modelWard="addr.modelWard.value" :modelProvince="addr.modelProvince.value"
    :modelWard11="addr.modelWard11.value" :modelProvince11="addr.modelProvince11.value" :submitting="submitting"
    @submit="submitDk" @cancel="dialogConfirmVisible = false" />

  <!-- Dialog kết quả -->
  <el-dialog width="90%" v-model="resultDialogVisible" :title="submitSuccess ? '✅ Đăng ký thành công!' : '❌ Đăng ký không thành công'" :close-on-click-modal="false">
    <!-- Thành công -->
    <div v-if="submitSuccess && submitResult">
      <p style="color: #28a745; font-weight: bold; margin-bottom: 1em;">Dữ liệu đã được lưu thành công vào hệ thống (ID: {{ submitResult.insertedId?.toString() }})</p>
      <table v-if="submitResult.insertedRow" style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">Họ tên:</td><td style="padding: 6px; border-bottom: 1px solid #eee; font-weight: bold;">{{ submitResult.insertedRow.hovaten }}</td></tr>
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">SĐT:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">{{ submitResult.insertedRow.sodienthoai }}</td></tr>
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">Năm sinh:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">{{ submitResult.insertedRow.namsinh }}</td></tr>
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">Giới tính:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">{{ submitResult.insertedRow.gioitinh }}</td></tr>
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">ĐC thường trú:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">{{ submitResult.insertedRow.diachithuongtru }}</td></tr>
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">Nơi ở hiện tại:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">{{ submitResult.insertedRow.diachitamtru }}</td></tr>
        <tr><td style="padding: 6px; border-bottom: 1px solid #eee;">Thời gian:</td><td style="padding: 6px; border-bottom: 1px solid #eee;">{{ submitResult.insertedRow.created_at }}</td></tr>
      </table>
      <div style="margin-top: 1em;">
        <el-button type="primary" @click="clickDangKyMoi">Đăng ký người khác</el-button>
      </div>
    </div>

    <!-- Thất bại -->
    <div v-else>
      <p style="color: #dc3545; margin-bottom: 0.5em;">Không thể lưu đăng ký. Vui lòng thử lại.</p>
      <p style="color: #666; font-size: 0.9em;">Nguyên nhân: {{ submitError }}</p>
      <div style="margin-top: 1em;">
        <el-button type="primary" @click="resultDialogVisible = false; dialogConfirmVisible = true">Thử lại</el-button>
        <el-button @click="resultDialogVisible = false">Đóng</el-button>
      </div>
    </div>
  </el-dialog>

</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useCookies } from "vue3-cookies"
import { myUtils } from '../utils/myUtils'
import { useAddressForm } from '../composables/useAddressForm'
import { insertRegistration, type RegistrationData } from '../composables/useTursoDb'
import DkConfirmDialog from '../components/DkConfirmDialog.vue'
import { sendTelegramNotification } from '../composables/useTelegram'
import { Download } from '@element-plus/icons-vue'

// ====== Composables ======
const addr = useAddressForm()
const myUtils0 = new myUtils()
const useCookie = useCookies()

// ====== State ======
const clickSubmited = ref(false)
const dialogConfirmVisible = ref(false)
const resultDialogVisible = ref(false)
const submitting = ref(false)
const submitError = ref('')
const submitSuccess = ref(false)
const submitResult = ref<any>(null)
const modelHovaten = ref('')
const savedNguoiGioiThieu = ref('')
const savedAddress = ref<any>(null)
const savedAddressDisplay = ref('')

// ====== Form ======
const form = reactive({
  webversion: 'ver12.0-turso',
  gioitinh: '',
  sodienthoai: '',
  sonhatt: '',
  _tentochucdathamgia: '',
  nguoigioithieu: '',
  ghichu: '',
  dauthoigian: '',
  sonhatt11: '',
  dasinhhoatdaotrang: '',
  _rdDathamGiaDaoTrang: -1,
  _rdMongMuonThamGiaDT: -1,
  rdThamdu: 'novalue',
  namsinh: '',
})

// ====== Cookie ======
function reloadCookie() {
  let cc1 = useCookie.cookies.get('last_submit')
  if (cc1 === '11') {
    useCookie.cookies.set('last_submit', '0')
    location.reload()
  }

  const gioiThieuCookie = useCookie.cookies.get('nguoigioithieu')
  if (gioiThieuCookie && typeof gioiThieuCookie === 'string') {
    savedNguoiGioiThieu.value = gioiThieuCookie
  }

  try {
    const addrCookie = useCookie.cookies.get('saved_address')
    if (addrCookie) {
      const a = typeof addrCookie === 'string' ? JSON.parse(addrCookie) : addrCookie
      if (a && a.province && a.ward && a.sonha) {
        savedAddress.value = a
        savedAddressDisplay.value = a.sonha + ', ' + a.ward + ', ' + a.province
      }
    }
  } catch (e) { console.log('Error loading saved address:', e) }
}
reloadCookie()

// ====== Actions ======
function useSavedNguoiGioiThieu() {
  if (savedNguoiGioiThieu.value) {
    form.nguoigioithieu = savedNguoiGioiThieu.value
  }
}

function useSavedAddress() {
  if (!savedAddress.value) return
  const a = savedAddress.value
  const province = addr.provincesSource.value.find((p: any) => p.value === a.province)
  if (province) {
    addr.selectedP.value = province.value
    addr.modelProvince.value = province.value
    addr.wards.value = province.wards || []
    addr.selectedW.value = a.ward
    addr.modelWard.value = a.ward
  } else {
    addr.modelProvince.value = a.province
    addr.modelWard.value = a.ward
  }
  form.sonhatt = a.sonha
}

function copyAddress() {
  addr.clickCopyDiaChi()
  form.sonhatt11 = form.sonhatt
}

// ====== Validation & Submit ======
function clickDangKy() {
  // Lưu cookie
  if (form.nguoigioithieu && form.nguoigioithieu.trim().length > 0) {
    try {
      useCookie.cookies.set('nguoigioithieu', form.nguoigioithieu.trim())
      savedNguoiGioiThieu.value = form.nguoigioithieu.trim()
    } catch (e) { console.log(e) }
  }

  if (addr.selectedP.value && addr.selectedW.value && form.sonhatt.trim().length > 0) {
    try {
      const addrData = JSON.stringify({ province: addr.selectedP.value, ward: addr.selectedW.value, sonha: form.sonhatt.trim() })
      useCookie.cookies.set('saved_address', addrData)
      savedAddress.value = { province: addr.selectedP.value, ward: addr.selectedW.value, sonha: form.sonhatt.trim() }
      savedAddressDisplay.value = form.sonhatt.trim() + ', ' + addr.selectedW.value + ', ' + addr.selectedP.value
    } catch (e) { console.log(e) }
  }

  // Validate
  let msgErr = ''
  if (modelHovaten.value.indexOf(' ') == -1) msgErr += '* Vui lòng nhập đủ họ tên.<br>'
  if (form.sodienthoai.trim().length != 10) msgErr += '* Số điện thoại phải đủ 10 số.<br>'
  if (form.gioitinh.trim().length == 0) msgErr += '* Vui lòng chọn giới tính.<br>'
  if (form.namsinh.trim().length != 4) msgErr += '* Năm sinh là 4 chữ số, ví dụ 1998.<br>'
  if (form.sonhatt.trim().length == 0) msgErr += '* ĐC Thường trú: Chưa nhập số nhà.<br>'

  if (msgErr.length > 0) {
    ElMessageBox.alert(msgErr, { dangerouslyUseHTMLString: true })
    return
  }

  // Chuẩn hóa
  modelHovaten.value = myUtils0.vietHoaHoTen(modelHovaten.value)
  const dateNow = new Date()
  form.dauthoigian = dateNow.getDate() + "/" + (dateNow.getMonth() + 1) + "/" + dateNow.getFullYear() + " " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()

  if (form._rdDathamGiaDaoTrang == 0) {
    form.dasinhhoatdaotrang = 'Chưa tham gia - ' + form._rdMongMuonThamGiaDT
  } else {
    form.dasinhhoatdaotrang = form._tentochucdathamgia
  }

  dialogConfirmVisible.value = true
}

// Submit vào Turso
async function submitDk() {
  submitting.value = true
  submitError.value = ''
  submitSuccess.value = false
  submitResult.value = null

  try {
    const diachithuongtru = form.sonhatt + ', ' + addr.modelWard.value + ', ' + addr.modelProvince.value
    const diachithuongtru_short = addr.modelWard.value + ', ' + addr.modelProvince.value
    const diachitamtru = form.sonhatt11 + ', ' + addr.modelWard11.value + ', ' + addr.modelProvince11.value

    const data: RegistrationData = {
      dauthoigian: form.dauthoigian,
      hovaten: modelHovaten.value,
      namsinh: form.namsinh,
      gioitinh: form.gioitinh,
      sodienthoai: form.sodienthoai,
      diachithuongtru,
      diachithuongtru_short,
      diachitamtru,
      tinhtamtru: addr.modelProvince11.value,
      dasinhhoatdaotrang: form.dasinhhoatdaotrang,
      nguoigioithieu: form.nguoigioithieu,
      ghichu: form.ghichu,
      web_version: form.webversion
    }

    const result = await insertRegistration(data)

    // Thành công → đóng dialog xác nhận, mở dialog kết quả
    submitSuccess.value = true
    submitResult.value = result
    dialogConfirmVisible.value = false
    resultDialogVisible.value = true

    clickSubmited.value = true
    useCookie.cookies.set('last_submit', '11')

    // Gửi thông báo Telegram (fire-and-forget, không ảnh hưởng flow chính)
    sendTelegramNotification({
      id: result.insertedId?.toString() || '?',
      hovaten: data.hovaten,
      sodienthoai: data.sodienthoai,
      namsinh: data.namsinh,
      gioitinh: data.gioitinh,
      diachithuongtru: data.diachithuongtru,
      diachitamtru: data.diachitamtru,
      nguoigioithieu: data.nguoigioithieu,
      ghichu: data.ghichu
    })

  } catch (e: any) {
    // Thất bại → đóng dialog xác nhận, mở dialog lỗi
    submitError.value = e.message || String(e)
    submitSuccess.value = false
    dialogConfirmVisible.value = false
    resultDialogVisible.value = true
    console.error('Turso insert error:', e)
  } finally {
    submitting.value = false
  }
}

function clickDangKyMoi() {
  location.reload()
}

// ====== Lifecycle ======
onMounted(() => {
  addr.loadProvinces()
  addr.setupWatchers()
})

watch(modelHovaten, () => reloadCookie())

// ====== Dev data ======
if (window.location.href.indexOf('localhost') != -1) {
  modelHovaten.value = 'Quảng An test ' + Math.floor(Math.random() * 30000)
  form.gioitinh = 'Nam'
  form.sodienthoai = '0977310197'
  form.sonhatt = 'so nha 2'
  form.sonhatt11 = 'so nha 3'
  form.namsinh = '2222'
}
</script>

<style src="./DangKyv2.css"></style>
