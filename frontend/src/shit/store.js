import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
import { productListReducer } from './reducers/productReducers'

const reducer=combineReducers({
    productList:productListReducer,
})

const initialState={}

const middleware=[thunk]

const store=createStore(reducer,initialState, applyMiddleware(thunk))

export default store