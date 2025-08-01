"use client";

import { useState } from "react";
import React from 'react';

interface HeaderIconsProps {
  showSearch?: boolean;
  showCart?: boolean;
  showProfile?: boolean;
  onSearchClick?: () => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
}

export default function HeaderIcons({ 
  showSearch = true,
  showCart = true, 
  showProfile = true,
  onSearchClick,
  onCartClick,
  onProfileClick
}: HeaderIconsProps) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="flex items-center space-x-4">
      {/* Search Icon */}
      {showSearch && (
        <button 
          onClick={onSearchClick}
          className="p-2 hover:bg-pink-light hover:bg-opacity-30 rounded-full transition-colors"
          aria-label="Buscar"
        >
          <svg className="w-5 h-5 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      )}

      {/* Cart Icon */}
      {showCart && (
        <button 
          onClick={onCartClick}
          className="relative p-2 hover:bg-pink-light hover:bg-opacity-30 rounded-full transition-colors"
          aria-label="Carrinho de compras"
        >
          <svg className="w-5 h-5 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L7 13m0 0v6a2 2 0 002 2h6a2 2 0 002-2v-6m-6 0V9a2 2 0 012-2h2a2 2 0 012 2v4" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      )}

      {/* Profile Icon */}
      {showProfile && (
        <button 
          onClick={onProfileClick}
          className="p-2 hover:bg-pink-light hover:bg-opacity-30 rounded-full transition-colors"
          aria-label="Perfil do usuário"
        >
          <svg className="w-5 h-5 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
