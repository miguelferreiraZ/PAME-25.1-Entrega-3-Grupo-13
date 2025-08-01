/* eslint-disable @next/next/no-img-element */
"use client";

interface IconButtonProps {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
  size?: string;
  className?: string;
}

export default function IconButton({ 
  imageSrc, 
  alt = "Ícone", 
  onClick,
  size = "w-6 h-6",
  className = ""
}: IconButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`p-2.5 w-10 h-10 flex items-center justify-center hover:bg-pink-light hover:bg-opacity-30 rounded-full transition-colors cursor-pointer ${className}`}
      aria-label={alt}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className={`${size} object-contain`}
      />
    </button>
  );
}
