import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      {
        name: "Lavender",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        description: "A fragrant herb known for its calming scent.",
        cost: "$10"
      },
      {
        name: "Mint",
        image: "https://images.unsplash.com/photo-1598908314732-07113901949e",
        description: "Fresh mint plant perfect for drinks and food.",
        cost: "$8"
      },
      {
        name: "Basil",
        image: "https://images.unsplash.com/photo-1615486364237-44c04b14f4e3",
        description: "Aromatic basil plant used in many dishes.",
        cost: "$9"
      },
      {
        name: "Rosemary",
        image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
        description: "A fragrant herb used in cooking.",
        cost: "$7"
      },
      {
        name: "Thyme",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe",
        description: "Aromatic herb used in Mediterranean cuisine.",
        cost: "$6"
      },
      {
        name: "Sage",
        image: "https://images.unsplash.com/photo-1622819584099-c8d8d6e3a0f2",
        description: "Herb with medicinal and culinary uses.",
        cost: "$7"
      }
    ]
  },

  {
    category: "Medicinal Plants",
    plants: [
      {
        name: "Aloe Vera",
        image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6",
        description: "Medicinal plant used for skin treatment.",
        cost: "$12"
      },
      {
        name: "Tulsi",
        image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c",
        description: "Sacred plant with many health benefits.",
        cost: "$10"
      },
      {
        name: "Neem",
        image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0",
        description: "Powerful medicinal tree.",
        cost: "$11"
      },
      {
        name: "Ashwagandha",
        image: "https://images.unsplash.com/photo-1602928298849-325cec8771c5",
        description: "Popular Ayurvedic medicinal herb.",
        cost: "$13"
      },
      {
        name: "Chamomile",
        image: "https://images.unsplash.com/photo-1615486364237-44c04b14f4e3",
        description: "Used for calming tea and medicine.",
        cost: "$9"
      },
      {
        name: "Echinacea",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
        description: "Boosts immune system.",
        cost: "$14"
      }
    ]
  },

  {
    category: "Indoor Plants",
    plants: [
      {
        name: "Snake Plant",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5f1f",
        description: "Low maintenance indoor plant.",
        cost: "$15"
      },
      {
        name: "Peace Lily",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a",
        description: "Beautiful indoor flowering plant.",
        cost: "$16"
      },
      {
        name: "Spider Plant",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
        description: "Air purifying plant.",
        cost: "$11"
      },
      {
        name: "Pothos",
        image: "https://images.unsplash.com/photo-1587502537745-84f1c8d6f0ab",
        description: "Perfect plant for beginners.",
        cost: "$10"
      },
      {
        name: "ZZ Plant",
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5f1f",
        description: "Very hardy indoor plant.",
        cost: "$18"
      },
      {
        name: "Rubber Plant",
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a",
        description: "Large decorative indoor plant.",
        cost: "$20"
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart({
      ...addedToCart,
      [plant.name]: true
    });
  };

  return (
    <div>

      {plantsArray.map((category) => (
        <div key={category.category}>

          <h2>{category.category}</h2>

          <div className="product-grid">

            {category.plants.map((plant) => (
              <div className="plant-card" key={plant.name}>

                <img src={plant.image} alt={plant.name} width="200" />

                <h3>{plant.name}</h3>

                <p>{plant.description}</p>

                <p>{plant.cost}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name]
                    ? "Added to Cart"
                    : "Add to Cart"}
                </button>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}

export default ProductList;
