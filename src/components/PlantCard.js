import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const [isInStock, setIsInStock] = useState(true);
  const [price, setPrice] = useState(plant.price);

  const handlePriceUpdate = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(price) }),
    })
      .then((response) => response.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    }).then(() => onDeletePlant(plant.id));
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: $
        <input
          type="number"
          value={price}
          step="0.01"
          onChange={(e) => setPrice(e.target.value)}
        />
      </p>
      <button onClick={handlePriceUpdate}>Update Price</button>
      <button onClick={() => setIsInStock(!isInStock)} className={isInStock ? "primary" : ""}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
