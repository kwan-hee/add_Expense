import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div>
            <div className="card">
               {props.children}
            </div>
        </div>
    );
};

export default Card;
