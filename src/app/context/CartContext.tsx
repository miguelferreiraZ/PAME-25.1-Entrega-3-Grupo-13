"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  title: string;
  price: string;
  imageSrc: string;
  quantity?: number;
};

type CartContextType = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
  increaseQuantity: (title:string) => void;
  decreaseQuantity: (title:string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: Omit<Product, "quantity">) => {
  setCartItems((prev) => {
    const existingProduct = prev.find(p => p.title === product.title);

    if (existingProduct) {
      return prev.map(item =>
        item.title === product.title
          ? { ...item, quantity: (item.quantity ?? 1) + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};


  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (title: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.title === title ? { ...item, quantity: item.quantity! + 1} : item
      )
    );
  };

  const decreaseQuantity = (title:string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.title === title ? { ...item, quantity: item.quantity! - 1} : item
      )
      .filter(item => item.quantity! > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, isOpen, toggleCart, clearCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart precisa estar dentro do CartProvider");
  return context;
};
