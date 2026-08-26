import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Code2, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Website & App Design",
  description:
    "Custom website and mobile app design services from Nofeh Code Studio — responsive, SEO-friendly, user-focused designs that turn visitors into customers.",
  alternates: {
    canonical: "https://www.nofehstudio.com/webdesign",
  },
  openGraph: {
    title: "Website & App Design | Nofeh Code Studio",
    description:
      "Custom website and mobile app design services — responsive, SEO-friendly, user-focused designs that turn visitors into customers.",
    url: "https://www.nofehstudio.com/webdesign",
  },
};

export default function WebDesignPage() {
  // Sample customer data - replace with your actual customer logos and URLs
  const customers = [
    { id: 1, name: "El rincon del sabor", logo: "/assets/images/customer/elrincon.png", url: "https://elrincondsabor.es/" },
    { id: 2, name: "Kidoo Hub", logo: "/assets/images/customer/kidoohub.png", url: "https://kidoohub.com/en" },
    { id: 3, name: "Maral Amirkian", logo: "/assets/images/customer/maral.png", url: "https://maralamirkian.com/" },
    { id: 4, name: "Findo hub", logo: "/assets/images/customer/findo.png", url: "https://findohub.com/" },
    { id: 5, name: "Pety hub", logo: "/assets/images/customer/petyhub.png", url: "https://petyhub.com/" },
    { id: 6, name: "AURELIE", logo: "/assets/images/customer/aurelie.png", url: "https://bridal-inky.vercel.app/" },
    { id: 7, name: "Movement", logo: "/assets/images/customer/movement.png", url: "https://movement.college/crm" },
  ];

  const features = [
    "Responsive, mobile-first layouts",
    "SEO-friendly structure & speed",
    "Custom UI/UX, not templates",
    "Ongoing support & maintenance",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
        {/* Subtle dot pattern, matches homepage services section */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Decorative color blobs */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-400/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-[#209EBB]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-400/10 border border-green-400/30 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-green-600">
              <Code2 className="w-4 h-4" />
              WEBSITE &amp; APP DESIGN
            </span>

            <h1 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#023047]">
              Designs that turn visitors into{" "}
              <span className="text-green-500">customers</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-left">
              We blend creativity with functionality to create visually
              stunning, user-friendly websites and apps that captivate your
              audience and drive engagement. Every element is tailored to
              your business goals so your digital platform doesn&apos;t just
              look great &mdash; it converts.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-700 text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#contactus"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#023047] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-green-500"
              >
                Start your project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#our-clients"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#023047] transition-colors duration-300 hover:border-green-400 hover:text-green-600"
              >
                See our work
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-400/20 to-[#209EBB]/20 blur-2xl"></div>
              <Image
                src="/assets/websitedesign.jpg"
                alt="Website and app design"
                className="relative w-full h-80 sm:h-96 object-cover object-center rounded-3xl shadow-2xl ring-1 ring-black/5"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-2xl font-bold text-[#023047]">{customers.length}+</p>
                <p className="text-xs text-gray-500">Happy clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section id="our-clients" className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-green-500">
              Trusted by
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#023047]">
              Brands we&apos;ve helped grow online
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {customers.map((customer) => (
              <a
                key={customer.id}
                href={customer.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${customer.name}`}
                className="group flex w-28 sm:w-32 flex-col items-center gap-3"
              >
                <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-400/50 group-hover:shadow-lg">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {customer.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
