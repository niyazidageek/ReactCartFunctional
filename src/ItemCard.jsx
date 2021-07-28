import React from 'react';
import { useCart } from 'react-use-cart';

const ItemCard = ({title, img, description, price, item}) => {
    const {addItem} = useCart()
    return (
        <div style={{width:"max-content"}}> 
            <div className="card col-3" style={{ width:"max-content"}} >
                <img className="card-img-top" src={img} alt="" />
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <h3>{price} $</h3>
                    <button className="btn btn-success" onClick={()=>addItem(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;

