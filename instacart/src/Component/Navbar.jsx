import "./Navbar.css";
import { useGlobal } from "../Context";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const {cart=[],updateSearch, searchTerm } = useGlobal();

    const count= cart.reduce((s,it)=> s + (it.qty || 0), 0);

    const navigate = useNavigate();

    const handleSearch = (e) =>{
        updateSearch(e.target.value);
        navigate("/search")
    }
    
    return(
        <>
        <div className="nav-container">
            <div className="lg"><img src="https://logowik.com/content/uploads/images/purplle5775.logowik.com.webp" alt="logo" /></div>
            <div className="srch">
                <Link className="navbar-brand" to="/"></Link>
                <input class="inp" type="search" placeholder="Search"  aria-label="Search"
                value={searchTerm}
                onChange={handleSearch}/>
            </div>
            <div className="lgn">
                 <button class="login-btn" type="submit">Login</button>
            </div>
            <div className="crt">
                <Link to="/cart">
                 <button className="cart-btn">Cart {count > 0 &&(
                    <span className="badge position-absolute top-0 start-100 translate-middle">
                        {count}
                    </span>
                 )}</button></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar