import React from "react"
import './NewExpense.css'
import Expenseform from "./ExpenseForm"

function NewExpense(){

    return(
        <div className="new-expense">
            <Expenseform/>
        </div>

    ); 
}
export default NewExpense