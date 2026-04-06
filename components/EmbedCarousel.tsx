"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface EmbedSlide {
  url: string;
  title?: string;
}

interface EmbedCarouselProps {
  slides: EmbedSlide[];
}

export default function EmbedCarousel({ slides }: EmbedCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-2xl aspect-[4/3]" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              <iframe
                src={slide.url}
                title={slide.title ?? `Slide ${i + 1}`}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white z-10"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white z-10"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 text-dark" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
