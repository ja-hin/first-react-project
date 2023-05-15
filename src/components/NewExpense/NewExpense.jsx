import React from "react"
import './NewExpense.css'
import Expenseform from "./ExpenseForm"

function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          
        };
        props.onAddExpense(expenseData);
      };

    return(
        <div className="new-expense">
            <Expenseform onSaveExpenseData={saveExpenseDataHandler}/>
        </div>

    ); 
}
export default NewExpense