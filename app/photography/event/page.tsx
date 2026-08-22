"use client";

import { GalleryImage } from "@/app/models/galleryimage";
import ImageMasonryGallery from "../../component/galleryimage";
import { useState } from "react";

// Extend GalleryImage to include category
interface CategorizedGalleryImage extends GalleryImage {
  category: string;
}

export default function Page() {
  const eventImages: CategorizedGalleryImage[] = [
    {
      src: "/assets/images/event/event1.jpg",
      alt: "Event 1",
      orientation: "landscape",
      category: "Conference",
    },
    {
      src: "/assets/images/event/event2.jpg",
      alt: "Event 2",
      orientation: "portrait",
      category: "Workshop",
    },
    {
      src: "/assets/images/event/event3.jpg",
      alt: "Event 3",
      orientation: "landscape",
      category: "Conference",
    },
    {
      src: "/assets/images/event/event4.jpg",
      alt: "Event 4",
      orientation: "portrait",
      category: "Seminar",
    },
    {
      src: "/assets/images/event/event5.jpg",
      alt: "Event 5",
      orientation: "landscape",
      category: "Workshop",
    },
    {
      src: "/assets/images/event/event7.jpg",
      alt: "Event 7",
      orientation: "landscape",
      category: "Conference",
    },
    {
      src: "/assets/images/event/event8.jpg",
      alt: "Event 8",
      orientation: "landscape",
      category: "Seminar",
    },
  ];

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(eventImages.map(img => img.category)))];
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All" 
    ? eventImages 
    : eventImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <ImageMasonryGallery
        images={filteredImages}
        title="Events Photography"
        subtitle="Candid, high-energy coverage that captures the moments that matter."
        backHref="/photography"
        backLabel="Back to Photography"
      >
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#209EBB] text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-[#209EBB]/50 hover:text-[#209EBB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ImageMasonryGallery>
    </>
  );
}