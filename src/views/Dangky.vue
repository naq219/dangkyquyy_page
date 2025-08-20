
<template >
  
  <el-button style="padding: 1em;" v-if="clickSubmited" @click="clickDangKyMoi" > ĐĂNG KÝ MỚI</el-button>
  <p style="padding: 1em; color: #df1919;"  v-if="clickSubmited" > Quý PT vui lòng chờ để đăng ký ạ! </p>
    <div v-if="!clickSubmited"  class="wrap2">

      
      
      <svg  id="radar-circle">
        
        <circle cx="50%" cy="30%" r="0" fill-opacity="0" stroke="#ffffff51" stroke-width="2px" stroke-opacity="1">
          <animate attributeName="r" from="300" to="915" dur="20s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" from="1" to="0" dur="30s" repeatCount="indefinite"></animate>
        </circle>
        
        <circle cx="50%" cy="30%" r="0" fill-opacity="0" stroke="#ffffff51" stroke-width="2px" stroke-opacity="1">
          <animate attributeName="r" from="0" to="915" dur="13s" repeatCount="indefinite" begin="0.75s" />
          <animate attributeName="stroke-opacity" from="1" to="0" dur="33s" repeatCount="indefinite" begin="0.75s"></animate>
        </circle>
        
        <circle cx="50%" cy="45%" r="0" fill-opacity="0" stroke="#ffffff51" stroke-width="2px" stroke-opacity="1">
          <animate attributeName="r" from="0" to="915" dur="23s" repeatCount="indefinite" begin="1.5s" />
          <animate attributeName="stroke-opacity" from="1" to="0" dur="23s" repeatCount="indefinite" begin="1.5s"></animate>
        </circle>
        
        
      </svg>

        
          <p
            style="color:#ffffff; text-align: center; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bold ; margin: 2%; font-size: 2em;
            text-shadow: 1px 1px 2px black, 0 0 25px rgb(255, 255, 255), 0 0 5px darkblue;
            ">
            <strong>CHÙA VIÊN QUANG</strong>
          </p>
          <div class="form_in1">
            <div class="form_wrapper">


              <div class="form_container">
                <div class="title_container">
                 
                  <h2 style="color:#005c70; font-stretch: expanded; font-weight: 545  ; font-style: inherit; text-align: center;">ĐĂNG KÝ QUY Y TAM BẢO<br><br></h2>
                  <div class="center-wrapper">
