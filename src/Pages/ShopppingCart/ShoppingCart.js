import React, { useState, useEffect } from "react";
import { useSelector, useDisatch, useDispatch } from "react-redux";
import "./ShoppingCart.css";
import deleteIcon from "./Delete.svg";

function ShoppingCart() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event, id) => {
    const indexItem = storeState.cart.findIndex((obj) => obj.id === id);

    const objUpdated = {
      ...storeState.cart[indexItem],
      quantity: Number(event.target.value),
    };

    dispatch({
      type: "UPDATEITEM",
      payload: objUpdated,
    });
  };
  const deleteItem = (e, id) => {
    const itemId = storeState.cart.findIndex((obj) => obj.id === id);
    dispatch({
      type: "DELETEITEM",
      payload: itemId,
    });
  };
  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }
  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier :</p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt="Shopping Cart item"
            />
            <div className="bloc-cart-infos">
              <h4>{item.title}</h4>
              <p>Price: {item.price}</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input
                type="number"
                id="quantityInput"
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
            <div>
              <img
                className="delete-icon"
                src={deleteIcon}
                alt="delete icons"
                onClick={(e) => deleteItem(e, item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total : {`${totalPrice.toFixed(2)}€`}</p>
      <button className="btn-cart">Procéder au paiement</button>
    </div>
  );
}

export default ShoppingCart;
