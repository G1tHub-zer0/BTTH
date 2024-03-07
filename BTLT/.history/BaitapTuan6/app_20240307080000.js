function calculate() {
  let num1 = Number(
    document.getElementById("num1").value
  );
  let num2 = Number(
    document.getElementById("num2").value
  );
  let operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Không thể chia cho 0";
      }
      break;
    default:
      result = "Vui lòng chọn phép toán";
  }

  document.getElementById("result").innerText =
    "Kết quả: " + result;
}

function resetForm() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText =
    "";
  let radioButtons = document.querySelectorAll(
    'input[name="operation"]'
  );
  radioButtons.forEach(function (button) {
    button.checked = false;
  });
}
