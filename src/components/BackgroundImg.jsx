import React from 'react'
import { useMemo } from 'react'

const images = [
    { src: "/images/3.png"},
    { src: "/images/2.png"},
    { src: "/images/4.png"},
    { src: "/images/1.png"},
    { src: "/images/5.png"},
    { src: "/images/6.png"},
    { src: "/images/7.png"},
    { src: "/images/8.png"},
    { src: "/images/9.png"},
    { src: "/images/10.png"},
];

export default function BackgroundImg() {
    const randomImages = useMemo(() => {
        return images.map((img) => ({
          ...img,
          top: `${Math.random() * 80 + 10}%`, 
          left: `${Math.random() * 80 + 10}%`,
          size: `${Math.random() * 100 + 200}px`, 
        }));
      }, []);
    
    
    return (
      <div className="inset-0 overflow-hidden pointer-events-none">
        {randomImages.map((img) => (
          <div
            key={img}
            className="absolute opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-auto"
            style={{
              top: img.top,
              left: img.left,
              width: img.size,
              height: img.size,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    );
  }