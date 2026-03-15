import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

function CartItem({ onContinueShopping }) {

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.cost.substring(1));
      return total + price * item.quantity;
    }, 0);
  };

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.substring(1));
    return price * item.quantity;
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        amount: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {

    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          amount: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }

  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-container">

      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>

          {cartItems.map((item) => (

            <div className="cart-item" key={item.name}>

              <img src={item.image} alt={item.name} width="100" />

              <h3>{item.name}</h3>

              <p>Unit Price: {item.cost}</p>

              <p>Quantity: {item.quantity}</p>

              <p>Subtotal: ${calculateTotalCost(item)}</p>

              <button onClick={() => handleIncrement(item)}>
                +
              </button>

              <button onClick={() => handleDecrement(item)}>
                -
              </button>

              <button onClick={() => handleRemove(item)}>
                Delete
              </button>

            </div>

          ))}

          <h3>Total Amount: ${calculateTotalAmount()}</h3>

          <button onClick={handleContinueShopping}>
            Continue Shopping
          </button>

          <button onClick={handleCheckoutShopping}>
            Checkout
          </button>

        </div>
      )}

    </div>
  );
}

export default CartItem;
