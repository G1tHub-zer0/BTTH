window.onload = function () {
  let deleteButtons =
    document.querySelectorAll(".delete");
  let checkAllButton =
    document.querySelector(".check");
  let clearAllButton =
    document.querySelector(".reset");
  let checkboxes =
    document.querySelectorAll(".object");

  // Add event listener to each delete button
  deleteButtons.forEach(function (
    deleteButton,
    index
  ) {
    deleteButton.addEventListener(
      "click",
      function () {
        // Get checkboxes associated with the current delete button
        let associatedCheckboxes =
          document.querySelectorAll(
            ".object-" + (index + 1)
          );

        // Remove rows associated with checked checkboxes
        associatedCheckboxes.forEach(function (
          checkbox
        ) {
          if (checkbox.checked) {
            checkbox.closest("tr").remove();
          }
        });
      }
    );
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
