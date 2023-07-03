// Get DOM elements
const totalAmountInput = document.getElementById('total-amout');
const setBudgetButton = document.getElementById('total-amount-button');
const productTitleInput = document.getElementById('product-title');
const productCostInput = document.getElementById('user-amout');
const checkAmountButton = document.getElementById('check-amount');
const budgetOutput = document.getElementById('amount');
const expenditureOutput = document.getElementById('Expenditure-value');
const balanceOutput = document.getElementById('blaance-amount');
const expenseListContainer = document.getElementById('list');
const newamountButton = document.getElementById('new-amount-button');

let budget = 0;
let expenditure = 0;
let balance = 0;
const expenses = [];

// Set Budget
setBudgetButton.addEventListener('click', function () {
  const totalAmountValue = parseFloat(totalAmountInput.value);
  if (!isNaN(totalAmountValue) && totalAmountValue > 0) {
    budget = totalAmountValue;
    budgetOutput.textContent = budget;
    totalAmountInput.value = '';
  } else {
    document.getElementById('budget-error').classList.remove('hide');
  }
});

newamountButton.addEventListener('click', function () {
  const totalAmountValue = parseInt(prompt("Enter new amount"));
  if (!isNaN(totalAmountValue) && totalAmountValue > 0) {
    budget += totalAmountValue;
    budgetOutput.textContent = budget;
  }
})

// Delete expense
function deleteExpense(index) {
  const expense = expenses[index];
  expenditure -= expense.cost;
  balance = budget - expenditure;

  expenses.splice(index, 1);

  expenditureOutput.textContent = expenditure;
  balanceOutput.textContent = balance;

  expenseListContainer.removeChild(expenseListContainer.childNodes[index]);
}

// Edit expense
function editExpense(index) {
  const expense = expenses[index];
  productTitleInput.value = expense.title;
  productCostInput.value = expense.cost;
  deleteExpense(index);
}

// Check Amount
checkAmountButton.addEventListener('click', function () {
  const productTitleValue = productTitleInput.value;
  const productCostValue = parseFloat(productCostInput.value);
  if (productTitleValue.trim() === '' || isNaN(productCostValue) || productCostValue <= 0) {
    // document.getElementById('product-title-error').classList.remove('hide-error');
    return;
  }

  const expense = {
    title: productTitleValue,
    cost: productCostValue
  };
  expenses.push(expense);
  expenditure += productCostValue;
  balance = budget - expenditure;

  expenditureOutput.textContent = expenditure;
  balanceOutput.textContent = balance;

  // Display expense list
  const expenseItem = document.createElement('div');
  expenseItem.classList.add('expense-item');
  expenseItem.innerHTML = `
    <span>${productTitleValue}</span>
    <span>${productCostValue}</span>
    <span><button class="delete-button">Delete</button></span>
    <span><button class="edit-button">Edit</button></span>
  `;
  expenseListContainer.appendChild(expenseItem);
  // Clear input fields
  productTitleInput.value = '';
  productCostInput.value = '';

  // Add event listener to delete button
  const deleteButton = expenseItem.querySelector('.delete-button');
  deleteButton.addEventListener('click', function () {
    const index = expenses.findIndex(item => item === expense);
    deleteExpense(index);
  });

  // Add event listener to edit button
  const editButton = expenseItem.querySelector('.edit-button');
  editButton.addEventListener('click', function () {
    const index = expenses.findIndex(item => item === expense);
    editExpense(index);
  });
});

