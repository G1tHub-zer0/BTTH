const cars = {
  toyota:
    "https://www.toyota.com.vn/media/hdxbzeb2/bang-gia-xe-toyota-2.jpeg?width=777&height=649&mode=max",
  mazda:
    "https://mazdamotors.vn/media/svvgcg0y/new-mazda-cx-5-platinum-quartz.png",
  honda:
    "https://cdn.honda.com.vn/automobiles/October2022/GzU8lOOv9575MLXmAB6d.png",
  nissan:
    "https://nissantayho.vn/wp-content/uploads/2019/08/3Line-Up-EL-White_6M_2-1_Lowres.png",
};

const carSelect =
  document.querySelector(".img-car");
const imageContainer = document.querySelector(
  ".image-container"
);
const image = document.getElementById("image");

carSelect.addEventListener("change", () => {
  const selectedCar = carSelect.value;
  if (selectedCar) {
    image.src = cars[selectedCar];
    imageContainer.classList.remove("hidden");
  } else {
    imageContainer.classList.add("hidden");
  }
});

image.src = cars[carSelect.value];
