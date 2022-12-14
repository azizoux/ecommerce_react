import React from "react";
import heart from "./heart.svg";
import "./Products.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Products() {
  const mugs = useSelector((state) => state.mugs);

  return (
    <div className="container-products">
      {mugs &&
        mugs.map((item) => (
          <Link
            to={{
              pathname: `/produits/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <div>
                    <h1>{item.title}</h1>
                  </div>
                  <img className="img-product" src={item.image} alt="produit" />
                  <div className="like-container">
                    <img src={heart} alt="icône j'aime" />
                  </div>
                </div>
                <div className="info">
                  <p>Prix : {item.price}€</p>
                </div>
              </div>
              <div className="back-card"></div>
            </div>
          </Link>
        ))}
    </div>
  );
}
