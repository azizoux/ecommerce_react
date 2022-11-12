import React from "react";
import "./Home.css";
import imgHomeShop from "./shopimg.jpg";

function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Parcourez notre sélection de mug shop : vous y trouverez les meilleures
        pièces uniques ou personnalisées de nos mugs boutiques.
      </p>
      <img src={imgHomeShop} alt="ImageShop" />
    </div>
  );
}

export default Home;
