
export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curElm) => {
                return curElm.id !== action.payload;
            })
        }

    }

    // Increment

    if (action.type === "INCREMENT") {
        let updateCart = state.item.map((curElm) => {
            if (curElm.id === action.payload) {
                return {
                    ...curElm, quantity: curElm.quantity + 1
                }
            }
            return curElm;

        })
        return {
            ...state, item: updateCart,
        }
    }

    // Decrement

    if (action.type === "DECREMENT") {
        let updateCartDec = state.item.map((curElm) => {
            if (curElm.id === action.payload) {
                return {
                    ...curElm, quantity: curElm.quantity - 1
                }

            } return curElm;
        }).filter((curElm) => curElm.quantity !== 0)
        return {
            ...state, item: updateCartDec
        }
    }

    // Clear cart

    if(action.type === 'CLEAR_CART'){
        return {
            ...state,
            item: []
        }
    }

    return state;
};