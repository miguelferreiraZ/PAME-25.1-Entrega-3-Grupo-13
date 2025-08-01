'use client';

import LogoLink from './LogoLink';
import HeartButton from './HeartButton';
import StarButton from './StarButton';

interface ProductPageProps {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  characteristics: string[];
  ingredients: string[];
  price: string;
  alt: string;
}

export default function ProductPage({
  id,
  title,
  imageSrc,
  description,
  characteristics,
  ingredients,
  price,
  alt
}: ProductPageProps) {
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
                src={imageSrc} 
                alt={alt} 
                className="w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold text-burgundy mb-4">
                {title}
              </h1>
              
              <p className="text-gray-700 mb-6">
                {description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-2">
                  Características:
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {characteristics.map((characteristic, index) => (
                    <li key={index}>{characteristic}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Ingredientes:
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {ingredients.join(', ')}.
                </p>
              </div>
              
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-red-primary">
                    {price}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <HeartButton />
                  <StarButton 
                    productId={id}
                    productData={{
                      id,
                      title,
                      imageSrc,
                      price
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
