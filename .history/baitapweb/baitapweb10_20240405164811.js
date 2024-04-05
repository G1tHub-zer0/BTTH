document.addEventListener("DOMContentLoaded", () => {
  let deleteButton = document.querySelector(".delete");
  let deleteButton2 =
    document.querySelector(".btn .delete");
  let checkAllButton = document.querySelector(".check");
  let clearAllButton = document.querySelector(".reset");
  let checkboxes = document.querySelectorAll(".object");

  const deleteCheckbox = () => {
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.closest("tr").remove();
      }
    });
  };

  deleteButton.addEventListener("click", deleteCheckbox);
  deleteButton2.addEventListener("click", deleteCheckbox);

  checkAllButton.addEventListener("click", () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  });

  clearAllButton.addEventListener("click", () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  });
});
