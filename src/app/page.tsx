import HamburgerMenu from "./components/HamburgerMenu";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <div className="flex h-15 w-full bg-peach border-b-2 justify-between px-5 items-center flex-row"> {/* header */}
      
        <div>
          <HamburgerMenu />
        </div>
        <div>
          {/* image-logo */}
          <img src='/id-visual3.png' alt='ID Visual 3' className='w-30 p-2 mx-auto' />
        </div>
        <div>
          {/* icon-components */}
          teste
        </div>
      </div>

      <div className="flex flex-col md:flex-row border-b-2 min-h-120"> {/* carousel */}
          <div className="w-full md:w-1/2 bg-[#fff67c] border-b-2 md:border-b-0 md:border-r-2 min-h-108"> {/* div-esquerda */}
            
          </div>
          <div className="w-full md:w-1/2 bg-pink-primary min-h-108"> {/* div-direita */}
            
          </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-100 py-4 md:py-0 min-h-20 border-b-2 gap-4 md:gap-0"> {/* infos */}
        <div> 
          {/* info-component */}
          teste
        </div>
        <div> 
          {/* info-component */}
          teste
        </div>
        <div> 
          {/* info-component */}
          teste
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex font-extrabold justify-center pt-15">
          Enjoy our Purposefuel
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 gap-8 border-b-2">
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="flex flex-col items-center bg-pink-300 border-2 p-8">
              <img src="/produto1.png" alt="Produto 1" className="w-40 md:w-52 lg:w-60" />
              
            </div>
            <p className="mt-4 font-semibold">CherryZ Sem Açúcar</p>
          </div>
          <div className="flex flex-col justify-center items-center w-full md:w-1/3">
            <div className="flex flex-col items-center bg-orange-300 border-2 p-8">
              <img src="/produto2.png" alt="Produto 2" className="w-40 md:w-52 lg:w-60" />
              
            </div>
            <p className="mt-4 font-semibold">CherryZ com Vitamina C</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-1/3">
            <div className="flex flex-col items-center bg-purple-300 border-2 p-8">
              <img src="/produto3.png" alt="Produto 3" className="w-40 md:w-52 lg:w-60" />
              
            </div>
            <p className="mt-4 font-semibold">CherryZ com Melatonina</p>
          </div>
        </div>

      </div>

      {/* +infos */}
      <div className="border-b-2">
        img + texto do lado (promo?)
      </div>

      <footer className="flex flex-col border-b-2 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>img</div>
          <div>links</div>
          <div>avaliacao? enche linguica</div>
        </div>
        <div className="flex flex-row justify-center items-center gap-50">
          {/* copyright div */}
          <div>text copyright</div>
          <div> {/*socials */}
            c {/* component */}
            c {/* component */}
            c {/* component */}
          </div>
        </div>
      </footer>
    </div>
    
  );
}
