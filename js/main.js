
let settingsMenu = document.querySelector(".setting-menu");
let darkBtn = document.getElementById("dark-btn");


function settingMenuToggle(){
  settingsMenu.classList.toggle("menu-height");
}
// add class on dark-btn
darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark");
  }
  else{
    localStorage.setItem("theme", "light");
  }
}

// ------------------
// giữ màu khi load lại trang ở các theme dark light
if(localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme", "light");
}
//====================================== 
// amount ckick like
// function countclick() {
//   if(typeof(Storage) !== "undefined") {
//     if (localStorage.clickcount) {
//       localStorage.clickcount = Number(localStorage.clickcount)+1;
//     } else {
//       localStorage.clickcount = 1;
//     }
//     document.getElementById("result").innerHTML = "" + localStorage.clickcount;
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//   }
// }