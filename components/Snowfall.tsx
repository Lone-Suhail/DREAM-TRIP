"use client";

import React, { useEffect, useState } from 'react';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate 50 snowflakes
    const flakes = Array.from({ length: 50 }, (_, i) => i);
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      {snowflakes.map((i) => {
        const left = Math.random() * 100; // Random horizontal position
        const delay = Math.random() * 5;  // Random delay
        const duration = 5 + Math.random() * 5; // Random speed
        const size = Math.random() * 5 + 2; // Random size

        return (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-80"
            style={{
              left: `${left}%`,
              top: `-10px`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `fall ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Snowfall;