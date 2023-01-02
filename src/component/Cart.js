import React, { createContext, useReducer } from 'react';
import './Cart.css'
import ContextCart from './ContextCart';
import { products } from './Products';
import { reducer } from 'react';


export const CartContext = createContext();

const initialState ={
    item: products,
    totalAmount:0,
    totalItem:0,
}

const Cart = () => {

    // const [item,setItem] = useState(products);

    const [state, dispatch]= useReducer(reducer,initialState)

    return (
        <CartContext.Provider value={products}>
            <ContextCart></ContextCart>
        </CartContext.Provider>
    );
};

export default Cart;