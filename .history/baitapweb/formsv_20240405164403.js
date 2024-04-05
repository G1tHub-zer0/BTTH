const form = document.querySelector("#feedback-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const content = document.querySelector("#content").value;
  const rating = document.querySelector("#rating").value;

  alert("Cảm ơn bạn đã phản hồi!");
  form.reset();
});
