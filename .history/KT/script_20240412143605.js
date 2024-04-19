function start() {
  document.getElementById("inp-name").focus();
  document.getElementById("inp-left").disabled = true;
}

function ontype() {
  document.getElementById("inp-left").disabled = false;
}

function submitForm() {
  var name = document.querySelector(
    'input[name="Name"]'
  ).value;
  var email = document.querySelector(
    'input[name="email"]'
  ).value;
  var telephone = document.querySelector(
    'input[name="tel"]'
  ).value;
  var subject = document.querySelector(
    'input[name="sub"]'
  ).value;
  var message = document.querySelector(
    'textarea[name="mes"]'
  ).value;

  document.getElementById("Name").innerText = name;
  document.getElementById("Email").innerText = email;
  document.getElementById("Telephone").innerText =
    telephone;
  document.getElementById("Subject").innerText = subject;
  document.getElementById("Message").innerText = message;
}
