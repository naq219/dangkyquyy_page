
<template >
  <div class="wrap1">
    <div class="wrap2">
      <el-row style="margin: 0 auto; ">
        <el-col :span="1"></el-col>
        <el-col :span="22">
          <p style="color:#f39f5a; text-align: center; margin: 2%; font-size: 2em;">CHÙA VIÊN QUANG </p>
          <div class="form_in1">
            <div class="form_wrapper">

              <div class="form_container">
                <div class="title_container">
                  <h2 style="color:#f39f5a; text-align: center;">Đăng Ký Quy Y Tam Bảo <br><br></h2>

                </div>
                <div class="row clearfix">
                  <div class="parent d-flex justify-content-center">

                    <el-form-item>
                      <p style="background-image: url('asets/bg.jpg');">Quy Y Tam Bảo là quay về nương tựa 3 ngôi báu
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
                      <p> Dạ kính thưa Quý Phật tử, để nhận Pháp Danh và Lá Phái thì Quý Phật tử sẽ cần CHẮC CHẮN tham dự
                        lễ
                        Quy Y ạ. Kính mong Quý Phật tử xác nhận lại giúp chúng con nhé ạ.</p>
                      <el-form-item>
                        <el-radio-group @change="rdThamDuChange" v-model="form.rdThamdu">
                          <el-radio name="dongythamgia" label="Chắc chắn tham gia">Chắc chắn tham gia</el-radio>
                          <el-radio name="dongythamgia" label="Không tham gia được">Không tham gia được</el-radio>
                        </el-radio-group>
                        <el-input name="dongythamgia11" v-show=true v-model="form.dongythamgia" />
                      </el-form-item>

                    </div>



                    <el-form-item label="Họ và tên">
                      <el-input name="hovaten" hin v-model="form.hovaten" placeholder="Vui lòng viết hoa chữ cái đầu tiên" />
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

                    <el-form-item label="Số điện thoại">
                      <el-input name="sodienthoai" type="tel" hin v-model="form.sodienthoai" maxlength="10" minlength="10" />
                    </el-form-item>

                    <div class="group1">
                      <p class="p_titlegroup">Địa chỉ thường trú*</p>
                      <p>Là địa chỉ trong Căn cước công dân hoặc Chứng Minh Nhân Dân hoặc trên Giấy Khai sinh</p>
                      <el-form-item label="Tỉnh/Thành Phố">
                        <el-autocomplete v-model="modelProvince" :fetch-suggestions="querySearchP" fit-input-width
                          clearable class="inline-input w-50" @select="handleSelect" @change="handleChangePtt">
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

                      <el-input hin v-model="form.sonhatt" placeholder="Nhập Số nhà, Ngõ, tên đường, thôn xóm..." />
                     
                    </div>



                    <div class="group1 ">
                      <p class="p_titlegroup">Nơi ở hiện tại*</p>
                      
                      <el-checkbox v-model="checkedSameLocation" @change="onChangecheckboxSameLocation" label="Giống địa chỉ thường trú" size="large" />
                      <el-form-item label="Tỉnh/Thành Phố">
                        <el-autocomplete v-model="modelProvince11" :fetch-suggestions="querySearchP11" fit-input-width
                          clearable class="inline-input w-50" @select="handleSelect11" @change="handleChangeP11">
                        </el-autocomplete>
                      </el-form-item>

                      <el-form-item :label-position="Top" label="Quận / Huyện">
                        <el-autocomplete v-model="modelDistrict11" :fetch-suggestions="querySearchD11" fit-input-width
                          clearable class="inline-input w-50" @select="handleSelectD11"> </el-autocomplete>
                      </el-form-item>

                      <el-form-item label="Phường/Xã/Thị Trấn">
                        <el-autocomplete v-model="modelWard11" :fetch-suggestions="querySearchW11" fit-input-width clearable
                          @select="handleSelectW11"> </el-autocomplete>
                      </el-form-item>

                      <el-input  hin v-model="form.sonhatt11"
                        placeholder="Nhập Số nhà, Ngõ, tên đường, thôn xóm..." />
                    </div>

                    <div class="group1 ">
                      <p class="p_titlegroup">Đã tham gia sinh hoạt Đạo Tràng, Chúng Thanh Niên chưa?</p>
                      <el-radio-group v-model="form.rdDathamGiaDaoTrang" @change="onChangeDathamgiaDTchua" >
                        <el-radio  label=0 >Chưa Tham Gia</el-radio>
                        <el-radio label=1 >Đã tham gia</el-radio>
                      </el-radio-group>
                      <el-input v-show="form.rdDathamGiaDaoTrang!=11" class="margintop1em" name="email" hin v-model="form.dasinhhoatdaotrang"
                        placeholder="Nhập tên Đạo Tràng, CTN đã tham gia" />

                        <p class="p_titlegroup">Quý Phật tử có mong muốn tham gia sinh hoạt Đạo tràng/CTN không ạ??</p>
                      <el-radio-group v-model="form.rdMongMuonThamGiaDT" @change="onChangeDathamgiaDTchua" >
                        <el-radio  label=0 >Muốn tham gia</el-radio>
                        <el-radio label=1 >Không muốn tham gia</el-radio>
                      </el-radio-group>


                    </div>

                    <div class="group1 ">
                      <p class="p_titlegroup ">Người giới thiệu - Tổ sinh hoạt - Số điện thoại?</p>
                      <p class="ss">VD: Hòa Lý Anh - Tổ Vinh - CTN Nghệ An - 0338 699 484</p>
                      <el-input class="margintop1em" name="email" hin v-model="form.namsinh" placeholder="" />
                    </div>

                    <div class="group1 ">
                      <p class="p_titlegroup">Thắc mắc, ghi chú</p>
                      <el-input class="margintop1em" name="email" hin v-model="form.namsinh" placeholder="" />
                    </div>

                    <div class="group1 ">
                      <p class="p_titlegroup">Liên hệ nhận Lá Phái: <br>
                        Tâm Huy Pháp: 0383 668 927<br>
                        Hoà Lý Anh: 0338.699.484</p>

                    </div>

                    <div class="group1 ">
                      <p class="p_titlegroup">TRƯỜNG HỢP PHẬT TỬ KHÔNG THAM DỰ ĐƯỢC LỄ:</p>
                      <p class="">
                        Thường mỗi tháng sẽ có 1 buổi lễ Quy Y ạ, Quý Phật tử vui lòng hoan hỷ đăng ký vào lễ sau nếu tham
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
                        1. Đăng ký<br>- Quý Phật tử đăng ký Quy Y qua link hoặc qua bàn Thư Ký tại Chùa Viên Quang vào hôm
                        tổ chức lễ.<br>- Quý Phật tử đã đăng ký trên link vui lòng qua Bàn thư ký nhận SỐ PHIẾU LẤY LÁ
                        PHÁI.<br>

                        2. Xác nhận thông tin<br>Quý Phật tử đã đăng ký trên link trước đó sẽ được ban thư ký gọi điện xác
                        nhận lại thông tin và phát số phiếu nhận lá phái khi về chùa ạ.<br>

                        3. Tham dự lễ Quy Y<br>- Quý Phật tử cố gắng tham dự lễ theo thời gian, địa điểm ghi trên bài
                        thông báo ạ.<br>

                        4. Nhận Lá Phái<br>- Quý Phật tử vui lòng GIỮ SỐ PHIẾU và mang lên lúc dự Lễ để nhận Lá Phái.<br>-
                        Sau khi hết Lễ, Quý Phật tử vui lòng lắng nghe thông báo và nán lại nơi dự lễ để nhận lá phái quy
                        y ạ<br>- Quý Phật tử kiểm tra lại thông tin khi nhận lá phái và báo lại ngay cho thư ký khi thông
                        tin bị sai hoặc thiếu ạ.<br>

                        5. Sau Lễ Quy Y<br>- Quý Phật tử đăng ký sát giờ hoặc đăng ký sau khi đã dự lễ mà chưa kịp có lá
                        phái trước khi ra về sẽ được ban thư ký gọi thông báo về việc nhận lá phái.<br>- Đối với những
                        trường hợp này ban thư ký sẽ gửi lá phái về phụ trách ĐT, CTN hoặc gửi về nhà nếu Quý Phật tử có
                        yêu cầu ạ.<br>


                        Lưu ý: Quý Phật tử nhớ để ý điện thoại khi có cuộc gọi nhỡ hoặc tin nhắn xin xác nhận thông tin
                        quy y của chúng con nhé ạ


                      </p>

                    </div>


                    <p>2selectedP:{{ selectedP }} -- selectedD:{{ selectedD }} -- selectedW:{{ selectedW }} -- </p>
                    <p>ss {{ form }}</p>
                    <el-form-item>
                      <button class="el-button" @click="clickDangKy">Đăng Ký</button>
                      <el-button @click="onSubmit">Hủy</el-button>
                    </el-form-item>





                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="credit">Developed by <a href="http://www.designtheway.com" target="_blank">Design the way</a></p>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
    </div>
  </div>

  
  <el-dialog width="20%" v-model="dialogConfirmVisible" title="Xác nhận đăng ký">
    <form method="POST"
      action="https://script.google.com/macros/s/AKfycbwGN0t5l9N32t3KItM8LeUD1HFc7mbZ5us1EDyLO3X4XVPPmdDCwnNVSdhnDjpsvXM/exec"
      :model="form" label-width="120px">

      <table>
        <el-input name="dongythamgia" hin v-show="false"  v-model="form.dongythamgia"/>
        <tr>
          <td>Họ tên: {{ form.hovaten }} 
            <el-input name="hovaten" hin v-show="false"  v-model="form.hovaten"/>
          </td>

        </tr>

        <tr>
          <td>SĐT: {{form.sodienthoai}}</td>
          <el-input name="sodienthoai" hin v-show="false"  v-model="form.sodienthoai"/>
        </tr>

        <tr>
          <td>Năm Sinh: {{form.namsinh}}</td>
          <el-input name="namsinh" hin v-show="false"  v-model="form.namsinh"/>
        </tr>

        <tr>
          <td>Giới Tính: {{form.gioitinh}}</td>
          <el-input name="gioitinh" hin v-show="false"  v-model="form.gioitinh"/>
        </tr>

        <tr>
          <td>ĐC Thường Trú: {{form.sonhatt+', '+modelWard+', '+modelDistrict+', '+modelProvince}}
            <el-input name="diachithuongtru" hin v-show="true" v-model="form_diachithuongtru"  > </el-input>
          </td>
          
        </tr>

        <tr>
          <td>Nơi ở hiện tại: {{form.sonhatt11+', '+modelWard11+', '+modelDistrict11+', '+modelProvince11}}
            <el-input name="diachitamtru" hin v-show="true" v-model="form_diachitamtru"  > </el-input>
            <el-input name="tinhtamtru" hin v-show="true" v-model="modelProvince11"  > </el-input>
          </td>
        </tr>

      </table>
      <!-- <el-button type="primary" style="margin-top: 1em;">Xác nhận</el-button> -->
      <div style="margin-top: 1em;">
        <button class="el-button el-button--primary" type="submit">Xác nhận </button>
      
      </div>
    </form>
    <button style="margin-top: 1em;" class="el-button el-button--info" @click="dialogConfirmVisible=false"  >Hủy</button>

  </el-dialog>
