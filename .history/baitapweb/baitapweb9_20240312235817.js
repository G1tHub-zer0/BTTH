function displayFileName() {
  const fileInput =
    document.getElementById("fileInput");
  const fileNameInput = document.getElementById(
    "fileNameInput"
  );

  const files = fileInput.files;
  if (files.length > 0) {
    fileNameInput.value = files[0].name;
  }
}
