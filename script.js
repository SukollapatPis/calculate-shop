var expenses = [];

function addExpense() {
  var input = document.getElementById("pay");
  var value = parseFloat(input.value);
  if (value) {
    expenses.push(value);
    input.value = "";
  }
}

function calculate() {
  var income = parseFloat(document.getElementById("income").value);
  var sum = expenses.reduce(function(a, b) {
    return a + b;
  }, 0);
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  if (!isNaN(income) && expenses.length > 0) {
    resultDiv.innerHTML = "รายรับ : " + income + " Baht<br>รายจ่าย : " + sum + " Baht<br>คงเหลือ : " + (income - sum) + " Baht";
  } else {
    resultDiv.innerHTML = "Please enter income and at least one expense";
  }
}
