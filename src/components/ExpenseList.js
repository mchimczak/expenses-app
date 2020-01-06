import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {
    console.log(props);
    let expenses;

    if (props.expenses.length === 0) {
        return expenses = <p>No list to render</p>
    } else {
        expenses = props.expenses.map(expense => {
            return (
                <ExpenseListItem key={expense.id} {...expense} />
            )
        });
    }


    return ( 
        <div>
            {expenses}
        </div>
     );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);