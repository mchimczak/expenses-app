import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 1,
    createdAt: 0
},{
    id: '2',
    description: 'duck',
    note: '',
    amount: 2,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},{
    id: '3',
    description: 'Check',
    note: '',
    amount: 3,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses;