import React from 'react';
import Expenses from './components/Expense'
import NewExpense from './components/NewExpense/NewExpense';
const App=()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", 
      title: "New TV",
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Milk",
      amount: 50,
      date: new Date(2021, 5, 8),
    },
  ];
  const sum=(a,b)=>{
    return console.log(a+b)
  }

  return (
    <div>
      <NewExpense/>
      <Expenses items = {expenses} sum={sum}/>
    </div>
  );
}

export default App;
