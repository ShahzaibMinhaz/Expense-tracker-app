const TransactionReducer = (state,action) => {
    switch(action.type){
        case 'ADD_TRANSACTION' : {
           return [action.payload , ...state]
        }
        // case 'DELETE_TRANSACTION' : {
        //     return [state.splice[action.payload],1]
        // }
        default:
            return state    
    }
}
export default TransactionReducer