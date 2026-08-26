import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, CheckCircle2, ArrowRight, MapPin, PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Photography",
  description:
    "Professional brand, product, real estate, and event photography from Nofeh Code Studio — images that build trust and make your brand unforgettable.",
  alternates: {
    canonical: "https://www.nofehstudio.com/photography",
  },
  openGraph: {
    title: "Brand Photography | Nofeh Code Studio",
    description:
      "Professional brand, product, real estate, and event photography that build trust and make your brand unforgettable.",
    url: "https://www.nofehstudio.com/photography",
  },
};

export default function PhotographyPage() {
  const features = [
    "Brand & product photography",
    "Real estate & interior shoots",
    "Full event coverage",
    "Fast turnaround & editing",
  ];

  const categories = [
    {
      title: "Product Photography",
      description: "Clean, detail-focused shots that make your products sell themselves.",
      img: "/assets/product.jpg",
      href: "/photography/product",
      icon: Camera,
    },
    {
      title: "Property Photography",
      description: "Real estate and interior photos that highlight every space at its best.",
      img: "/assets/property.jpg",
      href: "/photography/property",
      icon: MapPin,
    },
    {
      title: "Events Photography",
      description: "Candid, high-energy coverage that captures the moments that matter.",
      img: "/assets/events.jpg",
      href: "/photography/event",
      icon: PartyPopper,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#209EBB]/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-[#fc8500]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#209EBB]/10 border border-[#209EBB]/30 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#209EBB]">
              <Camera className="w-4 h-4" />
              BRAND PHOTOGRAPHY
            </span>

            <h1 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#023047]">
              Make your brand{" "}
              <span className="text-[#209EBB]">unforgettable</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-left">
              Our team specializes in brand, event, real estate, interior
              design, food, and product photography. We capture the true
              essence of your brand, creating images that build trust and
              attract attention &mdash; from every detail to the final
              composition.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-700 text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#209EBB] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#contactus"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#023047] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#209EBB]"
              >
                Book a shoot
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#categories"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#023047] transition-colors duration-300 hover:border-[#209EBB] hover:text-[#209EBB]"
              >
                View categories
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#209EBB]/20 to-[#fc8500]/20 blur-2xl"></div>
              <Image
                src="/assets/brandphotography.jpg"
                alt="Brand photography"
                width={800}
                height={600}
                className="relative w-full h-80 sm:h-96 object-cover object-center rounded-3xl shadow-2xl ring-1 ring-black/5"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <Camera className="w-6 h-6 text-[#209EBB]" />
                <p className="text-sm font-semibold text-[#023047]">
                  Every detail, captured
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="relative bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#209EBB]">
              Explore our work
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#023047]">
              Photography for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link href={category.href} key={category.title} className="group">
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={category.img}
                      alt={category.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#209EBB]/20 to-[#209EBB]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    <div className="absolute top-0 left-0 h-0 w-1 bg-[#209EBB] transition-all duration-500 group-hover:h-full"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-[#023047]">
                        {category.title}
                      </h3>
                      <ArrowRight className="mt-1 w-6 h-6 text-[#023047] opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {category.description}
                    </p>
                    <div className="mt-6 h-0.5 w-0 bg-[#209EBB] transition-all duration-500 group-hover:w-full"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
