let usename = document.getElementById("usename");
let password = document.getElementById("Password");
let comfirmpassword = document.getElementById("comfirm-Password")
function btn(event) {
    event.preventDefault();
  if (usename.value === "" || password.value === "" ||comfirmpassword.value ==="") {
    alert( "vui lòng  đủ thông tin");
  } else if (usename.value === "huan" && password.value === "1999" &&
  comfirmpassword.value ==="1999") {
    swal({
        title: "bạn đã đăng nhập thành công!",
        icon: "success",
        timer:2000,
      })
    .then(() => {
       window.location.href = "http://127.0.0.1:5500/admin.html"
    });
      
  } else {
    swal({
        title: "mật khẩu hoặc tài khoản không đúng!",
        icon: "error",
        timer:3000,
      })
  }
  
    password.value=""
    comfirmpassword.value=""
}
