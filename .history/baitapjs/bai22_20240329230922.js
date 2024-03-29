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
    document.querySelector("#fullNameError").textContent =
      "Họ và tên phải bắt đầu bằng ký tự chữ hoa";
    return;
  } else {
    document.querySelector("#fullNameError").textContent =
      "";
  }

  if (birthday.trim() === "") {
    document.querySelector("#birthdayError").textContent =
      "Vui lòng chọn ngày sinh";
    return;
  } else {
    document.querySelector("#birthdayError").textContent =
      "";
  }

  if (gender === "") {
    document.querySelector("#genderError").textContent =
      "Vui lòng chọn giới tính";
    return;
  } else {
    document.querySelector("#genderError").textContent = "";
  }

  if (location === "") {
    document.querySelector("#locationError").textContent =
      "Vui lòng chọn nơi sống";
    return;
  } else {
    document.querySelector("#locationError").textContent =
      "";
  }

  if (!emailRegex.test(email)) {
    document.querySelector("#emailError").textContent =
      "Email không hợp lệ";
    return;
  } else {
    document.querySelector("#emailError").textContent = "";
  }

  if (!passwordRegex.test(password)) {
    document.querySelector("#passwordError").textContent =
      "Mật khẩu phải chứa ít nhất 6 ký tự bao gồm chữ và số";
    return;
  } else {
    document.querySelector("#passwordError").textContent =
      "";
  }

  if (password !== confirmPassword) {
    document.querySelector(
      "#confirmPasswordError"
    ).textContent =
      "Mật khẩu và xác nhận mật khẩu không khớp";
    return;
  } else {
    document.querySelector(
      "#confirmPasswordError"
    ).textContent = "";
  }
  alert("Đăng ký thành công!");
}
