import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ProductShowCase.css";
import { AppContext } from "../../Context/AppContext";
import { API } from "../../api/api-service";
import { useDispatch } from "react-redux";

function ProductShowCase() {
  const [nbMugs, setNbMugs] = useState(1);
  const dispatch = useDispatch();
  const { mugs, carts, setCarts } = useContext(AppContext);
  const { id } = useParams();
  const productClickedIndex = mugs.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );
  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const updateMugs = (e) => {
    setNbMugs(Number(e.target.value));
  };

  const addToCart = async (e) => {
    e.preventDefault();
    const selectedProduct = mugs[productClickedIndex];
    const newCart = {
      mug: selectedProduct,
      quantity: nbMugs,
    };

    if (carts.length === 0) {
      const createdCart = await API.createCart({
        mug: selectedProduct,
        quantity: nbMugs,
        payed: false,
      });

      dispatch({
        type: "ADDITEM",
        payload: createdCart,
      });
    } else {
      const newCarts = [...carts];
      const productIndex = newCarts.findIndex(
        (obj) => obj.mug.id === selectedProduct.id
      );
      if (productIndex === -1) {
        newCarts.push(newCart);
        setCarts(newCart);
        const createdCart = await API.createCart({
          mug: selectedProduct,
          quantity: nbMugs,
          payed: false,
        });
        dispatch({
          type: "ADDITEM",
          payload: createdCart,
        });
      } else {
        const cart_to_update = await API.getCartByMugId(selectedProduct.id);
        const result = await API.updateCart(cart_to_update.id, {
          mug: selectedProduct,
          quantity: cart_to_update.quantity + nbMugs,
          payed: false,
        });
        dispatch({
          type: "UPDATEITEM",
          payload: result,
        });
      }
    }

    addingInfo.current.innerText = "Ajouté au panier";
    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, []);

  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          className="img-showcase"
          src={
            mugs[productClickedIndex] ? mugs[productClickedIndex].image : null
          }
          alt=""
        />
      </div>
      <div className="product-infos">
        <h2>
          {mugs[productClickedIndex] ? mugs[productClickedIndex].title : null}
        </h2>
        <p>
          Prix:{" "}
          {mugs[productClickedIndex] ? mugs[productClickedIndex].price : null}€
        </p>
        <h3>Description: </h3>
        <small>
          {mugs[productClickedIndex]
            ? mugs[productClickedIndex].description
            : null}
        </small>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité</label>
          <input
            type="number"
            id="quantity"
            value={nbMugs}
            onChange={updateMugs}
          />
          <button>Ajouter au panier</button>
          <span ref={addingInfo} className="adding-info"></span>
        </form>
      </div>
    </div>
  );
}

export default ProductShowCase;
