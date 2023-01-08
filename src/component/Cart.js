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
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })

    }

    // increment

   const increment = (id)=>{
    return dispatch ({
        type: "INCREMENT",
        payload: id,
    })
   }

//    decrement

const decrement =(id) =>{
    return dispatch ({
        type: "DECREMENT",
        payload: id,
    })

}

const clearCart = ()=>{
    return dispatch({
        type: "CLEAR_CART"
    })
}

   
    return (
        <CartContext.Provider value={{ ...state, removeItem,increment,decrement,clearCart }} >
            <ContextCart></ContextCart>
        </CartContext.Provider>
    );
};

export default Cart;