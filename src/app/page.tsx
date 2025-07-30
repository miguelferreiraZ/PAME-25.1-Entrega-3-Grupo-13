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
          teste
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
        <div className="flex flex-col md:flex-row border-b-2 pb-15">
          {/* pirulitos-content */}

          {/* componente maior, esse eh col normal md:row */}
          <div>
            {/* component img + text embaixo + preço?*/}
          </div>
          <div>
            {/* component img + text embaixo + preço? */}
          </div>
          <div>
            {/* component img + text embaixo + preço? */}
          </div>
          {/* componente maior */}

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
          <div>contact</div>
        </div>
      </footer>
    </div>
    
  );
}
