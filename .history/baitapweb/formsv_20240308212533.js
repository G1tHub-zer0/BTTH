const form = document.getElementById(
  "feedback-form"
);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name =
    document.getElementById("name").value;
  const email =
    document.getElementById("email").value;
  const content =
    document.getElementById("content").value;
  const rating =
    document.getElementById("rating").value;

  // Gửi dữ liệu phản hồi đến server (chưa có code)

  alert("Cảm ơn bạn đã phản hồi!");

  form.reset();
});
