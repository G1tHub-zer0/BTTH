window.onload = function () {
  let deleteButton =
    document.querySelectorAll(".delete");
  let checkAllButton =
    document.querySelector(".check");
  let clearAllButton =
    document.querySelector(".reset");
  let checkboxes =
    document.querySelectorAll(".object");

  deleteButton.addEventListener(
    "click",
    function () {
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          checkbox.closest("tr").remove();
        }
      });
    }
  );

  checkAllButton.addEventListener(
    "click",
    function () {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      });
    }
  );

  clearAllButton.addEventListener(
    "click",
    function () {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  );
};
