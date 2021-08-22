import axios from 'axios'
export const getProductList=()=>{
    return async(dispatch)=>{
        dispatch({
            type:"PRODUCT_LIST_REQUEST",
            payload:["requested"]
        })
        const {data}=await axios.get('/api/products')
        console.log(`fetched: ${data[1].name}`)
        dispatch({
            type:"PRODUCT_LIST_SUCCESS",
            payload:data
        })
    }
}