</template>
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
<script lang="ts" setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { exportedFile } from "../utils/exportedFile";
import { ClickOutside } from 'element-plus';
//const exportedFile0 = new exportedFile()

///////////////////// dialog ////////////
let dialogConfirmVisible = ref(false)

function clickDangKy(event) {
  form_diachithuongtru.value= form.sonhatt+', '+modelWard.value+', '+modelDistrict.value+', '+modelProvince.value;
  form_diachitamtru.value = form.sonhatt11+', '+modelWard11.value+', '+modelDistrict11.value+', '+modelProvince11.value;
  dialogConfirmVisible.value = true
}

const form_diachithuongtru = ref('');
const form_diachitamtru = ref('');
//////////////////end dialog

// do not use same name with ref
const form = reactive({

  dongythamgia: '',
  hovaten:'',
  gioitinh:'',
  sodienthoai:'',
  sonhatt:'',


  sonhatt11:'',
  dasinhhoatdaotrang:'',
  rdDathamGiaDaoTrang:-1,
  rdMongMuonThamGiaDT:-1,


  rdThamdu: -1,
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
  namsinh: '',
  diachithuongtru: ''
})

const checkedSameLocation =false; // checkbox cùng thường trú và tạm tru 



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

watch(modelProvince, async (newQuestion, oldQuestion) => {
  if (oldQuestion.indexOf(selectedP.value) > -1 && newQuestion.indexOf(selectedP.value) == -1) {
    modelDistrict.value = ''
    modelWard.value = ''
    districts.value = ref('')
    wards.value = ref('')
    og('clear for province')
    selectedP.value = ref('')
  }

})

