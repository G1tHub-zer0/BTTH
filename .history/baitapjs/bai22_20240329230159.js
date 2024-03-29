function validateForm() {
  const fullName =
    document.querySelector("#fullName").value;
  const birthday =
    document.querySelector("#birthday").value;
  const gender = document.querySelector("#gender").value;
  const location =
    document.querySelector("#location").value;

  const username =
    document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password =
    document.querySelector("#password").value;
  const confirmPassword = document.querySelector(
    "#confirmPassword"
  ).value;

  const fullNameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (
    fullName.trim() === "" ||
    birthday.trim() === "" ||
    gender === "" ||
    location === "" ||
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""
  ) {
    alert("Bạn phải điền đầy đủ thông tin có đánh dấu (*)");
  } else if (password !== confirmPassword) {
    alert("Mật khẩu và xác nhận mật khẩu không khớp");
  } else {
    alert("Đăng ký thành công!");
  }
}
