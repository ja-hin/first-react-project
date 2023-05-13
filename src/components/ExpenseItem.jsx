import React,{useState } from 'react';
import './ExpenseItem.css';
import './body.css';
import Card from './Card';
import ExpenseDate from './Expensedate';

const ExpenseItem=(props)=> {
  const [title,setTitle]=useState(props.title)                                                            
  const clickHandler=()=>{
    setTitle("update")
  }
  const [amount,setAmount]=useState(props.amount)                                                            
  const clickFandler=()=>{
    setAmount("4330")
  }
  return(
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description '>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}> Change title</button>
      <button onClick={clickFandler}> Change title</button>

    </Card>
  );
}

export default ExpenseItem;