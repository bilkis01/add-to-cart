import React, { createContext, useReducer } from 'react';
import './Cart.css'
import ContextCart from './ContextCart';
import { products } from './Products';
import { reducer } from './reducer';


export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}

const Cart = () => {

    // const [item,setItem] = useState(products);

    const [state, dispatch] = useReducer(reducer, initialState);

    // remove item
    const removeItem = (id) => {
        console.log(id);
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })

    }

    // clear all cart

    const clearCart = () => {
        return dispatch({
            type: "CLEAR_CART"
        })
    }

    return (
        <CartContext.Provider value={{ ...state, removeItem, clearCart }} >
            <ContextCart></ContextCart>
        </CartContext.Provider>
    );
};

export default Cart;