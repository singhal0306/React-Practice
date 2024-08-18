import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem"
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css"
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangerHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expense.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangerHandler} />
            <ExpensesChart expenses = {filteredExpenses} />
            {filteredExpenses.length === 0 && (<p className="no-data">Found No Expenses.</p>)}
            {filteredExpenses.length > 0 && (
                filteredExpenses.map((expense) => {
                    return (<ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />
                    )
                })
            )}
        </Card>
    )
}
export default Expenses;