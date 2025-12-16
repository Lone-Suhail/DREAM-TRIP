"use client";

import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
}

const DestinationImage = ({ src, alt, className }: Props) => {
  const [error, setError] = useState(false);

  // If the image fails to load, show this generic fallback box
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gray-200 text-gray-400 ${className}`}>
        <ImageOff size={48} className="mb-2" />
        <span className="text-sm font-semibold">Image Not Found</span>
        <span className="text-xs text-center px-4 mt-1">Check public/{src.replace('/', '')}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default DestinationImage;