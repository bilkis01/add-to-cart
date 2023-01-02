import React, { useContext } from 'react';
import './Cart.css'
import Items from './Items';
import { CartContext } from './Cart';

const ContextCart = () => {

    // const [item, setItem] = useState(products);

    const {item} = useContext(CartContext);

    return (
        <div>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>Continue Shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>7</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className='total-items'>You have <span className='total-items-count'>7</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">

                        {
                            item.map((curItem) => {
                                return (

                                    <Items key={curItem.id} {...curItem}></Items>
                                )
                            })
                        }

                    </div>
                </div>
                <div className="card-total">
                    <h3>Cart Total :  <span> 22000 tk </span></h3>
                    <button>Checkout</button>
                </div>
            </section>

        </div>
    );
};

export default ContextCart;