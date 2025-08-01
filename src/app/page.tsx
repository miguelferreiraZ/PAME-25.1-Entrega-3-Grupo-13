/* eslint-disable @next/next/no-img-element */
  "use client";
  import { useState } from 'react';
  import { useRouter } from 'next/navigation';
  import HamburgerMenu from "./components/HamburgerMenu";
  import LogoLink from './components/LogoLink';
  import IconButton from './components/IconButton';
  import ProductCard from './components/ProductCard';
  import { useCart } from './context/CartContext'; 
  import CartSidebar from "./components/cartsidebar"; 



  export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
    const { toggleCart, addToCart } = useCart();

    const produtos = [
      {
        imageSrc: "/produto1.png",
        title: "CherryZ Sem Açúcar",
        price: "R$ 2,50",
        backgroundColor: "bg-pink-300",
        buttonColor: "bg-pink-primary",
      },
      {
        imageSrc: "/produto2.png",
        title: "CherryZ com Vitamina C - EM BREVE",
        price: "R$ 3,00",
        backgroundColor: "bg-orange-300",
        buttonColor: "bg-orange-500",
      },
      {
        imageSrc: "/produto3.png",
        title: "CherryZ com Melatonina - EM BREVE",
        price: "R$ 4,00",
        backgroundColor: "bg-purple-300",
        buttonColor: "bg-purple-500",
      }
    ];
          
    
    return (
      <div className="flex flex-col relative bg-peach">
        <div className="flex h-15 w-full bg-peach border-b-2 justify-between px-5 items-center flex-row"> {/* header */}
        
          <div className="flex w-20 justify-start">
            <HamburgerMenu />
          </div>
          <div className="flex justify-center">
            {/* image-logo */}
            <LogoLink 
              imageSrc="/id-visual3.png" 
              width="w-20"
              className="m-0"
              alt="CherryZ Logo"
            />
          </div>
          <div className="flex w-20 justify-end">
            <div className="flex items-center space-x-3">
              <IconButton
                imageSrc='/lupa.png'
                alt='Buscar'
              />
              <IconButton 
                imageSrc="/shopping-cart.svg" 
                alt="Carrinho"
                onClick = { toggleCart }
              />
              <IconButton 
                imageSrc="/user.svg" 
                alt="Login"
                onClick={() => router.push('/login')}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-b-2 min-h-[30rem]"> {/* carousel */}
            <div className="w-full md:w-1/2 bg-[#fff67c] border-b-2 md:border-b-0 md:border-r-2 flex items-center justify-center text-center p-6"> {/* div-esquerda */}
              <h1 className="text-6xl md:text-8xl font-bold drop-shadow-lg leading-tight">
                Saúde que dá gosto. 
                <br className="hidden md:block" />
                CherryZ!
              </h1>
            </div>
            <div className="w-full md:w-1/2 bg-pink-primary bg-[url('/image-Photoroom.png')] bg-center md:bg-cover bg-contain min-h-[16rem] md:min-h-[30rem]"> {/* div-direita */}
              
            </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-100 py-4 md:py-0 min-h-20 border-b-2 gap-4 md:gap-0 bg-white"> {/* infos */}
          <div> 
            {/* info-component */}
            <div className='flex items-center gap-2'>
              <img src='/check.png' alt='check' className='w-4 h-4'/>
              <span className='text-base md:text-lg text-gray-800'>Sem açúcar</span>
            </div>
          </div>
          <div> 
            {/* info-component */}
            <div className='flex items-center gap-2'>
              <img src='/check.png' alt='check' className='w-4 h-4'/>
              <span className='text-base md:text-lg text-gray-800'>Saboroso</span>
            </div>
          </div>
          <div> 
            {/* info-component */}
            <div className='flex items-center gap-2'>
              <img src='/check.png' alt='check' className='w-4 h-4'/>
              <span className='text-base md:text-lg text-gray-800'>Saudável</span>
            </div>
          </div>
        </div>

        {/* div produtos */}
        <div className="flex flex-col">
          <div className="flex font-extrabold text-4xl md:text-6xl justify-center pt-15">
            Veja nossos produtos!
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 gap-8 border-b-2">
            <ProductCard
              imageSrc="/produto1.png"
              title="CherryZ Sem Açúcar"
              price="R$ 2,50"
              backgroundColor="bg-pink-300"
              buttonColor="bg-pink-primary"
              onClick={() => router.push('/produtos/cherry-sem-acucar')}
              onAddToCart={() => addToCart({
                title: "CherryZ sem açúcar",
                price: "R$ 2,50",
                imageSrc: "/produto1.png"
              })}
            />
            <ProductCard
              imageSrc="/produto2.png"
              title="CherryZ com Vitamina C - EM BREVE"
              price="R$ 3,00"
              backgroundColor="bg-orange-300"
              buttonColor="bg-orange-500"
              onClick={() => router.push('/produtos/cherry-c')}
              onAddToCart={() => addToCart({
                title: "CherryZ com Vitamina C - EM BREVE",
                price: "R$ 3,00",
                imageSrc: "/produto2.png"
              })}
            />
            <ProductCard
              imageSrc="/produto3.png"
              title="CherryZ com Melatonina - EM BREVE"
              price="R$ 4,00"
              backgroundColor="bg-purple-300"
              buttonColor="bg-purple-500"
              onClick={() => router.push('/produtos/cherry-melatonina')}
              onAddToCart={() => addToCart({
                  title: "CherryZ com Melatonina - EM BREVE",
                  price: "R$ 4,00",
                  imageSrc: "/produto3.png"
              })}
            />
          </div>

        </div>

        {/* +infos */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-30 min-h-150 bg-burgundy border-b-2 px-4 py-10">
          {/* Imagem central do Cherry7 */}
          <div className='w-full md:w-[480px] h-auto flex justify-center'>
            <div className="flex-shrink-0 w-[380px] h-[380px] md:w-[480px] md:h-[480px] bg-peach rounded-[120] shadow-lg flex items-center justify-center mr-12 border-2">
              <img
                src="/promo variados.png" 
                alt="Cherry7 Pacotes Variados"
                className="object-contain w-[440px] h-[440px] rounded-xl"
              />
            </div>
          </div>  

          {/* Texto promocional traduzido */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-2">ECONOMIZE 5% no nosso 6-Pack variado</h2>
            <p className="text-white text-base mb-3 max-w-md">
              Com os doces Cherry7, você cuida do seu corpo de forma saborosa, prática e saudável. Experimente sabores sem açúcar, com vitamina C e com melatonina, todos desenvolvidos para o seu bem-estar.
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
          </div>
        </div>


        <footer className="flex flex-col border-b-2 px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <img src='/id-visual5.png' alt='logopequena' className='w-20 h-auto'/>
            </div>
            <div>Termos de Uso</div>
            <div></div>
          </div>
          <div className="flex flex-row justify-center items-center gap-50">
            {/* copyright div */}
            <div></div>
            <div> {/*socials */}
               {/* component */}
               {/* component */}
               {/* component */}
            </div>
          </div>
        </footer>
        <CartSidebar />
      </div>

    );
  
  }
