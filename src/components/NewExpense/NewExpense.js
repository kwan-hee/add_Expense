import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';



const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    
    return (
        <div>
            <div className="new-expense">
            <ExpenseForm  onSaveExpenseData={ onSaveExpenseDataHandler} />
            </div>
        </div>
    );
};

export default NewExpense;
