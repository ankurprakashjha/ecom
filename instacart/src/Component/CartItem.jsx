import { useGlobal } from "../Context";
import { Link } from "react-router-dom";

function CartItem(){
    const {cart=[], increaseQty, decreaseQty, removeItem } =useGlobal();

    const total = cart.reduce((s,it) => s + (it.price || 0) * it.qty, 0);

    if (cart.length ===0){
        return(
            <div className="cart-container">
                <h3> Your Cart is empty!! </h3>
                <Link to="/" btn btn-primary mt-3>Go shopping</Link>
            </div>
        )
    }
    return(
        <>
        <div className="cart-container">
            <h3> Your Cart</h3>

            {cart.map(item =>(
                <div key={item.id} className="cart-item">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-2">
                            <img src={item.thumbnail} className="img-fluid" alt={item.title} />
                        </div>
                        <div className="col-md-6">
                            {item.title}
                            {item.price}
                        </div>
                        <div className="col-md-2 text-center">
                            <div className="d-flex align-items-center justify-content-center">
                                <button className="btn btn-sm secondary" onClick={()=> decreaseQty(item.id)}>-</button>
                                <span className="mx-2">{item.qty}</span>
                                <button className="btn btn-sm secondary" onClick={()=> increaseQty(item.id)}>+</button>
                            </div>
                        </div>
                        <div className="col-md-2 text-end">
                            <button className="btn btn-danger" onClick={()=> removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="card p-3">
                <h4>Total = {total}</h4>
                <Link to="/checkout" className="btn btn-primary mt-3 w-100">Proceed to checkout</Link>
            </div>
        </div>
        </>
    )
}

export default CartItem