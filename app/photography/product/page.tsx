import ImageMasonryGallery from "@/app/component/galleryimage";
import { GalleryImage } from "@/app/models/galleryimage";

export default function Page() {
  const eventImages: GalleryImage[] = [
    {
      src: "/assets/images/product/product1.jpg",
      alt: "product 1",
      orientation: "landscape",
    },
    {
      src: "/assets/images/product/product2.jpg",
      alt: "product 2",
      orientation: "portrait",
    },
    {
      src: "/assets/images/product/product3.jpg",
      alt: "product 3",
      orientation: "landscape",
    },
    {
      src: "/assets/images/product/product4.jpg",
      alt: "product 4",
      orientation: "portrait",
    },
    {
      src: "/assets/images/product/product5.jpg",
      alt: "product 5",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product6.jpg",
      alt: "product 6",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product7.jpg",
      alt: "product 7",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product8.jpg",
      alt: "product 8",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product9.jpg",
      alt: "product 9",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product10.jpg",
      alt: "product 10",
      orientation: "landscape",
    },
    {
      src: "/assets/images/product/product11.jpg",
      alt: "product 11",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product12.jpg",
      alt: "product 12",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product13.jpg",
      alt: "product 13",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product14.jpg",
      alt: "product 14",
      orientation: "landscape",
    },

    {
      src: "/assets/images/product/product15.jpg",
      alt: "product 15",
      orientation: "landscape",
    },
  ] as const;

  return (
    <>
      <section className="">
        <ImageMasonryGallery images={eventImages} />
      </section>
    </>
  );
}
