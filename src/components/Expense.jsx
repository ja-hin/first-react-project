import React, {useState} from 'react';
import Card from './Card';
import ExpenseFilter from './ExpenseFilter';
import './Expense.css';
import ExpensesList from './ExpensesList';

const Expenses=({items})=> {
  const[filteredYear, setFilteredYear]= useState('ALL');
  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=items.filter(expense=>{
    if(filteredYear==='ALL'){
      return true 
    }else{

      return expense.date.getFullYear().toString()===filteredYear
    }
  })

  return (
    <div>
     <Card className="expenses">
     <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items ={filteredExpenses}/>
     </Card>
     </div> 
  );
}
export default Expenses;