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

// Function to add or update student information
function addOrUpdateStudent() {
  var masv =
    document.getElementById("masv").value;
  var hoten =
    document.getElementById("hoten").value;
  var ngaysinh =
    document.getElementById("ngaysinh").value;
  var hinh = document.getElementById(
    "fileNameInput"
  ).value;

  var table = document.querySelector(
    ".table-list tbody"
  );
  var rows = table.rows;

  // Check if the student already exists
  var existingRowIndex = -1;
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].cells[1].textContent === masv) {
      existingRowIndex = i;
      break;
    }
  }

  if (existingRowIndex !== -1) {
    // Update existing student information
    var row = rows[existingRowIndex];
    row.cells[2].textContent = hoten;
    row.cells[3].textContent = ngaysinh;
    row.cells[4].textContent = hinh;
  } else {
    // Add new student information
    var newRow = table.insertRow();
    var cellIndex = newRow.insertCell(0);
    var cellMasv = newRow.insertCell(1);
    var cellHoten = newRow.insertCell(2);
    var cellNgaysinh = newRow.insertCell(3);
    var cellHinh = newRow.insertCell(4);

    cellIndex.textContent = table.rows.length - 1;
    cellMasv.textContent = masv;
    cellHoten.textContent = hoten;
    cellNgaysinh.textContent = ngaysinh;
    cellHinh.textContent = hinh;
  }

  // Clear input fields after adding or updating the student
  document.getElementById("masv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("ngaysinh").value = "";
  document.getElementById("fileNameInput").value =
    "";
}

// Event listener for the Add button
document
  .getElementById("addButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addOrUpdateStudent();
  });

// Event listener for the Update button
document
  .getElementById("updateButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addOrUpdateStudent();
  });
