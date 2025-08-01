"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import HamburgerMenu from "./components/HamburgerMenu";
import LogoLink from './components/LogoLink';
import IconButton from './components/IconButton';
import CartButton from './components/CartButton';
import CartSidebar from './components/CartSidebar';
import ProductCard from './components/ProductCard';
import { cartUtils } from './utils/cartUtils';
import React from 'react';

export default function Home() {
  const router = useRouter();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex flex-col relative bg-peach overflow-x-hidden">
      <div className="flex h-15 w-full bg-peach border-b-2 justify-between px-5 items-center flex-row"> {/* header */}
      
        <div className="flex w-20 justify-start">
          <HamburgerMenu /> {/* sidebar esquerda */}
        </div>
        <div className="flex justify-center"> {/* image-logo */}
          <LogoLink 
            imageSrc="/id-visual3.png" 
            width="w-20"
            className="m-0"
            alt="CherryZ Logo"
          />
        </div>

        {/* div icons header */}
        <div className="flex w-20 justify-end">
          <div className="flex items-center space-x-1">
            <IconButton 
              imageSrc="/search.png" 
              alt="Login"
              onClick={() => router.push('/')}
            /> {/* onclick joga pra uma pagina com o router.push */}


            {/* botao do carrinho */}
            <CartButton 
              onClick={() => setIsCartOpen(true)}
            />
            <IconButton 
              imageSrc="/user.svg" 
              alt="Login"
              onClick={() => router.push('/login')}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-b-2 min-h-120"> {/* carousel */}
          <div className="w-full md:w-1/2 bg-[#fff67c] border-b-2 md:border-b-0 md:border-r-2 min-h-108 flex items-center justify-center overflow-hidden"> {/* div-img-esquerda */}
            <img 
              src="/carousel1.png" 
              alt="CherryZ Carousel 1" 
              className="w-full h-full object-cover md:object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 bg-pink-primary min-h-108 flex items-center justify-center overflow-hidden"> {/* div-img-direita */}
            <img 
              src="/carousel2.png" 
              alt="CherryZ Carousel 2" 
              className="w-full h-full object-cover md:object-contain"
            />
          </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-10 py-4 md:py-0 min-h-20 border-b-2 gap-4 md:gap-0 bg-white"> {/* infos */}
        <div className="flex items-center space-x-3"> 
          <div>
            <img src="/shield-trust.svg" alt="100% Plant-based" className="w-7 h-7" />
          </div>
          <span className="text-xl font-bold text-gray-700">Zero açúcar, com sabor natural e irresistível.</span>
        </div>
        <div className="flex items-center space-x-3"> 
          <div>
            <img src="/shield-trust.svg" alt="Real Fruits" className="w-7 h-7" />
          </div>
          <span className="text-xl font-bold text-gray-700">Alinhado às tendências de consumo saudável e clean label.</span>
        </div>
        <div className="flex items-center space-x-3"> 
          <div>
            <img src="/shield-trust.svg" alt="No Preservatives" className="w-7 h-7" />
          </div>
          <span className="text-xl font-bold text-gray-700">Adoçado com adoçantes naturais e ingredientes de qualidade.</span>
        </div>
      </div>

      {/* div produtos */}
      <div className="flex flex-col">
        <div className="flex font-extrabold justify-center pt-15">
          Veja nossos produtos!
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 gap-8 border-b-2">
          <ProductCard
            id="cherry-sem-acucar"
            imageSrc="/produto1.png"
            title="CherryZ Sem Açúcar"
            price="R$ 3,34"
            backgroundColor="bg-pink-300"
            buttonColor="bg-pink-primary"
            onClick={() => router.push('/produtos/cherry-sem-acucar')}
            onAddToCart={() => {
              cartUtils.addToCart({
                id: "cherry-sem-acucar",
                title: "CherryZ Sem Açúcar",
                imageSrc: "/produto1.png",
                price: "R$ 3,34"
              });
            }}
          />
          <ProductCard
            id="cherry-vitamina-c"
            imageSrc="/produto2.png"
            title="CherryZ com Vitamina C"
            price="Em breve"
            backgroundColor="bg-orange-300"
            buttonColor="bg-gray-500"
            onClick={() => router.push('/produtos/cherry-c')}
          />
          <ProductCard
            id="cherry-melatonina"
            imageSrc="/produto3.png"
            title="CherryZ com Melatonina"
            price="Em breve"
            backgroundColor="bg-purple-300"
            buttonColor="bg-gray-500"
            onClick={() => router.push('/produtos/cherry-melatonina')}
          />
        </div>

      </div>

      {/* +infos */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-30 min-h-150 bg-burgundy border-b-2 pl-11 md:pl-0">
        {/* Imagem central do Cherry7 */}
        <div className="flex-shrink-0 w-[380px] h-[380px] md:w-[480px] md:h-[480px] bg-peach rounded-[120] shadow-lg flex items-center justify-center mr-12 border-2">
          <img
            src="/promo variados.png" // ajuste para o caminho correto do seu arquivo
            alt="Cherry7 Pacotes Variados"
            className="object-contain w-[440px] h-[440px] rounded-xl"
          />
        </div>

        {/* Texto promocional traduzido */}
        <div>
          <h2 className="text-white text-3xl font-bold mb-2">ECONOMIZE 5% no nosso 6-Pack variado</h2>
          <p className="text-white text-base mb-3 max-w-md">
            Com os pirulitos Cherry7, você cuida do seu corpo de forma saborosa, prática e saudável. Experimente sabores sem açúcar, com vitamina C e com melatonina, todos desenvolvidos para o seu bem-estar.
          </p>
          <p className="text-white text-base mb-5 max-w-md">
            Aproveite e leve um pouco de cada sabor para casa!
          </p>
          <button
            className="bg-white text-[#f15b32] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition cursor-pointer"
            type="button"
            onClick={() => router.push('/')}
          >
            VER PROMOÇÃO
          </button>
          <p className='font-bold mt-3'>Em breve!</p>
        </div>
      </div>


      <footer className="flex flex-col border-b-2 bg-white">
        <div className="pl-30 flex flex-col md:flex-row justify-between items-center border-b-2">
          <div>
            <img src="/id-visual4.png" alt="Logo" />
          </div>
          <div className='flex flex-col gap-30 md:flex-row'>

            <div className='flex flex-col gap-2 underline'>
              <Link href="https://opensource.org/license/mit">Política de privacidade</Link>
              <Link href="/">Política de cookies</Link>
              <Link href="/">Termos de uso</Link>
            </div>
            <div className='flex flex-col gap-2 underline'>
              <Link href="/">Contate-nos</Link>
              <Link href="/">FAQs</Link>
            </div>

          </div>
          <div className='pr-20'>
            <div className="flex flex-col items-center space-x-4 underline">
              <Link href="/">Trabalhe Conosco</Link>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col justify-between px-20 md:flex-row items-center bg-peach h-20">
          {/* copyright div */}
          <div className=''>© 2025, CherryZ</div>
          <div> {/*socials */}
            <div className="flex items-center gap-8">
              <img 
                src="/instagram.svg" 
                alt="Instagram" 
                className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <img 
                src="/facebook.svg" 
                alt="Facebook" 
                className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              />
              <img 
                src="/envelope.svg" 
                alt="Email" 
                className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity"
              />
            </div>
          </div>
          <div className=''>
            <p>Contato: cherryz.contato@gmail.com</p>
          </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
    
  );
}
