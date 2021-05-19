import "./ExpenseItem.css";

function ExpensItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car insurance";
  const expenseAmount = 246.99;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpensItem;
