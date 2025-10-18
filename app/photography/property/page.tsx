import ImageMasonryGallery from "@/app/component/galleryimage";
import { GalleryImage } from "@/app/models/galleryimage";

export default function Page() {
  const eventImages: GalleryImage[] = [
    {
      src: "/assets/images/property/property1.jpg",
      alt: "property 1",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property2.jpg",
      alt: "property 2",
      orientation: "portrait",
    },
    {
      src: "/assets/images/property/property3.jpg",
      alt: "property 3",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property4.jpg",
      alt: "property 4",
      orientation: "portrait",
    },
    {
      src: "/assets/images/property/property5.jpg",
      alt: "property 5",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property6.jpg",
      alt: "property 6",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property7.jpg",
      alt: "property 7",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property8.jpg",
      alt: "property 8",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property9.jpg",
      alt: "property 9",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property10.jpg",
      alt: "property 10",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property11.jpg",
      alt: "property 11",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property12.jpg",
      alt: "property 12",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property13.jpg",
      alt: "property 13",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property14.jpg",
      alt: "property 14",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property15.jpg",
      alt: "property 15",
      orientation: "landscape",
    },

    {
      src: "/assets/images/property/property16.jpg",
      alt: "property 16",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property17.jpg",
      alt: "property 17",
      orientation: "portrait",
    },
    {
      src: "/assets/images/property/property18.jpg",
      alt: "property 18",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property19.jpg",
      alt: "property 19",
      orientation: "portrait",
    },
    {
      src: "/assets/images/property/property20.jpg",
      alt: "property 20",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property21.jpg",
      alt: "property 21",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property22.jpg",
      alt: "property 22",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property23.jpg",
      alt: "property 23",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property24.jpg",
      alt: "property 24",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property25.jpg",
      alt: "property 25",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property26.jpg",
      alt: "property 26",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property27.jpg",
      alt: "property 27",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property28.jpg",
      alt: "property 28",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property29.jpg",
      alt: "property 29",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property30.jpg",
      alt: "property 30",
      orientation: "landscape",
    },

    {
      src: "/assets/images/property/property31.jpg",
      alt: "property 31",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property32.jpg",
      alt: "property 32",
      orientation: "portrait",
    },
    {
      src: "/assets/images/property/property33.jpg",
      alt: "property 33",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property34.jpg",
      alt: "property 34",
      orientation: "portrait",
    },
    {
      src: "/assets/images/property/property35.jpg",
      alt: "property 35",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property36.jpg",
      alt: "property 36",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property37.jpg",
      alt: "property 37",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property38.jpg",
      alt: "property 38",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property39.jpg",
      alt: "property 39",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property40.jpg",
      alt: "property 40",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property41.jpg",
      alt: "property 41",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property42.jpg",
      alt: "property 42",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property43.jpg",
      alt: "property 43",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property44.jpg",
      alt: "property 44",
      orientation: "landscape",
    },
    {
      src: "/assets/images/property/property45.jpg",
      alt: "property 45",
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
