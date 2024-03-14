document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("masp").focus();
    let submitButton = document.querySelector(
      "button[type='submit']"
    );
    submitButton.disabled = true;

    document
      .getElementById("img")
      .addEventListener("change", function () {
        let selectedImage = this.value;
        document.getElementById("image").src =
          selectedImage + ".jpg";
      });

    document
      .querySelector("button[type='submit']")
      .addEventListener(
        "click",
        function (event) {
          event.preventDefault();

          document.getElementById(
            "masp-input"
          ).textContent =
            document.getElementById("masp").value;
          document.getElementById(
            "hinh-input"
          ).textContent =
            document.getElementById("img").value;
          document.getElementById(
            "price-input"
          ).textContent =
            document.getElementById(
              "price"
            ).value;

          document.querySelector("form").reset();

          document.getElementById("masp").focus();
          this.disabled = true;
        }
      );

    document
      .getElementById("masp")
      .addEventListener("input", function () {
        let maspValue = this.value.trim();

        if (maspValue !== "") {
          submitButton.disabled = false;
        } else {
          submitButton.disabled = true;
        }
      });
  }
);
