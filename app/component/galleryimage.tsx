"use client";
import React, { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "../models/galleryimage";

interface ImageMasonryGalleryProps {
  images: GalleryImage[];
  title?: string;
}

const ImageMasonryGallery: React.FC<ImageMasonryGalleryProps> = ({
  images,
  title = "Photo Gallery",
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleImages((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const openGallery = (index: number) => setSelectedIndex(index);
  const closeGallery = () => setSelectedIndex(null);
  const goToPrevious = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1
    );
  const goToNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0
    );

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeGallery();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            {title}
          </h1>
        )}

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              data-index={index}
              onClick={() => openGallery(index)}
              className={`break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg transition-all duration-700 ease-out hover:scale-[1.02] ${
                visibleImages.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % 4) * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt || ""}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white hover:bg-opacity-10 z-10"
              aria-label="Close gallery"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-white hover:bg-opacity-10 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image Display */}
            <div className="max-w-6xl max-h-[90vh] flex flex-col items-center">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt || ""}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
              />
              <div className="text-white mt-4 text-center">
                {images[selectedIndex].alt && <p className="text-lg"></p>}
                <p className="text-sm text-gray-400 mt-1">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-white hover:bg-opacity-10 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageMasonryGallery;
