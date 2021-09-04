import { PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST } from "../constants/productConstants"
import axios from 'axios'

export const listProducts=()=>async(dispatch)=>{
    try{
        dispatch({type:PRODUCT_LIST_REQUEST,payload:[]})

        const {data}=await axios.get('/api/products')
        console.log(data)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        console.log("PRODUCT ACTION ERROR")
            dispatch({
                type:PRODUCT_LIST_FAIL,
                payload:error.response && error.response.data.message ?error.response.data.message: error.message
            
            })
    }
}