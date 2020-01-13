import React from 'react';
import { shallow } from 'enzyme';
import totalAmount from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const sum = totalAmount([]);
    expect(sum).toBe(0);
});

test('Should correctly add a single expense amount', () => {
    const sum = totalAmount([expenses[0]]);
    expect(sum).toBe(1);
})

test('Should sum all expenses amount', () => {
    const sum = totalAmount(expenses);
    expect(sum).toBe(6);
    // expect(totalAmount).toBe(0);
});