window.onload = function () {
  let deleteButton =
    document.querySelectorAll(".delete");
  let checkAllButton =
    document.querySelector(".check");
  let clearAllButton =
    document.querySelector(".reset");
  let checkboxes =
    document.querySelectorAll(".object");

  deleteButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      checkboxes.forEach(function (
        checkbox,
        checkboxIndex
      ) {
        if (index === 0 && checkbox.checked) {
          checkbox.closest("tr").remove();
        } else if (
          index === 1 &&
          checkbox.checked
        ) {
          checkbox.closest("tr").remove();
        }
      });
    });
  });

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
