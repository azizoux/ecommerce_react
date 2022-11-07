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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        assumenda rerum quam consequatur, vero non rem earum quasi labore,
        quaerat, debitis quas cumque officiis vitae magni maiores eveniet
        perspiciatis sequi.
      </p>
      <img src={imgHomeShop} alt="ImageShop" />
    </div>
  );
}

export default Home;
