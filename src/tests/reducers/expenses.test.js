import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
})

test('Should add new expense', () => {
    const newExpense = {
        description: 'New',
        amount: 999,
        id: '109'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        newExpense
    ]);
});

test('Should remove an expense', () => {
    const action =  {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should NOT remove an expense', () => {
    const action =  {
        type: 'REMOVE_EXPENSE',
        id: '100'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('Should edit existing expense', () => {
    const amount = 999
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount);
});

test('Should not edit existing expense if id not found', () => {
    const amount = 999
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1000,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: expenses[1]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses[1])
})