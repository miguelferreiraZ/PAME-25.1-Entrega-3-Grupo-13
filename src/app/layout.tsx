import "./globals.css";

import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext"
import React from 'react';


export const metadata = {
  title: "CherryZ",
  description: "Pirulitos funcionais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>  
        </CartProvider>
      </body> 
    </html>
  );
}

