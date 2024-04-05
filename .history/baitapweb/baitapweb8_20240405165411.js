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

const carSelect = document.querySelector("#cars");
const imageContainer = document.querySelector(
  "#image-container"
);
const image = document.querySelector("#image");

carSelect.addEventListener("change", () => {
  const selectedCar = carSelect.value;
  if (selectedCar) {
    image.src = cars[selectedCar];
    imageContainer.classList.remove("hidden");
  } else {
    imageContainer.classList.add("hidden");
  }
});
image.src = cars[carSelect.value];

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#name").value;

  const newRow = document.createElement("tr");

  const latestSTT = calculateLatestSTT();

  const sttCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const detailCell = document.createElement("td");

  sttCell.textContent = latestSTT;
  nameCell.textContent = nameInput;
  detailCell.innerHTML = "<a href='#'>Xem chi tiết</a>";

  newRow.appendChild(sttCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(detailCell);

  const tableBody = document.querySelector(
    ".table-list table tbody"
  );

  tableBody.appendChild(newRow);

  alert("Đăng ký thành công!");
  form.reset();
});

function calculateLatestSTT() {
  const existingRows = document.querySelectorAll(
    ".table-list table tbody tr"
  );
  let maxSTT = 0;

  existingRows.forEach((row) => {
    const currentSTT = parseInt(
      row.children[0].textContent,
      10
    );
    if (currentSTT > maxSTT) {
      maxSTT = currentSTT;
    }
  });

  return maxSTT + 1;
}
