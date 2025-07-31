import LogoLink from '../../components/LogoLink';

export default function CherryMelatonina() {
  return (
    <div className="min-h-screen bg-peach">
      <div className="flex justify-center py-8">
        <LogoLink 
          imageSrc="/id-visual3.png" 
          width="w-24"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="/produto3.png" 
                alt="CherryZ com Melatonina" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-burgundy mb-4">
                CherryZ com Melatonina
              </h1>
              
              <p className="text-gray-700 mb-6">
                Pirulito CherryZ com melatonina natural! 
                Sabor cereja relaxante que ajuda você a ter 
                uma noite de sono mais tranquila.
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-2">
                  Características:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Com melatonina natural</li>
                  <li>Ajuda no relaxamento</li>
                  <li>Melhora a qualidade do sono</li>
                  <li>Sabor cereja suave</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-red-primary">
                  R$ 4,00
                </span>
                <button className="bg-pink-primary text-white px-6 py-2 rounded-lg hover:bg-burgundy transition-colors">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