<el-button @click="toggleGhichu" style="text-align: center; margin: 0 auto;" >

                        {{ showGhichu ? 'Ẩn ghi chú' : 'Đăng ký nhanh (DKN)' }}
                      </el-button> 
                  </div>
                  
                </div>
                <div class="row clearfix">
                  <div class="parent d-flex justify-content-center">
                    
                    

                    <el-form-item  v-show="showGhichu" >
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
                    
                    <div  v-show="showGhichu"  class="group1 ep-bg-purple-dark">
                      <p> Dạ kính thưa Quý Phật tử, để nhận Pháp Danh và Lá Phái thì Quý Phật tử sẽ cần CHẮC CHẮN tham dự
                        lễ
                        Quy Y ạ. Kính mong Quý Phật tử xác nhận lại giúp chúng con nhé ạ.</p>
                      <el-form-item>
                        <el-radio-group  v-model="form.rdThamdu">
                          <el-radio name="dongythamgia" label="Chắc chắn tham gia">Chắc chắn tham gia</el-radio>
                          <el-radio name="dongythamgia" label="Không tham gia được">Không tham gia được</el-radio>
                        </el-radio-group>

                      </el-form-item>

                    </div>



                    <el-form-item label="Họ và tên">
                      <el-input name="hovaten" hin v-model="modelHovaten"
                        placeholder="Vui lòng viết hoa chữ cái đầu tiên" />
                    </el-form-item>


                    <el-form-item label="Năm Sinh">
                      <el-input type="number" name="namsinh" hin v-model="form.namsinh" placeholder="Chỉ nhập năm sinh, ví dụ 2020" />

                    </el-form-item>

                    <el-form-item label="Giới tính">
                      <el-radio-group v-model="form.gioitinh">
                        <el-radio name="gioitinh" label="Nam" />
                        <el-radio name="gioitinh" label="Nữ" />
                      </el-radio-group>
                    </el-form-item>

                    <el-form-item label="Số điện thoại">
                      <el-input name="sodienthoai" type="tel" hin v-model="form.sodienthoai" 
                         />
                    </el-form-item>

                    <div class="group1">
                      <p class="p_titlegroup">Địa chỉ thường trú*</p>
                      <p>Là địa chỉ trong Căn cước công dân hoặc Chứng Minh Nhân Dân hoặc trên Giấy Khai sinh</p>
                      <el-form-item >
                        <el-autocomplete  placeholder="Tỉnh/TP" v-model="modelProvince" :fetch-suggestions="querySearchP" fit-input-width
                          clearable class="inline-input auto1" @select="handleSelect">
                        </el-autocomplete>
                      </el-form-item>

                      <el-form-item label="">
                        <el-autocomplete placeholder="Quận/Huyện" v-model="modelDistrict" :fetch-suggestions="querySearchD" fit-input-width
                          clearable class="inline-input auto1" @select="handleSelectD"> </el-autocomplete>
                      </el-form-item>

                      <el-form-item label="">
                        <el-autocomplete class="inline-input auto1" placeholder="Phường/Xã/TT" v-model="modelWard" :fetch-suggestions="querySearchW" fit-input-width clearable
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

                      <el-form-item label="Phường/Xã/TT">
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
                      <el-input class="margintop1em" hin v-model="form.nguoigioithieu" placeholder="Nên có SĐT để Chùa liên hệ gửi lại lá phái ạ" />
                    </div>

                    <div v-show="showGhichu" class="group1 ">
                      <p class="p_titlegroup">Thắc mắc, ghi chú</p>
                      <el-input class="margintop1em" hin v-model="form.ghichu" placeholder="" />
                    </div>

                    <div  v-show="showGhichu" class="group1 ">
                      <p class="p_titlegroup">Liên hệ nhận Lá Phái: <br>
                        Tâm Huy Pháp: 0383 668 927<br>
                      </p>
                    </div>

                    <div  v-show="showGhichu" class="group1 ">
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

                    <div  v-show="showGhichu" class="group1 ">
                      <p class="p_titlegroup ">QUY TRÌNH TỪ LÚC ĐĂNG KÝ QUY Y TỚI NHẬN LÁ PHÁI:</p>
                      <p class=" smalltext">
                        QUY TRÌNH TỪ LÚC ĐĂNG KÝ QUY Y TỚI NHẬN LÁ PHÁI<br>1. Đăng ký<br>- Quý Phật tử đăng ký Quy Y qua
                        link hoặc qua bàn Thư Ký tại Chùa Viên Quang vào hôm tổ chức lễ.<br>

                        2. Xác nhận thông tin<br>Quý Phật tử đã đăng ký trên link trước đó sẽ được ban thư ký gọi điện xác
                        nhận lại thông tin và phát số phiếu nhận lá phái khi về chùa ạ.<br>

                        3. Tham dự lễ Quy Y<br>- Quý Phật tử cố gắng tham dự lễ theo thời gian, địa điểm ghi trên bài
                        thông báo ạ.<br>

                        4. Nhận Lá Phái<br>- Sau khi hết Lễ, Quý Phật tử vui lòng lắng nghe thông báo và nán lại nơi dự lễ
                        để nhận lá phái quy y ạ<br>- Quý Phật tử kiểm tra lại thông tin khi nhận lá phái và báo lại ngay
                        cho thư ký khi thông tin bị sai hoặc thiếu ạ.<br>

                        5. Sau Lễ Quy Y<br>- Quý Phật tử đăng ký sát giờ hoặc đăng ký sau khi đã dự lễ mà chưa kịp có lá
                        phái trước khi ra về sẽ được ban thư ký gọi thông báo về việc nhận lá phái.<br>- Đối với những
                        trường hợp này ban thư ký sẽ gửi lá phái về phụ trách ĐT, CTN hoặc gửi về nhà nếu Quý Phật tử có
                        yêu cầu ạ.<br>

                        Lưu ý: Quý Phật tử nhớ để ý điện thoại khi có cuộc gọi nhỡ hoặc tin nhắn xin xác nhận thông tin
                        quy y của chúng con nhé ạ. Ngoài ra, Quý Phật tử cố gắng kiểm tra lại SĐT khi đăng ký, tránh tình
                        trạng SĐT bị sai, thiếu/thừa số nhé ạ.


                      </p>

                    </div>
                      
                    <div v-if="false" class="group1">
                      <el-form-item style=""><p style="color:#df1919 " class="credit ">Nếu web lỗi vui lòng liên hệ Tâm Huy Pháp:     <a style="color:#df1919 " href="tel:0383 668 927" target="_blank">0983838619</a></p></el-form-item>

                    </div>

                    <p v-if="isDevEnviroment">223selectedP:{{ selectedP }} -- selectedD:{{ selectedD }} -- selectedW:{{ selectedW }} -- </p>
                    <p v-if="isDevEnviroment">ss {{ form }}</p>
                    <div class="margintop1em">
                      <el-text v-if="false"  style=" padding: 0.5em; border-radius: 0.1em; border-color: #0087a5; border-width: 0.1em;
                        border-style: solid;" class="mx-1" @click="clickDangKy" type="primary">Đăng ký</el-text>
                      <button class="el-button" @click="clickDangKy">Đăng Ký</button>
                      <el-button>Hủy</el-button>
                      
                    </div>




                  </div>
                </div>
              </div>

            </div>
          </div>
          
        
      <p style="font-size: 0.7em; color: rgb(141, 175, 175); width: 100%; text-align: center; margin: 0.3em;"  >version {{ form.webversion }} - contact 0983838619</p>
    </div>
   
  


  <el-dialog width="90%" v-model="dialogConfirmVisible" title="Xác nhận đăng ký">
    <form method="POST"
      :action="urlScriptGoogle"
      :model="form" label-width="120px">

      <el-input id="abc1" name="ghichu" hin  v-model="form.ghichu" />
      <el-input name="dongythamgia" hin v-show="false" v-model="form.rdThamdu" />
      <el-input name="nguoigioithieu" hin v-show="false" v-model="form.nguoigioithieu" />
      <el-input name="dasinhhoatdaotrang" hin v-show="false" v-model="form.dasinhhoatdaotrang" />
      <el-input name="dauthoigian" hin v-show="false" v-model="form.dauthoigian" />
      <el-input name="web_version" hin v-show="false" v-model="form.webversion" />

      <table>

        <tr valign="top">
          <td style="">Họ tên: <strong>{{ modelHovaten }}</strong>
            <el-input name="hovaten" hin v-show="false" v-model="modelHovaten" />

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
        <button  class="el-button el-button--primary"  @click="submitDk()" type="submit">Xác nhận</button>

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
import { axiosUtils } from "../utils/axiosUtils";
import type { FormInstance, FormRules } from 'element-plus';
import { useRoute } from "vue-router";
import { h } from 'vue'
import { ElMessage, ElMessageBox,ElLoading   } from 'element-plus'
import type { Action } from 'element-plus'
import { randomInt } from 'crypto';
import axios  from 'axios' 

