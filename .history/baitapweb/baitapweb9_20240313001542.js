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

function addStudent() {
  // Get input values
  var masv =
    document.getElementById("masv").value;
  var hoten =
    document.getElementById("hoten").value;
  var ngaysinh =
    document.getElementById("ngaysinh").value;
  var hinh = document.getElementById(
    "fileNameInput"
  ).value;

  // Create a new row for the table
  var table = document.querySelector(
    ".table-list tbody"
  );
  var newRow = table.insertRow();

  // Insert cells into the new row
  var cellIndex = newRow.insertCell(0);
  var cellMasv = newRow.insertCell(1);
  var cellHoten = newRow.insertCell(2);
  var cellNgaysinh = newRow.insertCell(3);
  var cellHinh = newRow.insertCell(4);

  // Increment index for each new row
  cellIndex.textContent = table.rows.length - 1;

  // Fill cells with input values
  cellMasv.textContent = masv;
  cellHoten.textContent = hoten;
  cellNgaysinh.textContent = ngaysinh;
  cellHinh.textContent = hinh;

  // Clear input fields after adding the student
  document.getElementById("masv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("ngaysinh").value = "";
  document.getElementById("fileNameInput").value =
    "";
}

function updateStudent() {}
function saveForm() {
  document.getElementById("masv").value = "";
  document.getElementById("hoten").value = "";
  document.getElementById("ngaysinh").value = "";
  document.getElementById("fileNameInput").value =
    "";
}

document
  .getElementById("addButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addStudent();
  });

document
  .getElementById("updateButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    updateStudent();
  });

document
  .getElementById("saveButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    saveForm();
  });
