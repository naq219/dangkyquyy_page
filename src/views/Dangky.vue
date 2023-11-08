
<template >
  <div class="wrap1">
    <div class="wrap2">
      <el-row style="margin: 0 auto; ">
        <el-col :span="1"></el-col>
        <el-col :span="22">
          <p
            style="color:#f9f9f9; text-align: center; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold ; margin: 2%; font-size: 2em;">
            <strong>CHÙA VIÊN QUANG</strong>
          </p>
          <div class="form_in1">
            <div class="form_wrapper">


              <div class="form_container">
                <div class="title_container">
                  <h2
                    style="color:#005c70; font-stretch: expanded; font-weight: 545  ; font-style: inherit; text-align: center;">
                    ĐĂNG KÝ QUY Y TAM BẢO<br><br></h2>

                </div>
                <div class="row clearfix">
                  <div class="parent d-flex justify-content-center">

                    <el-form class="demo-ruleForm" ref="ruleFormRef" :model="form" status-icon :rules="rules">
                      <el-form-item>
                        <p>Quy Y Tam Bảo là quay về nương tựa 3 ngôi báu
                          Phật,
                          Pháp, Tăng. Khi đã trở thành đệ tử Phật, huynh đệ
                          luôn nhận được sự gia hộ của Đức Phật, huynh đệ có thêm ý chí vượt qua mọi khó khăn trong cuộc
                          sống,
                          tinh tấn tu tập, siêng năng làm phước và sẽ gặp được nhiều may mắn, phúc lành trong cuộc sống.
                          <br>
                          "Quy Y Phật rồi không đọa địa ngục <br>
                          Quy Y Pháp rồi không đọa ngạ quỷ <br>
                          Quy Y Tăng rồi không đọa bàng sinh" <br>
                        </p>
                      </el-form-item>

                      <div class="group1 ep-bg-purple-dark">
                        <p> Dạ kính thưa Quý Phật tử, để nhận Pháp Danh và Lá Phái thì Quý Phật tử sẽ cần CHẮC CHẮN tham
                          dự
                          lễ
                          Quy Y ạ. Kính mong Quý Phật tử xác nhận lại giúp chúng con nhé ạ.</p>
                        <el-form-item>
                          <el-radio-group v-model="form.rdThamdu">
                            <el-radio name="dongythamgia" label="Chắc chắn tham gia">Chắc chắn tham gia</el-radio>
                            <el-radio name="dongythamgia" label="Không tham gia được">Không tham gia được</el-radio>
                          </el-radio-group>

                        </el-form-item>

                      </div>



                      <el-form-item label="Họ và tên">
                        <el-input name="hovaten" hin v-model="form.hovaten"
                          placeholder="Vui lòng viết hoa chữ cái đầu tiên" />
                      </el-form-item>


                      <el-form-item label="Năm Sinh">
                        <el-input name="namsinh" hin v-model="form.namsinh" placeholder="Chỉ nhập năm sinh, ví dụ 2020" />

                      </el-form-item>

                      <el-form-item label="Giới tính">
                        <el-radio-group v-model="form.gioitinh">
                          <el-radio name="gioitinh" label="Nam" />
                          <el-radio name="gioitinh" label="Nữ" />
                        </el-radio-group>
                      </el-form-item>

                      <el-form-item label="Số điện thoại" prop="checkPhone">
                        <el-input name="sodienthoai" type="tel"  v-model="form.sodienthoai"
                           />
                      </el-form-item>

                      <el-form-item  label="Confirm2" prop="checkPass">
                      <el-input
                        v-model="form.sodienthoai"
                        type="password"
                        autocomplete="off"
                      />
                    </el-form-item>

                      <div class="group1">
                        <p class="p_titlegroup">Địa chỉ thường trú*</p>
                        <p>Là địa chỉ trong Căn cước công dân hoặc Chứng Minh Nhân Dân hoặc trên Giấy Khai sinh</p>
                        <el-form-item label="Tỉnh/Thành Phố">
                          <el-autocomplete v-model="modelProvince" :fetch-suggestions="querySearchP" fit-input-width
                            clearable class="inline-input w-50" @select="handleSelect">
                          </el-autocomplete>
                        </el-form-item>

                        <el-form-item label="Quận / Huyện">
                          <el-autocomplete v-model="modelDistrict" :fetch-suggestions="querySearchD" fit-input-width
                            clearable class="inline-input w-50" @select="handleSelectD"> </el-autocomplete>
                        </el-form-item>

                        <el-form-item label="Phường/Xã/Thị Trấn">
                          <el-autocomplete v-model="modelWard" :fetch-suggestions="querySearchW" fit-input-width clearable
                            @select="handleSelectW"> </el-autocomplete>
                        </el-form-item>
                        <el-text v-show="form.sonhatt.length > 0" class="ketqua">đc đầy đủ:</el-text>
                        <el-text v-show="form.sonhatt.length > 0"
                          v-text="form.sonhatt + ', ' + modelWard + ', ' + modelDistrict + ', ' + modelProvince"
                          class="ketqua"></el-text>
                        <el-input @change="onChangeSonhaTT" hin v-model="form.sonhatt"
                          placeholder="Nhập Số nhà, Ngõ, tên đường, thôn xóm..." />

                      </div>
                      <!-- @@dctt -->


                      <div class="group1 ">
                        <p class="p_titlegroup">Nơi ở hiện tại*</p>

                        <el-link @click="clickCopyDiaChi" style=" padding: 0.2em; border-radius: 0.1em; border-color: #0087a5; border-width: 0.1em;
                          border-style: solid;" class="mx-1" type="primary"> <el-icon>
                            <Download />
                          </el-icon> . Lấy từ địa chỉ thường trú</el-link>

                        <el-form-item label="Tỉnh/Thành Phố">
                          <el-autocomplete v-model="modelProvince11" :fetch-suggestions="querySearchP11" fit-input-width
                            clearable class="inline-input w-50" @select="handleSelect11">
                          </el-autocomplete>
                        </el-form-item>

                        <el-form-item label="Quận / Huyện">
                          <el-autocomplete v-model="modelDistrict11" :fetch-suggestions="querySearchD11" fit-input-width
                            clearable class="inline-input w-50" @select="handleSelectD11"> </el-autocomplete>
                        </el-form-item>

                        <el-form-item label="Phường/Xã/Thị Trấn">
                          <el-autocomplete v-model="modelWard11" :fetch-suggestions="querySearchW11" fit-input-width
                            clearable @select="handleSelectW11"> </el-autocomplete>
                        </el-form-item>
                        <el-text v-show="form.sonhatt11.length > 0" class="ketqua">đc đầy đủ:</el-text>
                        <el-text v-show="form.sonhatt11.length > 0"
                          v-text="form.sonhatt11 + ', ' + modelWard11 + ', ' + modelDistrict11 + ', ' + modelProvince11"
                          class="ketqua"></el-text>
                        <el-input hin v-model="form.sonhatt11" placeholder="Nhập Số nhà, Ngõ, tên đường, thôn xóm..." />
                      </div>

                      <div class="group1 ">
                        <p class="p_titlegroup">Quý Phật tử Đã tham gia sinh hoạt Đạo Tràng, Chúng Thanh Niên chưa ạ?</p>
                        <el-radio-group v-model="form._rdDathamGiaDaoTrang">
                          <el-radio label=0>Chưa Tham Gia</el-radio>
                          <el-radio label=1>Đã tham gia</el-radio>
                        </el-radio-group>
                        <el-input v-show="form._rdDathamGiaDaoTrang == 1" class="margintop1em" name="email" hin
                          v-model="form._tentochucdathamgia" placeholder="Nhập tên Đạo Tràng, CTN đã tham gia" />

                        <div v-if="form._rdDathamGiaDaoTrang == 0">
                          <p class="p_titlegroup">Quý Phật tử có mong muốn tham gia sinh hoạt Đạo tràng/CTN không ạ?</p>
                          <el-radio-group v-model="form._rdMongMuonThamGiaDT">
                            <el-radio label='Có Muốn tham gia'>Có Muốn tham gia</el-radio>
                            <el-radio label='Không muốn tham gia'>Không muốn tham gia</el-radio>
                          </el-radio-group>
                        </div>



                      </div>

                      <div class="group1 ">
                        <p class="p_titlegroup ">Người giới thiệu - Tổ sinh hoạt - Số điện thoại?</p>
                        <p class="ss">VD: Hòa Lý Anh - Tổ Vinh - CTN Nghệ An - 0338 699 484</p>
                        <el-input class="margintop1em" hin v-model="form.nguoigioithieu" placeholder="" />
                      </div>

                      <div class="group1 ">
                        <p class="p_titlegroup">Thắc mắc, ghi chú</p>
                        <el-input class="margintop1em" hin v-model="form.ghichu" placeholder="" />
                      </div>

                      <div class="group1 ">
                        <p class="p_titlegroup">Liên hệ nhận Lá Phái: <br>
                          Tâm Huy Pháp: 0383 668 927<br>
                        </p>
                      </div>

                      <div class="group1 ">
                        <p class="p_titlegroup">TRƯỜNG HỢP PHẬT TỬ KHÔNG THAM DỰ ĐƯỢC LỄ:</p>
                        <p class="">
                          Thường mỗi tháng sẽ có 1 buổi lễ Quy Y ạ, Quý Phật tử vui lòng hoan hỷ đăng ký vào lễ sau nếu
                          tham
                          dự được nhé ạ.<br>

                          Thông tin lễ Quy Y được đăng tải trên trang: Chúng Thanh Niên Phật Tử Phật Quang Nghệ An<br>
                          <a href="https://www.facebook.com/ctnpqnghean">https://www.facebook.com/ctnpqnghean</a>
                          <br>

                          Mọi thắc mắc về Lễ Quy Y xin vui lòng liên hệ:<br>Tâm Huy Pháp: 0383 668 927
                        </p>

                      </div>

                      <div class="group1 ">
                        <p class="p_titlegroup ">QUY TRÌNH TỪ LÚC ĐĂNG KÝ QUY Y TỚI NHẬN LÁ PHÁI:</p>
                        <p class=" smalltext">
                          QUY TRÌNH TỪ LÚC ĐĂNG KÝ QUY Y TỚI NHẬN LÁ PHÁI<br>1. Đăng ký<br>- Quý Phật tử đăng ký Quy Y qua
                          link hoặc qua bàn Thư Ký tại Chùa Viên Quang vào hôm tổ chức lễ.<br>

                          2. Xác nhận thông tin<br>Quý Phật tử đã đăng ký trên link trước đó sẽ được ban thư ký gọi điện
                          xác
                          nhận lại thông tin và phát số phiếu nhận lá phái khi về chùa ạ.<br>

                          3. Tham dự lễ Quy Y<br>- Quý Phật tử cố gắng tham dự lễ theo thời gian, địa điểm ghi trên bài
                          thông báo ạ.<br>

                          4. Nhận Lá Phái<br>- Sau khi hết Lễ, Quý Phật tử vui lòng lắng nghe thông báo và nán lại nơi dự
                          lễ
                          để nhận lá phái quy y ạ<br>- Quý Phật tử kiểm tra lại thông tin khi nhận lá phái và báo lại ngay
                          cho thư ký khi thông tin bị sai hoặc thiếu ạ.<br>

                          5. Sau Lễ Quy Y<br>- Quý Phật tử đăng ký sát giờ hoặc đăng ký sau khi đã dự lễ mà chưa kịp có lá
                          phái trước khi ra về sẽ được ban thư ký gọi thông báo về việc nhận lá phái.<br>- Đối với những
                          trường hợp này ban thư ký sẽ gửi lá phái về phụ trách ĐT, CTN hoặc gửi về nhà nếu Quý Phật tử có
                          yêu cầu ạ.<br>

                          Lưu ý: Quý Phật tử nhớ để ý điện thoại khi có cuộc gọi nhỡ hoặc tin nhắn xin xác nhận thông tin
                          quy y của chúng con nhé ạ. Ngoài ra, Quý Phật tử cố gắng kiểm tra lại SĐT khi đăng ký, tránh
                          tình
                          trạng SĐT bị sai, thiếu/thừa số nhé ạ.


                        </p>

                      </div>

                      <div v-if="false" class="group1">
                        <el-form-item style="">
                          <p style="color:#df1919 " class="credit ">Nếu web lỗi vui lòng liên hệ Tâm Huy Pháp: <a
                              style="color:#df1919 " href="tel:0383 668 927" target="_blank">0983838619</a></p>
                        </el-form-item>

                      </div>

                     

                      <p v-if="false">223selectedP:{{ selectedP }} -- selectedD:{{ selectedD }} -- selectedW:{{ selectedW
                      }} -- </p>
                      <p v-if="false">ss {{ form }}</p>
                      <div class="margintop1em">
                        <el-text v-if="false" style=" padding: 0.5em; border-radius: 0.1em; border-color: #0087a5; border-width: 0.1em;
                          border-style: solid;"  class="mx-1" @click="submitForm(ruleFormRef)" type="primary">Đăng ký</el-text>
                        <button class="el-button" @click="clickDangKy">Đăng Ký</button> 
                        <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
                        <el-button>Hủy</el-button>
                      </div>

                    </el-form>



                  </div>
                </div>
              </div>

            </div>
          </div>

        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <p>version 4</p>
    </div>

  </div>


  <el-dialog width="90%" v-model="dialogConfirmVisible" title="Xác nhận đăng ký">
    <form method="POST" :action="urlScriptGoogle" :model="form" label-width="120px">

      <el-input name="ghichu" hin v-show="false" v-model="form.ghichu" />
      <el-input name="dongythamgia" hin v-show="false" v-model="form.rdThamdu" />
      <el-input name="nguoigioithieu" hin v-show="false" v-model="form.nguoigioithieu" />
      <el-input name="dasinhhoatdaotrang" hin v-show="false" v-model="form.dasinhhoatdaotrang" />
      <el-input name="dauthoigian" hin v-show="false" v-model="form.dauthoigian" />

      <table>

        <tr valign="top">
          <td style="">Họ tên: <strong>{{ form.hovaten }}</strong>
            <el-input name="hovaten" hin v-show="false" v-model="form.hovaten" />

          </td>

        </tr>

        <tr>
          <td>SĐT: {{ form.sodienthoai }}</td>
          <el-input name="sodienthoai" hin v-show="false" v-model="form.sodienthoai" />
        </tr>

        <tr>
          <td>Năm Sinh: {{ form.namsinh }}</td>
          <el-input name="namsinh" hin v-show="false" v-model="form.namsinh" />
        </tr>

        <tr>
          <td>Giới Tính: {{ form.gioitinh }}</td>
          <el-input name="gioitinh" hin v-show="false" v-model="form.gioitinh" />
        </tr>

        <tr>
          <td>ĐC Thường Trú: {{ form.sonhatt + ', ' + modelWard + ', ' + modelDistrict + ', ' + modelProvince }}
            <el-input name="diachithuongtru" hin v-show="false" v-model="form_diachithuongtru"> </el-input>
          </td>
        </tr>

        <tr>
          <td>
            <el-input name="diachithuongtru_short" hin v-show="false" v-model="form_diachithuongtru_short"> </el-input>
          </td>
        </tr>



        <tr>
          <td>Nơi ở hiện tại: {{ form.sonhatt11 + ', ' + modelWard11 + ', ' + modelDistrict11 + ', ' + modelProvince11 }}
            <el-input name="diachitamtru" hin v-show="false" v-model="form_diachitamtru"> </el-input>
            <el-input name="tinhtamtru" hin v-show="false" v-model="modelProvince11"> </el-input>
          </td>
        </tr>

      </table>
      <!-- <el-button type="primary" style="margin-top: 1em;">Xác nhận</el-button> -->
      <div style="margin-top: 1em;">
        <button class="el-button el-button--primary" type="submit">Xác nhận</button>

      </div>
    </form>
    <button style="margin-top: 1em;" class="el-button el-button--info" @click="dialogConfirmVisible = false">Hủy</button>

  </el-dialog>

  <el-drawer v-model="drawer" :with-header="false" title="I am the title"><span>{{ messageDrawer }}</span></el-drawer>
