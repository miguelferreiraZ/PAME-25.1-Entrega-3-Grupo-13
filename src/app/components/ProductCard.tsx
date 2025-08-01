/* eslint-disable @next/next/no-img-element */
"use client";
import {useFavorites} from "../context/FavoritesContext";

import { useState, useEffect } from 'react';
import { cartUtils } from '../utils/cartUtils';

interface ProductCardProps {
  id: string;
  imageSrc: string;
  title: string;
  price?: string;
  backgroundColor?: string;
  buttonColor?: string;
  onClick?: () => void;
  onAddToCart?: () => void;
  imageAlt?: string;
  className?: string;
}

export default function ProductCard({
  id,
  imageSrc,
  title,
  price = "R$ 2,50",
  backgroundColor = "bg-pink-300",
  buttonColor = "bg-pink-primary",
  onClick,
  onAddToCart,
  imageAlt,
  className = ""
}: ProductCardProps) {
<<<<<<< HEAD

  const { toggleFavorite, isFavorite } = useFavorites();
  const favorito = isFavorite(title); // true ou false

=======
  const [isLiked, setIsLiked] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // Verificar se o produto já está nos favoritos ao carregar
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const isAlreadyFavorited = favorites.find((fav: any) => fav.id === id);
    setIsFavorited(!!isAlreadyFavorited);
  }, [id]);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleStarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFavoriteState = !isFavorited;
    setIsFavorited(newFavoriteState);
    
    // Adicionar/remover dos favoritos no localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (newFavoriteState) {
      // Adicionar aos favoritos
      const product = { id, title, imageSrc, price };
      if (!favorites.find((fav: any) => fav.id === id)) {
        favorites.push(product);
      }
    } else {
      // Remover dos favoritos
      favorites = favorites.filter((fav: any) => fav.id !== id);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
>>>>>>> 42de7ad7b113aa09c0d5ff91d48522fcfcc2a482
  return (
    <div className={`flex flex-col items-center justify-center w-full md:w-1/3 ${className}`}>
      <div 
        className={`relative flex flex-col items-center ${backgroundColor} border-2 p-8 cursor-pointer hover:opacity-90 transition-opacity`}
        onClick={onClick}
      >
        {/* Ícone de coração */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // impede clique na div principal
            toggleFavorite({ title, imageSrc });
          }}
          className="absolute top-2 right-2"
        >
          <img
            src={favorito ? "/heart-filled.png" : "/heart-outline.png"}
            alt="Favorito"
            className="w-6 h-6"
          />
        </button>

        <img 
          src={imageSrc} 
          alt={imageAlt || title} 
          className="w-40 md:w-52 lg:w-60" 
        />
      </div>
      <p className="mt-4 font-semibold text-center cursor-pointer" onClick={onClick}>{title}</p>
      <p className="mt-1 text-lg font-bold text-red-primary mb-3">{price}</p>
        
      <div className="w-full flex flex-col gap-3">
        {/* Botão */}
        <div className="flex justify-center">
          <button 
            className={`${buttonColor} text-peach px-4 py-2 rounded-lg hover:opacity-80 transition-opacity text-sm font-medium cursor-pointer`}
            onClick={(e) => {
              e.stopPropagation();
              if (onAddToCart) {
                onAddToCart();
              } else {
                cartUtils.addToCart({ id, title, imageSrc, price });
              }
            }}
          >
            Adicionar ao Carrinho
          </button>
        </div>
        
        {/* Ícones */}
        <div className="flex flex-row gap-3 justify-center">
          <div className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" onClick={handleHeartClick}>
            <img 
              src={isLiked ? "/heart-full.svg" : "/heart.svg"} 
              alt="Curtir" 
              className={`w-full h-full transition-all ${isLiked ? 'brightness-0 saturate-100' : ''}`}
              style={isLiked ? { 
                filter: 'brightness(0) saturate(100%) invert(16%) sepia(99%) saturate(7404%) hue-rotate(359deg) brightness(95%) contrast(118%)' 
              } : {}}
            />
          </div>
          <div className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" onClick={handleStarClick}>
            <img 
              src={isFavorited ? "/star-full.svg" : "/star.svg"} 
              alt="Favoritar" 
              className={`w-full h-full transition-all`}
              style={isFavorited ? { 
                filter: 'brightness(0) saturate(100%) invert(84%) sepia(72%) saturate(2032%) hue-rotate(1deg) brightness(101%) contrast(101%)'
              } : {}}

            />
          </div>
        </div>
      </div>
    </div>
  );
}
