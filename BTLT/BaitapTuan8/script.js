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
          case "gao":
            imageSrc =
              "https://suckhoedoisong.qltns.mediacdn.vn/thumb_w/1200/324455921873985536/2021/8/20/gao-anh-1629435457603409639437-0-0-406-650-crop-1629435575935389612572.jpg";
            break;
          case "bap":
            imageSrc =
              "https://vcdn-suckhoe.vnecdn.net/2016/08/06/bap-ngo-1280-1470460485.png";
            break;
          case "thuoc":
            imageSrc =
              "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/8/30/uong-thuoc-thoi-diem-nao-16618466465071926930931.png";
            break;
          case "ball":
            imageSrc =
              "https://file3.qdnd.vn/data/images/0/2022/11/14/vietcuong/1-%201.jpg";
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
