import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Items = ({id,title,description,img,price,quantity}) => {

    const {removeItem} = useContext(CartContext);
    return (
        <>
            <div className="items-info">
                    <div className="product-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="title">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="add-minus-quantity">
                    <i class="fa-solid fa-minus minus"></i>
                    <input type="text" placeholder='2' />
                    <i class="fa-solid fa-plus add"></i>
                    </div>
                    <div className="price">
                        <h3>{price} tk  </h3>
                    </div>
                    <div className="remove-item">
                    <i class="fa-solid fa-trash-can remove" onClick={()=>removeItem(id)}></i>
                    </div>
                </div>
                <hr />
            
        </>
    );
};

export default Items;