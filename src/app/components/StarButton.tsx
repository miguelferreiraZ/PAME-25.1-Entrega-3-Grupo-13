'use client';

import { useState, useEffect } from 'react';
import React from 'react';

interface StarButtonProps {
  productId: string;
  productData?: {
    id: string;
    title: string;
    imageSrc: string;
    price: string;
  };
  className?: string;
}

export default function StarButton({ productId, productData, className = "" }: StarButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  // Verificar se o produto já está nos favoritos ao carregar
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isAlreadyFavorited = favorites.find((fav: any) => fav.id === productId);
    setIsFavorited(!!isAlreadyFavorited);
  }, [productId]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavoriteState = !isFavorited;
    setIsFavorited(newFavoriteState);
    
    // Adicionar/remover dos favoritos no localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (newFavoriteState && productData) {
      // Adicionar aos favoritos
      if (!favorites.find((fav: any) => fav.id === productId)) {
        favorites.push(productData);
      }
    } else {
      // Remover dos favoritos
      favorites = favorites.filter((fav: any) => fav.id !== productId);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div 
      className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform ${className}`} 
      onClick={handleClick}
    >
      <img 
        src={isFavorited ? "/star-full.svg" : "/star.svg"} 
        alt="Favoritar" 
        className={`w-full h-full transition-all`}
        style={isFavorited ? { 
            filter: 'brightness(0) saturate(100%) invert(84%) sepia(72%) saturate(2032%) hue-rotate(60deg) brightness(101%) contrast(101%)'
        } : {}}

      />
    </div>
  );
}
