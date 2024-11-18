import React, { createContext, useState, ReactNode } from 'react';

// Define the type for a hotel object
interface Hotel {
  id: number;
  name: string;
  location: string;
  price: string;
  rating: string;
  image: string;
}

// Define the context type
interface CartContextType {
  cartItems: Hotel[];
  addToCart: (hotel: Hotel) => void;
}

// Create the CartContext with a default value
export const CartContext = createContext<CartContextType | null>(null);

// Define props type for CartProvider
interface CartProviderProps {
  children: ReactNode; // Explicitly type children as ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Hotel[]>([]);

  const addToCart = (hotel: Hotel) => {
    setCartItems([...cartItems, hotel]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
