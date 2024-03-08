function thongbao() {
  alert("Gửi thành công");
}
const cars = {
  toyota:
    "https://www.toyota.com.vn/media/hdxbzeb2/bang-gia-xe-toyota-2.jpeg?width=777&height=649&mode=max",
  mazda:
    "https://mazdamotors.vn/media/svvgcg0y/new-mazda-cx-5-platinum-quartz.png",
  honda:
    "https://cdn.honda.com.vn/automobiles/October2022/GzU8lOOv9575MLXmAB6d.png",
  nissan:
    "https://nissantayho.vn/wp-content/uploads/2019/08/3Line-Up-EL-White_6M_2-1_Lowres.png",
};

const carSelect = document.getElementById("cars");
const imageContainer = document.getElementById(
  "image-container"
);
const image = document.getElementById("image");

carSelect.addEventListener("change", () => {
  const selectedCar = carSelect.value;
  if (selectedCar) {
    image.src = cars[selectedCar];
    imageContainer.classList.remove("hidden");
  } else {
    imageContainer.classList.add("hidden");
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name").value;


  if (!nameInput) {
    alert("Please enter your name!");
    return;
  }


  const newRow = document.createElement("tr");

  const sttCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const detailCell = document.createElement("td");


  sttCell.textContent = getLatestSTT();
  nameCell.textContent = nameInput;
  detailCell.innerHTML = "<a href='#'>Xem chi tiết</a>"; 


  newRow.appendChild(sttCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(detailCell);


  const tableBody = document.querySelector(".table-list table tbody");


  tableBody.appendChild(newRow);

  alert("Đăng ký thành công!"); 

  form.reset();
});


function getLatestSTT() {
  const existingRows = document.querySelectorAll(".table-list table tbody tr");
  const lastRow = existingRows[existingRows.length - 1];


  if (lastRow) {
    const lastSTT = parseInt(lastRow.children[0].textContent);
    return lastSTT + 1;
  } else {
    return 1; 
}

