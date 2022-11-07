import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductShowCase.css";
import inventory from "../../data/inventory";

function ProductShowCase() {
  const [nbMugs, setNbMugs] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const productClickedIndex = inventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const updateMugs = (e) => {
    setNbMugs(Number(e.target.value));
  };

  const addToCart = (e) => {
    e.preventDefault();
    const itemAdded = {
      ...inventory[productClickedIndex],
      quantity: nbMugs,
    };
    dispatch({
      type: "ADDITEM",
      payload: itemAdded,
    });
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
            process.env.PUBLIC_URL +
            `/images/${inventory[productClickedIndex].img}.png`
          }
          alt=""
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClickedIndex].title}</h2>
        <p>Prix: {inventory[productClickedIndex].price}</p>
        <h3>Description: </h3>
        <small>{inventory[productClickedIndex].description}</small>
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
