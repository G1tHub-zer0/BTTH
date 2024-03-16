window.onload = () => {
  let deleteButton =
    document.querySelectorAll(".delete");
  let deleteButton2 = document.querySelector(
    ".col-2 .btn .delete"
  );
  let checkAllButton =
    document.querySelector(".check");
  let clearAllButton =
    document.querySelector(".reset");
  let checkboxes =
    document.querySelectorAll(".object");

  deleteButton.addEventListener(
    "click",
    deleteCheckbox
  );
  deleteButton2.addEventListener(
    "click",
    deleteCheckbox
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

function deleteCheckbox() {
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkbox.closest("tr").remove();
    }
  });
}
