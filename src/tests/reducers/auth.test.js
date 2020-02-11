import authReducer from '../../reducers/auth';

test('Should login user', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abcd'
    };
    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('Should logout user', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything' }, action);

    expect(state).toEqual({});
})