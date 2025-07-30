import React, { createContext, useState, useContext, useCallback } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ cartItems: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8000/api/cart");
      setCart(response.data?.data || { items: [] });
      setError(null);
    } catch (error) {
      console.error("Failed to fetch cart:", error.message);
      setCart({ cartItems: [] });
      setError(
        error.response?.status === 401
          ? "Please log in to view your cart."
          : "Failed to fetch cart."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = async (productId, quantity) => {
    try {
      await axios.post("http://localhost:8000/api/cart/add", {
        productId,
        quantity,
      });
      await fetchCart();
      setError(null);
      return true;
    } catch (error) {
      console.error("Failed to add to cart:", error.message);
      throw new Error(
        error.response?.status === 401
          ? "Please log in to add items to your cart."
          : "Failed to add to cart."
      );
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/api/cart/remove/${productId}`);
      await fetchCart();
      setError(null);
    } catch (error) {
      console.error("Failed to remove from cart:", error.message);
      setError(
        error.response?.status === 401
          ? "Please log in to manage your cart."
          : "Failed to remove from cart."
      );
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      await axios.patch(`http://localhost:8000/api/cart/update/${productId}`, {
        quantity,
      });
      await fetchCart(); // refresh cart after update
      setError(null);
    } catch (error) {
      console.error("Failed to update quantity:", error.message);
      setError("Failed to update quantity.");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        fetchCart,
        error,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
