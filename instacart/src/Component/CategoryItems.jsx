import {Link, useParams } from "react-router-dom";

import { useGlobal } from "../Context";  
import "./CategoryItems.css";

function CategoryItems() {
  const {catname} =useParams();
  const { products, AddToCart , cart} = useGlobal();
  console.log(cart);

  const filtered = products.filter((item) => item.category === catname); 

  return (
    
    <div className="category-items-page">
      <button
        className="back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>
      <h2 className="category-title">Items in {catname}</h2> 
      <div className="items-container">
        {filtered.map((item) => (
          
          <div key={item.id} className="item-card">
            <img src={item.thumbnail} alt={item.title} className="item-img" />
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">₹{item.price}</p>
            <Link to={`/product/${item.id}`}>View Products</Link>
            <button className="add-btn" onClick={()=>{AddToCart(item)}}>Add</button>
          </div>
          
        ))}
      </div>
    </div>
    
  );
}

export default CategoryItems;
