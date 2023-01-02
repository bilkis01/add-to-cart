import React from 'react';

const Items = ({title,description,img,price,quantity}) => {
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
                    <i class="fa-solid fa-trash-can remove"></i>
                    </div>
                </div>
                <hr />
            
        </>
    );
};

export default Items;