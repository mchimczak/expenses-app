import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, removeExpense, editExpense, startAddExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, amount, createdAt, note }) => {
        expenseData[id] = { description, amount, createdAt, note };
    })
    database.ref('expenses').set(expenseData).then(() => done());
});

test('Should remove expense', () => {
    const action = removeExpense({ id: '123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123'
    });
});

test('Should remove specific expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;

    store.dispatch(startRemoveExpense({id})).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('Should edit expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    const updates = { amount: 12345 };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });

        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
    });
});

test('Should create new expense with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add new expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = { description: 'google ads', notes: '', amount: 230, createdAt: 4352 };

    store.dispatch(startAddExpense(expenseData)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
    });
});

test('Should add new expense with default values to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = { description: '', notes: '', amount: 0, createdAt: 0 };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
});

test('Should setup set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});

test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

