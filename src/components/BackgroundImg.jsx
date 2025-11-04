import React from 'react'
import { useMemo } from 'react'

const images = [
    { src: "/gwl-der_site/landingimages/3.png"},
    { src: "/gwl-der_site/landingimages/2.png"},
    { src: "/gwl-der_site/landingimages/4.png"},
    { src: "/gwl-der_site/landingimages/1.png"},
    { src: "/gwl-der_site/landingimages/5.png"},
    { src: "/gwl-der_site/landingimages/6.png"},
    { src: "/gwl-der_site/landingimages/7.png"},
    { src: "/gwl-der_site/landingimages/8.png"},
    { src: "/gwl-der_site/landingimages/9.png"},
    { src: "/gwl-der_site/landingimages/10.png"},
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