import React from 'react'
import { Link } from 'react-router-dom'
import { Row,Col, Image, ListGroup,Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
import { useState,useEffect } from 'react'
// import products from '../products'

const ProductScreen = ({match}) => {
    // const product=products.find(p=>p._id===match.params.id)
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const fetchProduct = async()=>{
            const {data}= await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[match])
    return (
        <>
        <Link className='btn btn-dark my-3' to='/'>GO BACK</Link>
        <Row>
            <Col md={12} lg={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={12} lg={3}>
                <ListGroup variant=''>
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={product.numReviews}>
                            reviews
                        </Rating>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={12} lg={3}>
                <Card>
                    <ListGroup variant='fluse'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    {product.price}
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock>0?'In Stock':'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                                ADD TO CART
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ProductScreen
