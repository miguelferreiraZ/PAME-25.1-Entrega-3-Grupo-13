"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type FavoriteProduct = {
  title: string;
  imageSrc: string;
};

type FavoritesContextType = {
  favorites: FavoriteProduct[];
  toggleFavorite: (product: FavoriteProduct) => void;
  isFavorite: (title: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);

  const toggleFavorite = (product: FavoriteProduct) => {
    setFavorites(prev => {
      const exists = prev.find(p => p.title === product.title);
      if (exists) {
        return prev.filter(p => p.title !== product.title);
      } else {
        return [...prev, product];
      }
    });
  };

  const isFavorite = (title: string) => {
    return favorites.some(p => p.title === title);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites precisa estar dentro do FavoritesProvider");
  }
  return context;
};
