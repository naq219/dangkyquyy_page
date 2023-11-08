<template>
  <meta http-equiv="refresh" content="1; URL=/dangky" />

  <el-table v-loading="true" style="width: 100%">
    
  </el-table>

 
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'


async function initJson() {
  console.log("init json ");
  // var new_array = array.map(function (obj) {
  //   return { 'XXX': obj.XXX, 'ZZZ': obj.ZZZ };
  // });

  // const provincesOj = JSON.parse(provinces);



  //  var new_array = provincesOj.map(function (obj: { name: any; code: any; district_code:any }) {
  //     return { 'n': obj.name, 'c': obj.code,'dc': obj.district_code };
  //   });

  //   const myJSON = JSON.stringify(new_array);

  var obj1 =

    // obj1.forEach(item => delete item.codename);
    // obj1.forEach(item => delete item.division_type);
    // obj1.forEach(item => delete item.phone_code);




    //og(obj1)
    console.log(JSON.stringify(obj1))



}
function og(value: any) {
  console.log('home-- ' + value);
}

onMounted(() => {




})
</script>


<style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}</style>