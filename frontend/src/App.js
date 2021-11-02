import Header from "./components/Header"
import Footer from "./components/Footer"
import {Container} from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router,Route } from "react-router-dom";
import ProductScreen from './screens/ProductScreen'
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
function App() {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/login' component={LoginScreen}/>
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/product/:id' component={ProductScreen}/>
          {/* ? in path indicates that it is optional */}
          <Route path='/cart/:id?' component={CartScreen}/> 
          <Route path='/profile' component={ProfileScreen}/>
          <Route path='/shipping' component={ShippingScreen}/>
          <Route path='/payment' component={PaymentScreen}/>
          <Route path='/placeorder' component={PlaceOrderScreen}/>

        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
