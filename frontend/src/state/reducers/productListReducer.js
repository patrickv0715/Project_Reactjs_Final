
const reducer = (state=['EMPTY'],action) =>{
    switch(action.type){
        case "PRODUCT_LIST_REQUEST":
            return []
        case "PRODUCT_LIST_SUCCESS":
            return action.payload
        default:
            return state
    }
}
export default reducer;