// import * as dayjs from 'dayjs'
// dayjs().format()
// import 'dayjs/locale/vi'
// dayjs.locale('vi') // use locale
// var now = dayjs()

///dev
var lastTimeSubmit=0;
var isDevEnviroment=false;
if(window.location.href.indexOf('localhost')!=-1)
isDevEnviroment=true;
og('url='+isDevEnviroment);

//cookie
import { useCookies } from "vue3-cookies";
let useCookie= useCookies();
//useCookie.cookies.set('last_submit','11');
const clickSubmited = ref(false);
const showGhichu = ref(false);
og('cookie= '+useCookie.cookies.get('last_submit'))



const myUtils0 = new myUtils()
const validateLevel = ref(1)
if (useRoute().query.validate) validateLevel.value = useRoute().query.validate
og('validate=' + validateLevel.value)
///////////////////// dialog ////////////
let dialogConfirmVisible = ref(false)
// do not use same name with ref
const form = reactive({

  webversion:'ver9.6',
  
  gioitinh: '',
  sodienthoai: '',
  sonhatt: '',
  _tentochucdathamgia: '',
  nguoigioithieu: '',
  ghichu: '',
  dauthoigian:'',

  sonhatt11: '',
  dasinhhoatdaotrang: '',
  _rdDathamGiaDaoTrang: -1,
  _rdMongMuonThamGiaDT: -1,


  rdThamdu: 'novalue',

  namsinh: '',
  diachithuongtru: ''
})
const modelHovaten = ref('')

function reloadCookie(){
  let cc1= useCookie.cookies.get('last_submit')
  og('cookie last submit = '+cc1)
		if(cc1==='11'){
        og('reload thoi')
        useCookie.cookies.set('last_submit','0')
        location.reload();
      }
      
  // Load ghichu visibility from cookie
  const ghichuCookie = useCookie.cookies.get('show_ghichu');
  if (ghichuCookie === 'true') {
    showGhichu.value = true;
  }
}
reloadCookie()



const drawer = ref(false)
const messageDrawer = ref('')

const urlScriptGoogle= ref('')

const openFullScreen2 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Quý PT vui lòng chờ để đăng ký ạ!',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
    reloadCookie();
  }, 10000)
}