function rdThamDuChange(value, number) {
  if (form.rdThamdu == 1) form.dongythamgia = 'Chắc chắn tham gia'
  else form.dongythamgia = 'Không tham gia được '
}




const modelDistrict = ref('')
const districts = ref<provinceItem[]>([])
const querySearchD = (queryString: string, cb: any) => {
  const results = queryString
    ? districts.value.filter(createFilter(queryString))
    : districts.value
  // call callback function to return suggestions
  cb(results)
}
watch(modelDistrict, async (newQuestion, oldQuestion) => {
  if (oldQuestion.indexOf(selectedD.value) > -1 && newQuestion.indexOf(selectedD.value) == -1) {
    modelWard.value = ''
    wards.value = ref('')
    og('clear for District')
    selectedD.value = ref('')
  }

})



const modelWard = ref('')
const wards = ref<provinceItem[]>([])
const querySearchW = (queryString: string, cb: any) => {
  const results = queryString
    ? wards.value.filter(createFilter(queryString))
    : wards.value
  // call callback function to return suggestions
  cb(results)
}
watch(modelWard, async (newQuestion, oldQuestion) => {
  if (oldQuestion.indexOf(selectedD.value) > -1 && newQuestion.indexOf(selectedD.value) == -1) {
    modelWard.value = ''
    wards.value = ref('')
    og('clear for District')
    selectedW.value = ref('')
  }

})


