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

  if (!fullNameRegex.test(fullName)) {
    document.getElementById("fullNameError").textContent =
      "Họ và tên phải bắt đầu bằng ký tự chữ hoa";
    return;
  } else {
    document.getElementById("fullNameError").textContent =
      "";
  }

  if (birthday.trim() === "") {
    document.getElementById("birthdayError").textContent =
      "Vui lòng chọn ngày sinh";
    return;
  } else {
    document.getElementById("birthdayError").textContent =
      "";
  }

  if (gender === "") {
    document.getElementById("genderError").textContent =
      "Vui lòng chọn giới tính";
    return;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  if (location === "") {
    document.getElementById("locationError").textContent =
      "Vui lòng chọn nơi sống";
    return;
  } else {
    document.getElementById("locationError").textContent =
      "";
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Email không hợp lệ";
    return;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Mật khẩu phải chứa ít nhất 6 ký tự bao gồm chữ và số";
    return;
  } else {
    document.getElementById("passwordError").textContent =
      "";
  }

  if (password !== confirmPassword) {
    document.getElementById(
      "confirmPasswordError"
    ).textContent =
      "Mật khẩu và xác nhận mật khẩu không khớp";
    return;
  } else {
    document.getElementById(
      "confirmPasswordError"
    ).textContent = "";
  }
  alert("Đăng ký thành công!");
}
