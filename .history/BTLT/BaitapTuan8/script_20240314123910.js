document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("masv").focus();

    let submitButton = document.querySelector(
      "button[type='submit']"
    );
    submitButton.disabled = true;
    submitButton.style.opacity = "0.5";
  }
);