const createFilter = (queryString: string) => {
  return (province: provinceItem) => {
    return (
      removeVietnameseTones(province.value).includes(removeVietnameseTones(queryString))
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

watch(selectedD, async (newQuestion, oldQuestion) => {
  if (selectedD.value.length < 2) {
    selectedW.value = ref('')
  }

})
watch(selectedP, async (newQuestion, oldQuestion) => {
  if (selectedP.value.length == 0) {

    selectedD.value = ref('')
    selectedW.value = ref('')
  }

})


////////////////////////////// tinh tp thu 2////////////////

const modelProvince11 = ref('')
const querySearchP11 = (queryString: string, cb: any) => {
    const results = queryString
      ? provincesSource.value.filter(createFilter(queryString))
      : provincesSource.value
    // call callback function to return suggestions
    cb(results)
  }


  watch(modelProvince11, async (newQuestion, oldQuestion) => {
    if (oldQuestion.indexOf(selectedP11.value) > -1 && newQuestion.indexOf(selectedP11.value) == -1) {
      modelDistrict11.value = ''
      modelWard11.value = ''
      districts11.value = ref('')
      wards11.value = ref('')
      og('clear for province')
      selectedP11.value = ref('')
    }
  
  })


  const modelDistrict11 = ref('')
const districts11 = ref<provinceItem[]>([])
const querySearchD11 = (queryString: string, cb: any) => {
  const results = queryString
    ? districts11.value.filter(createFilter(queryString))
    : districts11.value
  // call callback function to return suggestions
  cb(results)
}
watch(modelDistrict11, async (newQuestion, oldQuestion) => {
  if (oldQuestion.indexOf(selectedD11.value) > -1 && newQuestion.indexOf(selectedD11.value) == -1) {
    modelWard11.value = ''
    wards11.value = ref('')
    og('clear for District')
    selectedD11.value = ref('')
  }

})


const modelWard11 = ref('')
const wards11 = ref<provinceItem[]>([])
const querySearchW11 = (queryString: string, cb: any) => {
  const results = queryString
    ? wards11.value.filter(createFilter(queryString))
    : wards11.value
  // call callback function to return suggestions
  cb(results)
}
watch(modelWard11, async (newQuestion, oldQuestion) => {
  if (oldQuestion.indexOf(selectedD11.value) > -1 && newQuestion.indexOf(selectedD11.value) == -1) {
    modelWard11.value = ''
    wards11.value = ref('')
    og('clear for District')
    selectedW11.value = ref('')
  }

})


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

watch(selectedD11, async (newQuestion, oldQuestion) => {
  if (selectedD11.value.length < 2) {
    selectedW11.value = ref('')
  }

})
watch(selectedP11, async (newQuestion, oldQuestion) => {
  if (selectedP11.value.length == 0) {

    selectedD11.value = ref('')
    selectedW11.value = ref('')
  }

})

/////////////// en chon dia chi tam tru

function onChangeDathamgiaDTchua(value:any){
  og(value)
}





function og(str: any) {
  console.log(str);
}




function removeVietnameseTones(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  return str.toLowerCase();
}



const onSubmit = () => {
  console.log('submit!')


}




onMounted(() => {
  provincesSource.value = new exportedFile().loadAllProvince()
})

</script>



<style>
.parent {
  max-width: 600px;
  margin: auto;
}

.group1 {
  border-radius: 0.5em;
  min-height: 36px;
  background: #181a1b4d;
  padding: 1em;
  margin-top: 1em;
}

body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 14px;

}

.wrap2 {
  background-image: linear-gradient(#181818, #181818);
}

.form_in1 {
  background-image: linear-gradient(#202020, #181818);
}

p {
  color: #ffffff;
}

.el-form-item {
  margin-top: 1em;
}

.p_titlegroup {
  color: #ffffff;
  font-size: 16px;

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

tr:nth-child(even) {
  background-color: #dddddd;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

</style>