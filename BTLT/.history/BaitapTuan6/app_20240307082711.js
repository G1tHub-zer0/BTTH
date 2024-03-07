function calculate() {
  let num1 = Number(
    document.getElementById("num1").value
  );
  let num2 = Number(
    document.getElementById("num2").value
  );
  let operation = document.querySelector(
    'input[name="operation"]:checked'
  )
  if (operation) {
    let result;

    switch (operation.value) {
        case "add":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Không thể chia cho 0";
            }
            break;
    }

    document.getElementById("result").innerText = `Kết quả: ${result}`;
} else {
    document.getElementById("result").innerText = "Vui lòng chọn phép toán";
}

function resetForm() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText =
    "";
  let radioButtons = document.querySelectorAll(
    'input[name="operation"]'
  );
  radioButtons.forEach(
    (button) => (button.checked = false)
  );
}
