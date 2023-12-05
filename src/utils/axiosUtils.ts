// Exporting the class which will be 
// used in another file 
// Export keyword or form should be 
// used to use the class 

import { onMounted, reactive, ref, watch } from 'vue'
import axios  from 'axios'
export class axiosUtils {

    postDbRegister(){
        let dauthoigian='dauttt123'
        let url ="http://connect.lemyde.com/sql/statement?sql=INSERT INTO `dangkyquyy`.`register` ( `dauthoigian`, `hovaten`, `namsinh`, `gioitinh`, `sodienthoai`, `diachithuongtru`, `diachithuongtru_short`, `diachitamtru`, `tinhtamtru`, `dasinhhoatdaotrang`, `nguoigioithieu`, `ghichu`, `web_version`) VALUES ( 'dauthoigian666', 'que 2223', 'aa', 'ss', 'aa', 'ss', 'ss', 'ss', 'ss', 'ss', 'ss', 'ss', 'ss');        "
      
        axios.get(url)
    }
	

} 
