import './ExpenseItem.css';

function ExpenseItem() {
  return (
    // Special JSX syntax that looks like html but it is not... class = className (class is a reserved word in js)
    <div className='expense-item'>
      <div>Date</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
