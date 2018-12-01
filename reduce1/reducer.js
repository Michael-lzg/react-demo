const tiger = 10000

//这是action
const increase = {
    type: 'addPrice'
}
const decrease = {
    type: 'dePrice'
}
//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case 'addPrice':
            return state += 100;
        case 'dePrice':
            return state -= 100;
        default:
            return state;
    }
}
export default reducer