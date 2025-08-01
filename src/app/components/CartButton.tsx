"use client";

import { useState, useEffect } from 'react';
import { cartUtils } from '../utils/cartUtils';

interface CartButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function CartButton({ onClick, className = "" }: CartButtonProps) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Carregar contagem inicial
    setCartCount(cartUtils.getCartCount());

    // Listener para atualizações do carrinho
    const handleCartUpdate = () => {
      setCartCount(cartUtils.getCartCount());
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    return () => window.removeEventListener('cartUpdated', handleCartUpdate);
  }, []);

  return (
    <button 
      onClick={onClick}
      className={`relative p-2.5 w-10 h-10 flex items-center justify-center hover:bg-pink-light hover:bg-opacity-30 rounded-full transition-colors cursor-pointer ${className}`}
      aria-label="Carrinho"
    >
      <img 
        src="/shopping-cart.svg" 
        alt="Carrinho" 
        className="w-6 h-6 object-contain"
      />
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {cartCount > 99 ? '99+' : cartCount}
        </span>
      )}
    </button>
  );
}
