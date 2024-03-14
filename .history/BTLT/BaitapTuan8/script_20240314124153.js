document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("masv").focus();

    let submitButton = document.querySelector(
      "button[type='submit']"
    );
    submitButton.style.opacity = "0.5";
  }
  document.getElementById("img").addEventListener("change", function() {
    var selectedImage = this.value;
    var imageSrc = ""; // Đường dẫn đến hình ảnh tương ứng

    // Ánh xạ giá trị được chọn với đường dẫn hình ảnh
    switch (selectedImage) {
        case "hinh1":
            imageSrc = "h1.jpg";
            break;
        case "hinh2":
            imageSrc = "h2.jpg";
            break;
        case "hinh3":
            imageSrc = "h3.jpg";
            break;
        case "hinh4":
            imageSrc = "h4.jpg";
            break;
        default:
            imageSrc = ""; // Nếu không có hình ảnh được chọn, đặt đường dẫn là trống
            break;
    }

    // Hiển thị hình ảnh được chọn
    var imageContainer = document.getElementById("image-container");
    var imageElement = document.getElementById("image");
    if (imageSrc) {
        imageElement.src = imageSrc;
        imageContainer.style.display = "block"; // Hiển thị khung hình ảnh nếu có hình ảnh
    } else {
        imageContainer.style.display = "none"; // Ẩn khung hình ảnh nếu không có hình ảnh
    }
});

// Khi nhấn nút Chọn
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    var masvInput = document.getElementById("masv");
    var selectedImage = document.getElementById("img").value;
    var priceInput = document.getElementById("price");
    var selectedMasv = masvInput.value;
    var selectedPrice = priceInput.value;

    // Thêm dữ liệu vào bảng phía dưới
    var tableBody = document.querySelector(".table-body table");
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = selectedMasv;
    cell2.innerHTML = '<img src="' + selectedImage + '.jpg" alt="Hình sản phẩm">'; // Hiển thị hình ảnh trong bảng phía dưới
    cell2.innerHTML += "<br>Giá: " + selectedPrice;

    // Reset form về trạng thái ban đầu
    masvInput.value = "";
    priceInput.value = "";
    document.getElementById("image-container").style.display = "none"; // Ẩn khung hình ảnh
    this.reset(); // Reset form
    masvInput.focus(); // Di chuyển con trỏ đến ô nhập mã sản phẩm
    document.querySelector("form button[type='submit']").disabled = true; // Vô hiệu hóa nút Chọn
});

// Kiểm tra khi nhập liệu vào ô mã sản phẩm hoặc giá
var masvInput = document.getElementById("masv");
var priceInput = document.getElementById("price");
[masvInput, priceInput].forEach(function(input) {
    input.addEventListener("input", function() {
        var isMasvEmpty = masvInput.value.trim() === "";
        var isPriceEmpty = priceInput.value.trim() === "";
        var isImgSelected = document.getElementById("img").value !== "None";
        var submitButton = document.querySelector("form button[type='submit']");
        submitButton.disabled = isMasvEmpty || isPriceEmpty || !isImgSelected; // Nếu ô mã sản phẩm hoặc giá trống hoặc không có hình ảnh được chọn, vô hiệu hóa nút Chọn
    });
});

