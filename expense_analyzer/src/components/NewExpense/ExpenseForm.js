import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) =>{
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setDate(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        props.onExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" onChange={titleChangeHandler} value={title}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="number" min={0.01} step={0.01} onChange={amountChangeHandler} value={amount}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}value={date}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}
export default ExpenseForm;