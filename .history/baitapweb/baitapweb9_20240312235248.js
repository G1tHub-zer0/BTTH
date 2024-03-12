function displayFileName() {
  var input =
    document.getElementById("fileInput");
  var fileNameInput = document.getElementById(
    "fileNameInput"
  );
  if (input.files.length > 0) {
    fileNameInput.value = input.files[0].name;
  } else {
    fileNameInput.value = "";
  }
}
