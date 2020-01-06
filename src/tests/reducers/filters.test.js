import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter', () => {
    const action = { type: 'TEXT_FILTER', text: 'New filter' }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: 'New filter',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBt: 'amount'
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('should sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set start date', () => {
    const action = { type: 'SET_START_DATE', startDate: moment() };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(action.startDate);
});

test('Should set end date', () => {
    const action = { type: 'SET_END_DATE', endDate: moment() };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(action.endDate);
});