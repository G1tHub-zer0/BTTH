document.addEventListener(
  "DOMContentLoaded",
  function () {
    // Lúc trang nạp, đặt con trỏ ở ô nhập Mã sản phẩm và làm mờ nút Chọn
    document.getElementById("masp").focus();
    document.querySelector(
      "button[type='submit']"
    ).disabled = true;

    // Xử lý sự kiện khi chọn hình
    document
      .getElementById("img")
      .addEventListener("change", function () {
        var selectedImage = this.value;
        document.getElementById("image").src =
          selectedImage + ".jpg"; // Giả sử hình ảnh có định dạng là .jpg
      });

    // Xử lý sự kiện khi nhấn nút Chọn
    document
      .querySelector("button[type='submit']")
      .addEventListener(
        "click",
        function (event) {
          event.preventDefault(); // Ngăn chặn form gửi đi để trang không reload

          // Sao chép dữ liệu vào bảng phía dưới
          document.getElementById(
            "masp-input"
          ).textContent =
            document.getElementById("masp").value;
          document.getElementById(
            "hinh-input"
          ).textContent =
            document.getElementById("img").value;
          document.getElementById(
            "price-input"
          ).textContent =
            document.getElementById(
              "price"
            ).value;

          // Đặt lại form về trạng thái ban đầu
          document.querySelector("form").reset();

          // Đặt con trỏ lại ở ô nhập Mã sản phẩm và làm mờ nút Chọn
          document.getElementById("masp").focus();
          this.disabled = true;
        }
      );

    // Xử lý sự kiện khi nhập vào ô Mã sản phẩm
    document
      .getElementById("masp")
      .addEventListener("input", function () {
        var maspValue = this.value.trim(); // Lấy giá trị của ô Mã sản phẩm sau khi đã loại bỏ khoảng trắng đầu và cuối
        var submitButton = document.querySelector(
          "button[type='submit']"
        );

        // Nếu ô Mã sản phẩm không trống, kích hoạt nút Chọn, ngược lại làm mờ nút Chọn
        if (maspValue !== "") {
          submitButton.disabled = false;
        } else {
          submitButton.disabled = true;
        }
      });
  }
);
