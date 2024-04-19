const dropdowns = document.querySelector(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const dropdownMenu =
      dropdown.querySelector(".li-child");
    dropdownMenu.classList.toggle("show");
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".dropdown")) {
    const dropdowns = document.querySelector(".li-child");
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdownMenu = dropdowns[i];
      if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
      }
    }
  }
};
