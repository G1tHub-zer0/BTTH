window.onload = () => {
  let deleteButton =
    document.querySelector(".delete");
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
    function () {
      checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
          checkbox.closest("tr").remove();
        }
      });
    }
  );
  deleteButton2.addEventListener(
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
