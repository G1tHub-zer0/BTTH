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
        let imageSrc = "";
        switch (selectedImage) {
          case "hinh1":
            imageSrc =
              "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/20/gao-anh-1629435457603409639437-0-0-406-650-crop-1629435575935389612572.jpg";
            break;
          case "hinh2":
            imageSrc = "h2.jpg";
            break;
          case "hinh3":
            imageSrc = "h3.jpg";
            break;
          case "hinh4":
            imageSrc = "h4.jpg";
            break;
          default:
            imageSrc = "";
            break;
        }
        document.getElementById("image").src =
          imageSrc;
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
