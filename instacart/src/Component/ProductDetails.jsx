import { useParams } from "react-router-dom"
import { useGlobal } from "../Context"
import "./ProductDetails.css"

function ProductDetails(){

    const {id}= useParams();
    const {products, AddToCart}= useGlobal();
    const filtered= products.filter((item)=>{
        return item.id == id;
    })
    return(
       <div className="product-details-page">
    {filtered.map((item) => (
        <div key={item.id} className="product-box">

            <img 
                src={item.images}
                alt={item.title}
                className="product-img"
            />

            <div className="product-details-right">
                <h2 className="product-title">{item.title}</h2>
                <p className="product-brand">{item.brand}</p>
                <p className="product-price">Price : ₹{item.price}</p>
                
                <button className="add-cart-btn" onClick={()=>{AddToCart(products)}}>Add to cart</button>
                 
                <p className="product-tag">{item.tags}</p>
                <p className="product-desc">{item.description}</p>
                <p className="product-rat">Ratings : {item.rating}</p>
                <p className="product-war">{item.warrantyInformation}</p>
                <p className="product-return">{item.returnPolicy}</p>

            </div>

        </div>
            ))}
        </div>
    );
}

export default ProductDetails