// PlantCard.js
import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock((prevInStock) => !prevInStock);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> {/* Removed dollar sign here */}
      <button className={inStock ? "primary" : ""} onClick={handleStockToggle}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
      
    </li>
  );
}

export default PlantCard;
