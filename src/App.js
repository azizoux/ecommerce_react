import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductShowCase from "./Pages/ProductShowcase/ProductShowCase";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShopppingCart/ShoppingCart";
import Navbar from "./Components/Navbar/Navbar";
import FloatingCart from "./Components/FloatingCart/FloatingCart";
import { API } from "./api/api-service";

function App() {
  useEffect(() => {
    async function fetchData() {
      const data = await API.getMugs().catch((err) => console.log(err));
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <Provider store={store}>
        <FloatingCart />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produits" element={<Products />} />
          <Route exact path="/produits/:id" element={<ProductShowCase />} />
          <Route exact path="/shoppingCart" element={<ShoppingCart />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
