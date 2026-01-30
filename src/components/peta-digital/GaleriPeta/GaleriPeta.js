'use client'
import React, { useState } from 'react';
import { FaCaretRight, FaCaretLeft, FaSearchPlus, FaSearchMinus, FaUndo } from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function GaleriPeta({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="max-h-4xl rounded-sm">
      <div className="relative group aspect-video overflow-hidden rounded-lg bg-black/90">
        
        {/* Zoom Component Wrapper */}
        <TransformWrapper
          key={currentIndex} // Resets zoom level when image changes
          initialScale={1}
          minScale={1}
          maxScale={4}
        >
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
              {/* Zoom Controls (Visible on Hover) */}
              <div className="absolute top-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => zoomIn()} className="p-2 bg-white/20 hover:bg-white/40 text-white rounded shadow-sm"><FaSearchPlus /></button>
                <button onClick={() => zoomOut()} className="p-2 bg-white/20 hover:bg-white/40 text-white rounded shadow-sm"><FaSearchMinus /></button>
                <button onClick={() => resetTransform()} className="p-2 bg-white/20 hover:bg-white/40 text-white rounded shadow-sm"><FaUndo /></button>
              </div>

              {/* Main Image Area */}
              <TransformComponent
                wrapperClass="!w-full !h-full"
                contentClass="w-auto h-full flex items-center justify-center cursor-zoom-in active:cursor-grabbing"
              >
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="w-auto h-full object-contain"
                />
              </TransformComponent>

              {/* Navigation Arrows (Outside TransformComponent to stay fixed) */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-0 bottom-0 z-10 px-4 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaCaretLeft size={48} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-0 bottom-0 z-10 px-4 bg-black/20 hover:bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaCaretRight size={48} />
              </button>
            </>
          )}
        </TransformWrapper>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
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

export default GaleriPeta;