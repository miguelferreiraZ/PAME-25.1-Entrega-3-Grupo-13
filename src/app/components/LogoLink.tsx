import Link from 'next/link';

import React from 'react';

interface LogoLinkProps {
  imageSrc: string;
  alt?: string;
  width?: string;
  className?: string;
}

export default function LogoLink({ 
  imageSrc, 
  alt = "Home", 
  width = "w-40",
  className = ""
}: LogoLinkProps) {
  return (
    <Link 
      href="/" 
      className={`block ${width} mx-auto hover:opacity-80 transition-opacity ${className}`}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full cursor-pointer" 
      />
    </Link>
  );
}
