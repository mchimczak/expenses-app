export default (expenses) => {
    return expenses.map(exp => exp.amount)
            .reduce((sum, currVal) => sum += currVal, 0);
};