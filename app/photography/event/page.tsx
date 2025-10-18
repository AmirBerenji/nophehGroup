import { GalleryImage } from "@/app/models/galleryimage";
import ImageMasonryGallery from "../../component/galleryimage";

export default function Page() {
  const eventImages: GalleryImage[] = [
    {
      src: "/assets/images/event/event1.jpg",
      alt: "Event 1",
      orientation: "landscape",
    },
    {
      src: "/assets/images/event/event2.jpg",
      alt: "Event 2",
      orientation: "portrait",
    },
    {
      src: "/assets/images/event/event3.jpg",
      alt: "Event 3",
      orientation: "landscape",
    },
    {
      src: "/assets/images/event/event4.jpg",
      alt: "Event 4",
      orientation: "portrait",
    },
    {
      src: "/assets/images/event/event5.jpg",
      alt: "Event 5",
      orientation: "landscape",
    },

    {
      src: "/assets/images/event/event7.jpg",
      alt: "Event 5",
      orientation: "landscape",
    },

    {
      src: "/assets/images/event/event8.jpg",
      alt: "Event 5",
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
