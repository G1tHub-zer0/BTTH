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
image.src = cars[carSelect.value];

const form = document.querySelector("form"); // Select the form element

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const nameInput =
    document.getElementById("name").value; // Get user name

  // Create a new table row element
  const newRow = document.createElement("tr");

  // Calculate the latest STT based on existing rows (handles deletion)
  const latestSTT = calculateLatestSTT();

  // Create cells for STT, name, and detail link
  const sttCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const detailCell = document.createElement("td");

  // Set content for cells
  sttCell.textContent = latestSTT;
  nameCell.textContent = nameInput;
  detailCell.innerHTML =
    "<a href='#'>Xem chi tiết</a>"; // Create a link with text "Xem chi tiết"

  // Append cells to the new row
  newRow.appendChild(sttCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(detailCell);

  // Get the table body element
  const tableBody = document.querySelector(
    ".table-list table tbody"
  );

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  alert("Đăng ký thành công!"); // Show success message

  // Reset the form after successful submission
  form.reset();
});

function calculateLatestSTT() {
  const existingRows = document.querySelectorAll(
    ".table-list table tbody tr"
  );

  // Handle cases where there may be no existing rows
  if (existingRows.length === 0) {
    return 1; // Start with STT 1 if no rows exist
  }

  const lastRow =
    existingRows[existingRows.length - 1];
  const lastSTT = parseInt(
    lastRow.children[0].textContent,
    10
  ); // Get STT from first cell, convert to number

  // Consider deleted rows (if any)
  let actualSTT = 1;
  for (const row of existingRows) {
    const currentSTT = parseInt(
      row.children[0].textContent,
      10
    );
    if (currentSTT !== actualSTT) {
      return actualSTT; // Found a gap in STT sequence, return the next expected STT
    }
    actualSTT++;
  }

  // If no gaps found, return the last STT incremented by 1
  return lastSTT + 1;
}
