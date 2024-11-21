'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

interface LocalStorageCart {
  quantity: number;
}

interface CartContextType {
  cartItems: number;
  updateCart: (quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const totalQuantity = localStorageCart.reduce(
      (total: number, item: LocalStorageCart) => total + (item.quantity || 0),
      0
    );
    setCartItems(totalQuantity);
  }, []);

  const updateCart = (quantity: number) => {
    setCartItems(quantity);
    const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Update localStorage logic here
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const UseCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
