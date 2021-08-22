import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {combineReducers} from 'redux'
import productListReducer from './reducers/productListReducer'

const reducers=combineReducers({
    productList:productListReducer
})

const store=createStore(reducers,[],applyMiddleware(thunk))

export default store
