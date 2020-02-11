import { login, logout } from '../../actions/auth'

test('Should login properly with given uid', () => {
    const uid = 'abcde'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should logout properly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});