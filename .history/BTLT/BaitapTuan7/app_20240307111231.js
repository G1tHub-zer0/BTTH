let yourName = prompt("Nhap vao ho ten cua ban:");
let yourYear = Number(
  prompt("Nhap vao nam sinh cua ban:")
);
let day = new Date();
let year = day.getFullYear();
let birthday = year - yourYear;
if (birthday >= 18) {
  document.write(
    `Chào mừng ${yourName} đến với NGÔI NHÀ TEEN`
  );
} else {
  document.write(
    `Bạn ${yourName} chưa đủ tuổi! Hẹn bạn lần sau`
  );
}

let result =
  birthday >= 18
    ? `Chào mừng ${yourName} đến với NGÔI NHÀ TEEN`
    : `Bạn ${yourName} chưa đủ tuổi! Hẹn bạn lần sau`;
document.write(result);
