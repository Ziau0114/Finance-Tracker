var totalIncome = 0;
var totalExpense = 0;
var totalSavings = 0;

var isIncomeAdd = false;
var isExpenseAdd = false;

function addIncome() {
  var income = parseFloat(document.getElementById("income").value);

  if (!isNaN(income) && income !== "" && income >= 0) {
    if (!isIncomeAdd) {
      totalIncome += income;
      document.getElementById("totalIncome").innerHTML = `<h3>Total Income</h3>
      <span>$${totalIncome}</span>`;
      document.getElementById("addIncomeBtn").disabled = true;  
      isIncomeAdd = true; 
    }
  } else {
    document.getElementById("message").innerHTML = "Please enter a valid income amount.";
  }

  updateSavings();
}

function addExpense() {
  var expense = parseFloat(document.getElementById("expense").value);

  if (!isNaN(expense) && expense !== "" && expense >= 0) {
    if (!isExpenseAdd) {
      totalExpense += expense;
      document.getElementById("totalExpense").innerHTML = `<h3>Total Expense</h3>
      <span>$${totalExpense}</span>`;
      document.getElementById("addExpenseBtn").disabled = true; 
      isExpenseAdd = true;  
    }
  } else {
    document.getElementById("message").innerHTML = "Please enter a valid expense amount.";
  }

  updateSavings();
}

function updateSavings() {
  totalSavings = totalIncome - totalExpense;
  document.getElementById("totalSavings").innerHTML = `<h3>Total Saving</h3>
  <span>$${totalSavings}</span>`;
}




