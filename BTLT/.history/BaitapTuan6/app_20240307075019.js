function calculate() {
  var operand1 = parseFloat(
    document.getElementById("operand1").value
  );
  var operand2 = parseFloat(
    document.getElementById("operand2").value
  );
  var operation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  var result;

  switch (operation) {
    case "add":
      result = operand1 + operand2;
      break;
    case "subtract":
      result = operand1 - operand2;
      break;
    case "multiply":
      result = operand1 * operand2;
      break;
    case "divide":
      if (operand2 !== 0) {
        result = operand1 / operand2;
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
  document.getElementById("operand1").value = "";
  document.getElementById("operand2").value = "";
  document.getElementById("result").innerText =
    "";
  var radioButtons = document.querySelectorAll(
    'input[name="operation"]'
  );
  radioButtons.forEach(function (button) {
    button.checked = false;
  });
}
