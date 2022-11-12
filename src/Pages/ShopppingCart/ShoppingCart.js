import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShoppingCart.css";
import deleteIcon from "./Delete.svg";
import { API } from "../../api/api-service";

function ShoppingCart() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlePayment = async () => {
    const cart = storeState.cart;
    console.log("storeState.cart.id", cart);
    for (const item of cart) {
      const result = await API.updateCart(item.id, {
        ...item,
        payed: true,
      });
    }
    dispatch({
      type: "PAYEITEM",
      payload: "",
    });
  };

  const handleChange = async (event, item) => {
    const result = await API.updateCart(item.id, {
      mug: item.mug,
      quantity: event.target.value,
      payed: false,
    });
    console.log("result:", result);
    dispatch({
      type: "UPDATEITEM",
      payload: result,
    });
  };
  const deleteItem = async (e, id) => {
    const itemDeleted = await API.deleteCart(id);
    console.log("itemDeleted:", itemDeleted);
    const itemId = storeState.cart.findIndex((obj) => obj.id === id);
    dispatch({
      type: "DELETEITEM",
      payload: itemId,
    });
  };
  let totalPrice = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.mug.price * item.quantity;
      totalPrice += itemPrice;
    }
  }
  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier :</p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img src={item.mug.image} alt="Shopping Cart item" />
            <div className="bloc-cart-infos">
              <h4>{item.mug.title}</h4>
              <p>Price: {item.mug.price * item.quantity}€</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input
                type="number"
                id="quantityInput"
                value={item.quantity}
                onChange={(e) => handleChange(e, item)}
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
      <button onClick={handlePayment} className="btn-cart">
        Procéder au paiement
      </button>
    </div>
  );
}

export default ShoppingCart;
