import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';
// import { startLogout } from '../../actions/auth';

test('Should render Header correctly', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})