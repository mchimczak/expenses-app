import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses'
import { shallow } from 'enzyme';


test('Should render component correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})

test('Should render component correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={11} expensesTotal={112453455} />);
    expect(wrapper).toMatchSnapshot();
})