import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart

     } = useCart()

     if(isEmpty) return <h1 className="text-center">Cart is empty</h1>

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h4>Cart: {totalUniqueItems} || Total items: {totalItems}</h4>
                    <table className="table table-light table-hover m-1">
                        {
                            items.map((item, index)=>{
                                
                                return(
                                    <tr key={index}>
                                    <td>
                                        <img src={item.img} alt="" />
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.price} $
                                    </td>
                                    <td>
                                        Quantity: {item.quantity}
                                    </td>
                                    <td>
                                        <button className="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                        <button className="btn btn-info ms-2" onClick={()=>updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                        <button className="btn btn-info ms-2" onClick={()=>removeItem(item.id)}>Remove item</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </table>
                    <div className="total-price">
                        <h1>Total price : {cartTotal} $</h1>
                    </div>
                    <button className=" btn btn-danger" onClick={emptyCart}>Empty cart</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
