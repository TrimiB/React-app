import "./ExpenseItem.css";

function ExpensItem() {
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$467,88</div>
      </div>
    </div>
  );
}

export default ExpensItem;
