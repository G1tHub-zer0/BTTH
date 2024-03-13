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

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const masvInput =
    document.getElementById("masv").value;
  const nameInput =
    document.getElementById("name").value;
  const ngaysinhInput =
    document.getElementById("ngaysinh").value;
  const hinhInput = document.getElementById(
    "fileNameInput"
  ).value;
});
