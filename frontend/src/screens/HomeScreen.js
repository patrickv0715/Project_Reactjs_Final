import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useState,useEffect } from 'react'
import axios from 'axios'


const HomeScreen = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts= async()=>{
            const res=await axios.get('/api/products')
            const data=res.data
            // alternatively you can destructure so const {data} = await.get('/api/products')
            setProducts(data)
        }
        fetchProducts()
    },[])
    return (
        <>
            <h1>Latest Products</h1>  
            <Row>
                {products.map((product)=>(
                    <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
