import "./App.css"

import Navbar from './Component/Navbar';
import Home from './Home';
import Banner from "./Component/Banner";
import CategoryCards from "./Component/CategoryCards";
import Footer from "./Component/Footer";
import CategoryItems from "./Component/CategoryItems";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Component/ProductDetails";
import Context from "./Context";
import SearchPage from "./Component/SearchPage"
import CartItem from "./Component/CartItem";

function App() {
  return (

    <Context>
    <BrowserRouter>
    <Navbar/>
    <Banner/>
      <Routes>
        <Route path="/" element={<CategoryCards />} />
        <Route path="/category/:catname" element={<CategoryItems />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      </Context>
    
    
  );
}

export default App;
