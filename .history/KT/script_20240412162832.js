const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.addEventListener("click", () => {
  const dropdownMenu = dropdowns.querySelector(".li-child");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});
