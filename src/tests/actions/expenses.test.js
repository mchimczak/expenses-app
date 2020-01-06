import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('Should remove expense', () => {
    const action = removeExpense({ id: '123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('Should edit expense', () => {
    const action = editExpense(123, {amount: '999'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: {
            amount: '999'
        }
    });
});

test('Should create new expense with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:  '',
            notes: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});

test('Should create new expense with default values', () => {
    const expenseData = { 
        description: 'test',
        notes: '',
        amount: 1,
        createdAt: 1000 
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});
