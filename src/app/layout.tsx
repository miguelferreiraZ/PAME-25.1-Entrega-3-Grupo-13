import "./globals.css";

import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext"
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',

});



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
      <body className={lobster.className}>
        <CartProvider>
          <FavoritesProvider>
            {children}
          </FavoritesProvider>  
        </CartProvider>
      </body> 
    </html>
  );
}

