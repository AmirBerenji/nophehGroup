import type { Metadata } from "next";
import EventGallery from "./EventGallery";

export const metadata: Metadata = {
  title: "Events Photography",
  description:
    "Candid, high-energy event photography from Nofeh Code Studio that captures the moments that matter — conferences, workshops, and seminars.",
  alternates: {
    canonical: "https://www.nofehcodestudio.com/photography/event",
  },
  openGraph: {
    title: "Events Photography | Nofeh Code Studio",
    description:
      "Candid, high-energy event photography that captures the moments that matter.",
    url: "https://www.nofehcodestudio.com/photography/event",
  },
};

export default function Page() {
  return <EventGallery />;
}
