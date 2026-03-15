<div className="product-grid">
  {plantsArray.map((plant) => (
    <div className="plant-card" key={plant.name}>

      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>

      <p>{plant.description}</p>

      <p>{plant.cost}</p>

      <button
        onClick={() => handleAddToCart(plant)}
        disabled={addedToCart[plant.name]}
      >
        {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
      </button>

    </div>
  ))}
</div>
