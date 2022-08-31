import React,{ useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Expenses from './Expenses';

const ExpenseItem = (props) => {
    
    const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React');

    const clickHandler = () =>{
        setTitle("Update");
        console.log(title);
   }

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </div>
    );
};

export default ExpenseItem;
