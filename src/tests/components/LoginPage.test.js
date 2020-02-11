import { shallow } from 'enzyme';
import React from 'react';
import { LoginPage } from '../../components/LoginPage';
// import { startLogin } from '../../actions/auth';

let wrapper, startLogin;

beforeAll(() => {
    startLogin = jest.fn(),
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
})

test('Should display LoginPage properly', () => {
    // const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin func after Login button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
})