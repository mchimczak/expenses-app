import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'



const ExpenseDashboardPage = () => (
    <div>
        <p>New app from Dash component</p>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);



export default ExpenseDashboardPage