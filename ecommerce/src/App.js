
import './App.css';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartContext } from "./pages/ProductPage";


function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  // local storage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);
  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      
        Hello 
        <Navbar/>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      
    </CartContext.Provider>
  );
}

export default App;
