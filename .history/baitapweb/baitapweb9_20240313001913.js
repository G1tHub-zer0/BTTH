let selectedFileName = "";
function openFileInput() {
  event.preventDefault();
  document.getElementById("fileInput").click();
}

document
  .getElementById("fileInput")
  .addEventListener("change", function () {
    const fileInput = this;
    const fileNameInput = document.getElementById(
      "fileNameInput"
    );

    const files = fileInput.files;
    if (files.length > 0) {
      selectedFileName = files[0].name;
      fileNameInput.value = files[0].name;
    }
    document
      .getElementById("fileNameInput")
      .addEventListener("input", function () {
        this.value = selectedFileName;
      });
  });

// Function to add a new student to the table
function addStudentToTable(
  masv,
  hoten,
  ngaysinh,
  hinh
) {
  // Get the table body
  var tableBody = document.querySelector(
    ".table-list tbody"
  );

  // Create a new row for the table
  var newRow = tableBody.insertRow();

  // Insert cells into the new row
  var cellIndex = newRow.insertCell(0);
  var cellMasv = newRow.insertCell(1);
  var cellHoten = newRow.insertCell(2);
  var cellNgaysinh = newRow.insertCell(3);
  var cellHinh = newRow.insertCell(4);

  // Set values for the cells
  cellIndex.textContent = tableBody.rows.length;
  cellMasv.textContent = masv;
  cellHoten.textContent = hoten;
  cellNgaysinh.textContent = ngaysinh;
  cellHinh.textContent = hinh;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form input values
  var masv =
    document.getElementById("masv").value;
  var hoten =
    document.getElementById("hoten").value;
  var ngaysinh =
    document.getElementById("ngaysinh").value;
  var hinh = document.getElementById(
    "fileNameInput"
  ).value;

  // Add student to the table
  addStudentToTable(masv, hoten, ngaysinh, hinh);

  // Reset form fields
  document.getElementById("masv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("ngaysinh").value = "";
  document.getElementById("fileNameInput").value =
    "";
}

// Add event listener for form submission
document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);
