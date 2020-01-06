import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

//ADD_EXPENSE
const addExpense = ({ description = '', notes = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const demoState = {
    expenses: [{
        id: 'ndbndo',
        description: 'Jan rent',
        note: 'final payment',
        amout: 54100,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//Expenses reducer
const expensesReducerDefaultState = []
// const expensesReducerDefaultState = demoState.expenses
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'EDIT_EXPENSE':
            return state.map(expense => {
                 if (expense.id === action.id) {
                     return {
                         ...expense,
                         ...action.updates
                     };
                 } else {
                    return expense;
                 }
                });

        case 'REMOVE_EXPENSE':
            return state.filter(el => el.id !== action.id)

        default:
            return state;
    }
}


const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
const sortByStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
const sortByEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})




//Filter reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
}


//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate,
                endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate,
                textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return  startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', notes: 'pay next ASAp', amount: 2000, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({description: 'Coffe', notes: 'pay next ASAp', amount: 1000, createdAt: 2000 }))
// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 999}))

// store.dispatch(setTextFilter('coffe'))
// store.dispatch(setTextFilter(''))
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(sortByStartDate(500));
// store.dispatch(sortByStartDate());
// store.dispatch(sortByEndDate(1000));
// store.dispatch(sortByEndDate());