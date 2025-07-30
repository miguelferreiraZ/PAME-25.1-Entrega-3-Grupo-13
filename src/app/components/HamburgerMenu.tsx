"use client";

import { useState } from "react";

export default function HamburgerMenu() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
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
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-burgundy">Menu</h2>
            <button onClick={toggleSidebar} className="text-gray-600 hover:text-burgundy">
              
            </button>
          </div>
          <nav className="space-y-4">
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy rounded">Home</a>
            <a href="../pages/login" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy rounded">Produtos</a>
            <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-peach hover:text-burgundy rounded">Favoritos</a>
          </nav>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleSidebar}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1 hover:bg-pink-light hover:bg-opacity-30 p-1 rounded transition-colors"
      >
        <div className="w-6 h-0.5 bg-burgundy"></div>
        <div className="w-6 h-0.5 bg-burgundy"></div>
        <div className="w-6 h-0.5 bg-burgundy"></div>
      </button>
    </>
  );
}
