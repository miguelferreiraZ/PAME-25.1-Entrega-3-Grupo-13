'use client';

import { useState } from 'react';
import React from 'react';

interface HeartButtonProps {
  className?: string;
}

export default function HeartButton({ className = "" }: HeartButtonProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform ${className}`} 
      onClick={handleClick}
    >
      <img 
        src={isLiked ? "/heart-full.svg" : "/heart.svg"} 
        alt="Curtir" 
        className={`w-full h-full transition-all`}
        style={isLiked ? { 
          filter: 'brightness(0) saturate(100%) invert(16%) sepia(99%) saturate(7404%) hue-rotate(359deg) brightness(95%) contrast(118%)' 
        } : {}}
      />
    </div>
  );
}
