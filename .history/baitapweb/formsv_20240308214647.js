const form = document.getElementsByClassName(
  "feedback-form"
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name =
    document.getElementById("name").value;
  const email =
    document.getElementById("email").value;
  const content =
    document.getElementById("content").value;
  const rating =
    document.getElementById("rating").value;

  alert("Cảm ơn bạn đã phản hồi!");

  form.reset();
});
