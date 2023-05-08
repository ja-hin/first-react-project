import './ExpenseItem.css'
import './body.css'
import Expensedate from './Expensedate';

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <Expensedate date={props.date}/>
      <div className="expense-item__description">
        <h2>
          {props.title}
        </h2>
      </div>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}
export default ExpenseItem