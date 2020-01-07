import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({ id, description, amount, createdAt }) => {

    return ( 
        <div>
            <p>{description}</p>
            <p>{ numeral(amount / 100).format('$0,0.00') }</p>
            <p>{ moment(createdAt).format("Do, MMMM, YYYY") }</p>
            <Link to={`/edit/${id}`}>Edit</Link>
        </div>
     );
};

export default ExpenseListItem;