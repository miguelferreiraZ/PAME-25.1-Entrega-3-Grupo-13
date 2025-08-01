'use client';

import { useState } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import React from 'react';

interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritesSidebar({ isOpen, onClose }: FavoritesSidebarProps) {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-peach shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-burgundy">Favoritos</h2>
            <button 
              onClick={onClose} 
              className="text-gray-600 hover:text-burgundy text-2xl"
            >
              ×
            </button>
          </div>
          
          {favorites.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>Nenhum produto favoritado ainda</p>
              <p className="text-sm mt-2">Clique na estrela dos produtos para adicioná-los aos favoritos!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((product:any) => (
                <div key={product.id} className="bg-white rounded-lg p-3 shadow">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={product.imageSrc} 
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-800">{product.title}</h3>
                      <p className="text-red-primary font-bold">{product.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromFavorites(product.id)}
                      className="text-red-500 hover:text-red-700 text-lg"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
