const dropdowns =
  document.querySelectorAll(".nav-dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const dropdownMenu =
      dropdown.querySelector(".li-child");
    dropdownMenu.classList.toggle("show");
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".nav-dropdown")) {
    const dropdowns =
      document.getElementsByClassName("li-child");
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdownMenu = dropdowns[i];
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      }
    }
  }
};
