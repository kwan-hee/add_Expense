import React, { useState } from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    // console.log('Expense-title', props.items.title);
    const filterChangeHandler = (selectedYear) => {
        // console.log('Expense.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expense found </p>;

    if (filteredExpenses.length >0 ) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
    }
    return (
        <div>
            <div></div>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expense found </p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                    ))
                )} */}
                {expensesContent}
            </div>
        </div>
    );
}

export default Expenses;
