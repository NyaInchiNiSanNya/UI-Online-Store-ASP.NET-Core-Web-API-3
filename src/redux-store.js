import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from './Reducers/auth-reducer';
import productReducer from "./Reducers/product-reducer";
import tagReducer from "./Reducers/tag-reducer";
import {thunk as thunkMiddleware} from "redux-thunk" 
import { reducer as formReducer } from 'redux-form'

let reducers= combineReducers({
    auth: authReducer,
    products: productReducer,
    tags: tagReducer,
    form: formReducer

})

let store =createStore(reducers, applyMiddleware(thunkMiddleware)); 
export default store;