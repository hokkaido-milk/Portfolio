"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  aspectRatio?: "video" | "square";
}

export function ImageCarousel({ images, aspectRatio = "video" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const goToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToIndex = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const aspectClass = aspectRatio === "video" ? "aspect-video" : "aspect-square";

  return (
    <>
      <div className="relative group">
        {/* Carousel Container */}
        <div 
          className={`relative ${aspectClass} w-full overflow-hidden bg-secondary cursor-pointer`}
          onClick={openLightbox}
        >
          {/* Sliding Track - contains all images side by side */}
          <div 
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ 
              width: `${images.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / images.length)}%)` 
            }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative h-full flex-shrink-0"
                style={{ width: `${100 / images.length}%` }}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 border border-border text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground hover:border-primary"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Indicator dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToIndex(index);
                }}
                className={`w-2 h-2 transition-all ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-foreground/40 hover:bg-foreground/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 font-mono text-sm text-muted-foreground">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Main image container */}
          <div 
            className="relative w-full h-full max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox sliding track */}
            <div 
              className="flex h-full transition-transform duration-300 ease-in-out"
              style={{ 
                width: `${images.length * 100}%`,
                transform: `translateX(-${currentIndex * (100 / images.length)}%)` 
              }}
            >
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative h-full flex-shrink-0 flex items-center justify-center"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    priority={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lightbox navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox indicator dots */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToIndex(index);
                  }}
                  className={`w-2 h-2 transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-foreground/40 hover:bg-foreground/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
