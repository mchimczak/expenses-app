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

export default expensesReducer;