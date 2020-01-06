import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../../actions/filters';
import moment from 'moment'

test('Should set text filter with value', () => {
    const action = setTextFilter('gasbills');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'gasbills'
    });
});
test('Should set text filter with defaukt', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});

test('Should sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should set start day filter', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('Should set end date filter', () => {
    const action = setEndDate(moment(9))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(9)
    });
});