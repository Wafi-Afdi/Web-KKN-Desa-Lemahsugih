'use client'
import React, { useState } from 'react';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";


function GaleriDesa(
  {
    images
  }
) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-h-4xl  rounded-sm">
      <div className="relative group aspect-video  overflow-hidden rounded-lg bg-black/80">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-contain transition-opacity duration-500"
        />

        <button
          onClick={goToPrev}
          className="absolute left-0 top-0 bottom-0 px-4 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <FaCaretLeft size={48} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-0 bottom-0 px-4 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <FaCaretRight size={48} />
        </button>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 custom-scrollbar">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 w-24 aspect-video bg-black border-2 transition-all ${
              currentIndex === index ? 'border-blue-400 scale-105' : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img} className="w-full h-full object-contain" alt="thumbnail" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default GaleriDesa