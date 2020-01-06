import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy: incrementBy
})
const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});
const setCount = ({count = 0, name = 'Hur'} = {}) => ({
    type: 'SET',
    count,
    name
})
const resetCount = () => ({
    type: 'RESET',
    count: 0
})

//Reducers

const countReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count,
                name: action.name
            }
        case 'RESET':
            return {
                count: 0
            }


        default:
            return state;
    }
};

const store = createStore(countReducer)

//return value from store.subscribe cancel subscription
//we can call it as a func like below
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch(incrementCount({incrementBy: 200}))
store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy: 100}))
store.dispatch(setCount({count: 20, name:'psik'}));