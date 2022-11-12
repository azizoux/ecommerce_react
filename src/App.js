import React from "react";
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
import { AppContextProvider } from "./Context/AppContext";

function App() {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <FloatingCart />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produits" element={<Products />} />
          <Route exact path="/produits/:id" element={<ProductShowCase />} />
          <Route exact path="/shoppingCart" element={<ShoppingCart />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AppContextProvider>
    </Provider>
  );
}

export default App;
