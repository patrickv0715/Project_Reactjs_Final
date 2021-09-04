import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { listProducts } from '../state/actions/productActions'

// import { bindActionCreators } from 'redux'
// import {actionCreators} from '../state/index'

const HomeScreen = () => {
    const dispatch=useDispatch()

    const {products}=useSelector((state)=>state.productList)
 

    useEffect(()=>{
        console.log("USED EFFECT")
        dispatch(listProducts())
        
    },[dispatch])

    // const products=useSelector((state)=>state.productList)
    // const dispatch=useDispatch()

    // const {getProductList}=bindActionCreators(actionCreators,dispatch)
    
    // useEffect(()=>{
    //     console.log('getting product list')
    //     getProductList()
      
    // },[dispatch])
    return (
        <>
            <h1>Latest Products</h1>  
            <Row>
                {products?products.map((product)=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))
                :<h2>ERROR</h2>
                }
            </Row>


        </>
    )
}

export default HomeScreen
