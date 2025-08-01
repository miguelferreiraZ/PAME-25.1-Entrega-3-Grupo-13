/* eslint-disable @next/next/no-img-element */
"use client";
import {useFavorites} from "../context/FavoritesContext";

interface ProductCardProps {
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

  const { toggleFavorite, isFavorite } = useFavorites();
  const favorito = isFavorite(title); // true ou false

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
      <p className="mt-1 text-lg font-bold text-red-primary">{price}</p>
      <button 
        className={`mt-3 ${buttonColor} text-peach px-4 py-2 rounded-lg hover:opacity-80 transition-opacity text-sm font-medium cursor-pointer`}
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart?.();
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