</template>
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { exportedFile } from "../utils/exportedFile";
import { myUtils } from "../utils/myUtils";
import type { FormInstance, FormRules } from 'element-plus';
import { useRoute } from "vue-router";
import { h } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
// import * as dayjs from 'dayjs'
// dayjs().format()
// import 'dayjs/locale/vi'
// dayjs.locale('vi') // use locale
// var now = dayjs()


const myUtils0 = new myUtils()
const validateLevel = ref(1)
if (useRoute().query.validate) validateLevel.value = useRoute().query.validate
og('validate=' + validateLevel.value)
///////////////////// dialog ////////////
let dialogConfirmVisible = ref(false)
// do not use same name with ref
const form = reactive({
  checkPass:'',

  hovaten: '',
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
  diachithuongtru: ''
})

const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {


    if (form.sodienthoai !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPhone', () => null)
    }
    callback()
  }
}

const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})



const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules<typeof form>>({
  sodienthoai: [{ validator: validatePhone, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  
})


const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}




const drawer = ref(false)
const messageDrawer = ref('')

const urlScriptGoogle = ref('')


function clickDangKy(event) {
  let msgErr = ''
  if (form.hovaten.indexOf(' ') == -1) msgErr += '* Vui lòng nhập đủ họ tên.<br>'
  if (form.sodienthoai.length != 10) msgErr += '* Số điện thoại phải đủ 10 số.<br>'
  if (form.gioitinh.length == 0) msgErr += '* Vui lòng chọn giới tính.<br>'
  if (form.namsinh.trim().length != 4) msgErr += '* Năm sinh là 4 chữ số , ví dụ 1998.<br>'
  if (form.sonhatt.trim().length == 0) msgErr += '* ĐC Thường trú: Chưa nhập số nhà, tên đường hoặc thôn xóm.<br>'
  if (form.sonhatt11.trim().length == 0) msgErr += '* Nơi ở hiện tại: Chưa nhập số nhà, tên đường hoặc thôn xóm.<br>'

  if (msgErr.length > 0) {
    showError(msgErr)
    return;
  }

  form.hovaten = myUtils0.vietHoaHoTen(form.hovaten)

  urlScriptGoogle.value = 'https://script.google.com/macros/s/AKfycbwgh4-OgXtEn0pm3fhgqFLqsmXjWQz5Lr7-YU0eYqD7hAqr3ERF0GtbyPzPkh5oij0/exec?phone1=' + form.sodienthoai
  //form.dauthoigian= now.daysInMonth()+"/"+(now.month()+1)+"/"+now.year()+" "+now.hour()+":"+now.minute()+":"+now.second();
  // form_diachithuongtru.value = form.sonhatt + ', ' + modelWard.value + ', ' + modelDistrict.value + ', ' + modelProvince.value;
  const dateNow = new Date();
  form.dauthoigian = dateNow.getDate() + "/" + (dateNow.getMonth() + 1) + "/" + dateNow.getFullYear() + " " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();

  // if (form.rdThamdu == 1) form.dongythamgia = 'Chắc chắn tham gia'
  // else form.dongythamgia = 'Không tham gia được '



  form_diachithuongtru_short.value = modelWard.value + ', ' + modelDistrict.value + ', ' + modelProvince.value;
  form_diachithuongtru.value = form.sonhatt + ', ' + form_diachithuongtru_short.value

  form_diachitamtru.value = form.sonhatt11 + ', ' + modelWard11.value + ', ' + modelDistrict11.value + ', ' + modelProvince11.value;

  if (form._rdDathamGiaDaoTrang == 0) {
    form.dasinhhoatdaotrang = 'Chưa tham gia - ' + form._rdMongMuonThamGiaDT
  }
  else form.dasinhhoatdaotrang = form._tentochucdathamgia;

  dialogConfirmVisible.value = true
}

const form_diachithuongtru = ref('');
const form_diachithuongtru_short = ref('')
const form_diachitamtru = ref('');
//////////////////end dialog


interface provinceItem {
  value: string
  code: string
  districts: provinceItem
  wards: provinceItem
}
const modelProvince = ref('')
const provincesSource = ref<provinceItem[]>([])

const querySearchP = (queryString: string, cb: any) => {
  const results = queryString
    ? provincesSource.value.filter(createFilter(queryString))
    : provincesSource.value
  // call callback function to return suggestions
  cb(results)
}


// function rdThamDuChange(value, number) {
//   if (form.rdThamdu == 1) form.dongythamgia = 'Chắc chắn tham gia'
//   else form.dongythamgia = 'Không tham gia được '
// }


const modelDistrict = ref('')
const districts = ref<provinceItem[]>([])
const querySearchD = (queryString: string, cb: any) => {
  const results = queryString
    ? districts.value.filter(createFilter(queryString))
    : districts.value
  // call callback function to return suggestions
  cb(results)
}



const modelWard = ref('')
const wards = ref<provinceItem[]>([])
const querySearchW = (queryString: string, cb: any) => {
  const results = queryString
    ? wards.value.filter(createFilter(queryString))
    : wards.value
  // call callback function to return suggestions
  cb(results)
}


const createFilter = (queryString: string) => {
  return (province: provinceItem) => {
    return (
      myUtils0.removeVietnameseTones(province.value).includes(myUtils0.removeVietnameseTones(queryString))
    )
  }
}

const selectedP = ref('');
const handleSelect = (item: provinceItem) => {
  selectedP.value = item.value
  districts.value = item.districts
  og(item)
}
const selectedD = ref('');
const handleSelectD = (item: provinceItem) => {
  og(item.wards)
  selectedD.value = item.value
  wards.value = item.wards
}

const selectedW = ref('')
const handleSelectW = (item: provinceItem) => {
  //districts.value = item.districts
  selectedW.value = item.value
}



////////////////////////////// tinh tp thu 2////////////////

const modelProvince11 = ref('')
const querySearchP11 = (queryString: string, cb: any) => {
  const results = queryString
    ? provincesSource.value.filter(createFilter(queryString))
    : provincesSource.value
  // call callback function to return suggestions
  cb(results)
}




const modelDistrict11 = ref('')
const districts11 = ref<provinceItem[]>([])
const querySearchD11 = (queryString: string, cb: any) => {
  const results = queryString
    ? districts11.value.filter(createFilter(queryString))
    : districts11.value
  // call callback function to return suggestions
  cb(results)
}


const modelWard11 = ref('')
const wards11 = ref<provinceItem[]>([])
const querySearchW11 = (queryString: string, cb: any) => {
  const results = queryString
    ? wards11.value.filter(createFilter(queryString))
    : wards11.value
  // call callback function to return suggestions
  cb(results)
}


const selectedP11 = ref('');
const handleSelect11 = (item: provinceItem) => {
  selectedP11.value = item.value
  districts11.value = item.districts
  og(item)
}
const selectedD11 = ref('');
const handleSelectD11 = (item: provinceItem) => {
  og(item.wards)
  selectedD11.value = item.value
  wards11.value = item.wards
}

const selectedW11 = ref('')
const handleSelectW11 = (item: provinceItem) => {
  //districts.value = item.districts
  selectedW11.value = item.value
}






function og(str: any) {
  console.log(str);
}

myUtils0.watchLocation(modelProvince, modelDistrict, modelWard, districts, wards, selectedP, selectedD11, selectedW11, selectedP11, selectedD, selectedW, modelProvince11, modelDistrict11, modelWard11, districts11, wards11);

function clickCopyDiaChi() {

  modelProvince11.value = modelProvince.value
  modelDistrict11.value = modelDistrict.value
  modelWard11.value = modelWard.value

  selectedP11.value = selectedP.value
  selectedD11.value = selectedD.value
  selectedW11.value = selectedW.value

  wards11.value = wards.value
  districts11.value = districts.value
  form.sonhatt11 = form.sonhatt

}


// watch(form,async(new1,old1) =>{
//   if(new1.sonhatt!==old1.sonhatt){

//     if(selectedW.value.length==0){

//         showError('Hãy chọn Tỉnh, Huyện, xã trước')
//     }
//   }
// })
//showError('Hãy chọn Tỉnh, Huyện, xã trước')
function onChangeSonhaTT(str) {

}

function showError(str) {
  ElMessageBox.alert(str,
    {
      dangerouslyUseHTMLString: true,
    }
  )

  // ElMessage({
  //   message: h('p', null, [

  //     h('i', { style: 'color: teal' }, str),
  //   ]),
  // })
}


onMounted(() => {
  provincesSource.value = new exportedFile().loadAllProvince()
})

</script>

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

<style>
.parent {
  max-width: 600px;
  margin: auto;
}

.group1 {
  border-radius: 0.5em;
  min-height: 36px;
  border-style: solid;
  padding: 1em;
  margin-top: 1em;

  border-color: #25497e18;
}

body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 14px;

}

.wrap2 {
  background-image: linear-gradient(#25497e, #25497e);
}

.form_in1 {
  background-image: linear-gradient(#ffffff, #ffffff);
}

p {
  color: #222121;
}

.el-form-item {
  margin-top: 1em;
}

.p_titlegroup {
  color: #000000b3;
  font-size: 16px;
  font-weight: bold;

}

.margintop1em {
  margin-top: 1em;
}

.smalltext {
  font-size: 12px;
}




.form_wrapper {


  max-width: 100%;
  box-sizing: border-box;
  padding: 25px;
  margin: 2% auto 0;
  position: relative;
  z-index: 1;
  border-top: 5px solid #0077ff93;
}

td {
  padding: 8px;
  white-space: nowrap;
  font-weight: bold;
}

.ketqua {
  font-style: italic;
  font-size: 0.8em;
  color: #161616;
  margin-left: 1em;
}

.dl_content {
  color: coral;
}</style>