function displayImage() {
  var selectBox = document.getElementById(
    "image-select"
  );
  var selectedValue =
    selectBox.options[selectBox.selectedIndex]
      .value;
  var selectedImage = document.getElementById(
    "selected-image"
  );
  selectedImage.src = selectedValue;
}
