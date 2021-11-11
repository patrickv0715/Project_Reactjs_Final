import React,{useEffect} from 'react'
import {Button,Row,Col,Image,Card, ListGroup,} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import CheckoutSteps from '../components/CheckoutSteps'
import { Link } from 'react-router-dom'
import { getOrderDetails } from '../state/actions/orderActions'

const OrderScreen = ({match}) => {
    const orderId=match.params.id
    const dispatch=useDispatch()
    const orderCreate=useSelector(state=>state.orderDetails)
    const {order, loading,error}=orderCreate

    if(!loading){
        const addDecimals=(num)=>{
        return (Math.round(num*100)/100).toFixed(2)
        }
        order.itemsPrice=addDecimals(order.orderItems.reduce(((total,item)=>total+item.price*item.qty),0))
    }

    useEffect(()=>{
        if(!order||orderId!==order._id)dispatch(getOrderDetails(orderId))
    },[])
    return loading?<Loader/>:error?<Message variant='danger'>{error}</Message>:
        <>
            <h1>Order {orderId}</h1>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p><strong>Name: </strong> {order.user.name}</p>
                            <p><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                            
                            <p>
                                <strong>Address:</strong>
                                {order.shippingAddress.address},{order.shippingAddress.city}{order.shippingAddress.postlaCode}, {order.shippingAddress.country}
                                {order.isDelivered? <Message variant='success'>Deliverd on {order.isDelivered}</Message>: <Message variant='danger'>Not Delivered</Message>}

                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                            <strong>
                                Method: 
                            </strong>
                            {order.paymentMethod}
                            </p>
                            {order.isPaid? <Message variant='success'>Paid on {order.paidAt}</Message>: <Message variant='danger'>Not Paid</Message>}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {order.orderItems.length===0?<Message>ORDER IS EMPTY</Message>:(
                                <ListGroup variant='flsuh'>
                                    {order.orderItems.map((item,index)=>(
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={ `/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${item.qty*item.price}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>${order.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>${order.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>${order.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${order.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error&&<Message variant='danger'>{error}</Message>}
                                </ListGroup.Item>
                            <ListGroup.Item>
                                <Button type='buttong' className='btn-block' disable={order.cartItems===0} >
                                    Proceed to Checkout
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
}

export default OrderScreen
