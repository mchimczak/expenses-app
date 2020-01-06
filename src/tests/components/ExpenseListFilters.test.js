import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
    setTextFilter = jest.fn(), 
    sortByDate = jest.fn(), 
    sortByAmount = jest.fn(), 
    setStartDate = jest.fn(), 
    setEndDate = jest.fn(),
    wrapper = shallow(
        <ExpenseListFilters
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            filters = {filters}
        />)
});

test('Should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
    const newFilter = {
        target: 'new filterzz'
    };
    wrapper.find('input').at(0).simulate('change', newFilter);
    expect(setTextFilter).toHaveBeenLastCalledWith(newFilter.target.value);
});

test('Should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by date', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('Should set date changes', () => {
    const startDate = moment(0).add(3, 'days');
    const endDate = moment(0).add(10, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalled();
    expect(setEndDate).toHaveBeenCalled();
});

test('Should focus calendar', () => {
    const value = true;
    wrapper.find('DateRangePicker').prop('onFocusChange')(value);
    expect(wrapper.state('calendarFocused')).toEqual(true);
})