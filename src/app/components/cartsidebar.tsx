"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import IconButton from "./IconButton"

export default function CartSidebar() {
  const { cartItems, isOpen, toggleCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 border-b-2 flex justify-between items-center">
        <h2 className=" text-xl font-bold">Carrinho</h2>
        <button onClick={toggleCart} className="text-gray-600 hover:text-red-500 font-bold text-lg">×</button>
      </div>
      <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(100%-4rem)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          cartItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4 border-b pb-2">
              <Image src={item.imageSrc} alt={item.title} width={50} height={50} />
              <div className="flex flex-col">
                <p className="font-semibold">{item.title}</p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.title)}
                    className= "bg-gray-300 px-2 rounded"
                  >-</button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.title)}
                    className= "bg-gray-300 px-2 rounded"
                  >+</button>
                </div>

                <p className="text-sm text-gray-600">{item.price}</p>

              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
          <IconButton
          imageSrc="/trash.svg"
          alt="Esvaziar Carrinho"
          onClick = {clearCart}
          />
      )}
        </div>  
  
 

  );
}
