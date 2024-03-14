document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Focus vào ô nhập mã sản phẩm khi trang web nạp vào
    document.getElementById("masv").focus();

    // Mờ đi nút chọn khi trang web nạp vào
    var submitButton = document.querySelector(
      "button[type='submit']"
    );
    submitButton.disabled = true; // Disable nút chọn
    submitButton.style.opacity = "0.5"; // Mờ nút chọn
  }
);