function submitDk(){

  let url ="https://connecthtssl.vq.id.vn/sql/statement?sql=INSERT INTO `dangkyquyy`.`register` ( `dauthoigian`, `hovaten`, `namsinh`, `gioitinh`, `sodienthoai`, `diachithuongtru`, `diachithuongtru_short`, `diachitamtru`, `tinhtamtru`, `dasinhhoatdaotrang`, `nguoigioithieu`, `ghichu`, `web_version`) VALUES (  '"+form.dauthoigian+"','"+modelHovaten.value+"','"+form.namsinh+"','"+form.gioitinh+"','"+form.sodienthoai+"','"+form_diachithuongtru.value+"','"+form_diachithuongtru_short.value+"','"+form_diachitamtru.value+"','"+modelProvince11.value+"','"+form.dasinhhoatdaotrang+"','"+form.nguoigioithieu+"','"+form.ghichu+"','"+form.webversion+"');        "
      
      axios.get(url)


  

  clickSubmited.value=true
  useCookie.cookies.set('last_submit','11')
  
  lastTimeSubmit =11;
  dialogConfirmVisible.value = false
  openFullScreen2();
  
  
}



function clickDangKy() {




  let msgErr=''
  if(modelHovaten.value.indexOf(' ')==-1) msgErr+='* Vui lòng nhập đủ họ tên.<br>'
  if(form.sodienthoai.trim().length!=10) msgErr+='* Số điện thoại phải đủ 10 số.<br>'
  if(form.gioitinh.trim().length==0) msgErr+='* Vui lòng chọn giới tính.<br>'
  if(form.namsinh.trim().length!=4) msgErr+='* Năm sinh là 4 chữ số , ví dụ 1998.<br>'
  if(form.sonhatt.trim().length==0) msgErr+='* ĐC Thường trú: Chưa nhập số nhà, tên đường hoặc thôn xóm.<br>'
  if(form.sonhatt11.trim().length==0) msgErr+='* Nơi ở hiện tại: Chưa nhập số nhà, tên đường hoặc thôn xóm.<br>'

  if(msgErr.length>0){
    showError(msgErr)
    return ;
  }

  modelHovaten.value= myUtils0.vietHoaHoTen(modelHovaten.value)

  urlScriptGoogle.value='https://script.google.com/macros/s/AKfycbxjTZIWY1jwUObSIqr3X8DIWhCLnLKUCZFMoMLw-fO9cElsFDuuPjLR8r2TlbiVBb0/exec?phone1='+form.sodienthoai
   //form.dauthoigian= now.daysInMonth()+"/"+(now.month()+1)+"/"+now.year()+" "+now.hour()+":"+now.minute()+":"+now.second();
 // form_diachithuongtru.value = form.sonhatt + ', ' + modelWard.value + ', ' + modelDistrict.value + ', ' + modelProvince.value;
 const dateNow=new Date();
 form.dauthoigian = dateNow.getDate()+"/"+(dateNow.getMonth()+1)+"/"+dateNow.getFullYear() +" "+ dateNow.getHours()+":"+dateNow.getMinutes()+":"+dateNow.getSeconds(); 

  // if (form.rdThamdu == 1) form.dongythamgia = 'Chắc chắn tham gia'
  // else form.dongythamgia = 'Không tham gia được '


  
  form_diachithuongtru_short.value = modelWard.value + ', ' + modelDistrict.value + ', ' + modelProvince.value;
  form_diachithuongtru.value=form.sonhatt + ', ' + form_diachithuongtru_short.value  

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

  watch(modelHovaten, async (newQuestion, oldQuestion) => {
		
    reloadCookie();

		})



if(isDevEnviroment){
  modelHovaten.value='Quảng An test '+ Math.floor(Math.random() * 30000);
  form.gioitinh='Nam'
  form.sodienthoai='0977310197'
  form.sonhatt='so nha 2'
  form.sonhatt11='so nha 3'
  selectedP.value='Tỉnh Bắc Kạn'
  selectedD.value='Huyện Tam Dương'
  selectedW.value='Xã Đồng Tĩnh'

  selectedP11.value='Tỉnh Lâm Đồng'
  selectedD11.value='Huyện Đam Rông'
  selectedW11.value='Xã Đạ Tông'


  form.namsinh='2222'
  
}

function clickDangKyMoi(){
  location.reload()
}

const toggleGhichu = () => {
  showGhichu.value = !showGhichu.value;
  useCookie.cookies.set('show_ghichu', showGhichu.value.toString());
}


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


svg {
  
  position: absolute;
  width: 100%;
  height: 100%;
  
  top: 1000; bottom: 0;
  left: 0;
  right: 0;
}

body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 14px;
    background-color: #25497e;
}

.wrap2 {
  background-image: linear-gradient(#25497e, #25497e); margin-left: 0.7em; margin-right: 0.7em;
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

.auto1 {
  width: 100%;
}


.form_wrapper {


  max-width: 100%;
  box-sizing: border-box;
  padding: 25px;
  margin: 2% auto 0;
  position: relative;
  z-index: 1;
  border-top: 5px solid #f9004293;
}

td {
  padding: 8px;
 
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
}
</style>