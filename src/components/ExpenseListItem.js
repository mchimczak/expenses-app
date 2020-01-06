import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {

    return ( 
        <div>
            <p>{description}</p>
            <p>{amount}</p>
            <p>{createdAt}</p>
            <Link to={`/edit/${id}`}>Edit</Link>
        </div>
     );
};

export default ExpenseListItem;