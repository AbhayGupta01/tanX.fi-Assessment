import React from "react";
import { Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import LoginRegister from "./LoginRegister/Index";
import Navbar from "./Navbar";
import Favourites from "./favourites";
import Product from "./Products/Product.js";
import Products from "./Products";
import Cart from "./cart";
function App() {
  useEffect(() => {
    // Check if "currUser" is not set in localStorage, set it to "false"
    if (!localStorage.getItem("currUser")) {
      localStorage.setItem("currUser", "false");
    }
  }, []);
  return (
    <div style={{ backgroundColor: "#e5edf6" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favourites" element={<Favourites />} />
        
        <Route path="/products/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
