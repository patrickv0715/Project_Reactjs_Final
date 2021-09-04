import { PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST } from "../constants/productConstants"

export const productListReducer = (state={products:[]},action) =>{
    console.log('in reducer')
    switch(action.type){
        case {PRODUCT_LIST_REQUEST}:
            return {loading:true, products:[]}
        case {PRODUCT_LIST_SUCCESS}:
            {console.log('dispatching data')
            return {loading:false, products:action.payload}}
        case{ PRODUCT_LIST_FAIL}:
            return {loading:false, products:action.payload}
        default:
            return {loading:false, products:action.payload}}
    }
