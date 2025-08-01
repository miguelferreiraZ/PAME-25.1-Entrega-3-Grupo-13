/* eslint-disable @next/next/no-img-element */
"use client";
<<<<<<< HEAD
import { useFavorites } from "../context/FavoritesContext"
import { useState } from "react";
=======

import { useState, useEffect } from "react";
import Link from "next/link";
>>>>>>> 42de7ad7b113aa09c0d5ff91d48522fcfcc2a482

export default function HamburgerMenu() {
  const { favorites } = useFavorites();
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setShowFavorites(false); // Reset favorites view when closing
  };

  const showFavoritesView = () => {
    setShowFavorites(true);
    // Carregar favoritos do localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  };

  const backToMenu = () => {
    setShowFavorites(false);
  };

  const removeFavorite = (productId: string) => {
    const updatedFavorites = favorites.filter((fav: any) => fav.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-peach shadow-lg transform transition-transform duration-300 z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-burgundy">
              {showFavorites ? 'Favoritos' : 'Menu'}
            </h2>
            <button onClick={toggleSidebar} className="text-gray-600 hover:text-burgundy text-2xl">
              ×
            </button>
          </div>
<<<<<<< HEAD
          <nav className="space-y-4">
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy  border-y-1">Home</a>

            <a href="../login" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy  border-y-1">Login</a>

            <div className="px-4 py-2 border-t border-b cursor-pointer" onClick={() => setMostrarFavoritos(!mostrarFavoritos)}>
              <div className="flex justify-between items-center text-gray-700 hover:text-burgundy">
                <span className="font-semibold">Favoritos</span>
                <span>{mostrarFavoritos ? "▲" : "▼"}</span>
              </div>

              {/* Lista de favoritos visível somente quando expandido */}
              {mostrarFavoritos && (
                <div className="mt-2 space-y-2">
                  {favorites.length === 0 ? (
                    <p className="text-sm text-gray-500">Nenhum favorito.</p>
                  ) : (
                    favorites.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img src={item.imageSrc} alt={item.title} className="w-8 h-8 rounded" />
                        <span className="text-sm text-gray-800">{item.title}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

          </nav>
=======

          {showFavorites ? (
            // View dos Favoritos
            <div>
              <button 
                onClick={backToMenu}
                className="mb-4 text-burgundy hover:underline flex items-center"
              >
                ← Voltar ao Menu
              </button>
              
              {favorites.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">
                  <p>Nenhum produto favoritado</p>
                  <p className="text-sm mt-2">Clique na estrela dos produtos para favoritar!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {favorites.map((product: any) => (
                    <div key={product.id} className="bg-white rounded-lg p-3 shadow-sm border">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={product.imageSrc} 
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <h3 className="font-semibold text-sm text-gray-800">{product.title}</h3>
                            <p className="text-red-primary font-bold text-sm">{product.price}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFavorite(product.id)}
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
          ) : (
            // Menu Principal
            <nav className="space-y-4">
              <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy  border-y-1">Home</Link>
              <Link href="/login" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy  border-y-1">Login</Link>
              <button 
                onClick={showFavoritesView}
                className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy border-y-1 w-full text-left"
              >
                Favoritos
              </button>
            </nav>
          )}
>>>>>>> 42de7ad7b113aa09c0d5ff91d48522fcfcc2a482
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1 hover:bg-pink-light hover:bg-opacity-30 p-1 transition-colors"
      >
        <div className="w-6 h-0.5 bg-burgundy"></div>
        <div className="w-6 h-0.5 bg-burgundy"></div>
        <div className="w-6 h-0.5 bg-burgundy"></div>
      </button>
    </>
  );
}
