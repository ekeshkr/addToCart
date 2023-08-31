import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = ({ cartItems, setCartItems }) => {

  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cartItems);
  }, [cartItems]);

  return (
    <>
      <h2>Cart</h2>
      <div>
        {CART.map((cartItem, cartIndex) => (
          <div key={cartItem.id}>
            <img src={cartItem.image} width={40} alt="..." />
            <span>{cartItem.title}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity-1 :  0 }
                    : item;
                }).filter((item)=> item.quantity !== 0);    
               
                setCART(_CART);
                setCartItems(_CART)
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartIndex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
                setCartItems(_CART)
              }}
            >
              +
            </button>
            <span>${cartItem.price * cartItem.quantity}</span>
          </div>
        ))}

        <p> Total <span></span>
            {
              CART.map(item => item.price * item.quantity).reduce((total, value)=> total + value , 0)
            }          
          </p>        
      </div>
    </>
  );
};

export default Cart;
