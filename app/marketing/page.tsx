import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Megaphone, Target, CheckCircle2, ArrowRight, Search, BarChart3, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing Strategy",
  description:
    "Marketing strategy consultation from Nofeh Code Studio — audience research, brand positioning, and data-driven campaign strategy that turns attention into customers.",
  alternates: {
    canonical: "https://www.nofehcodestudio.com/marketing",
  },
  openGraph: {
    title: "Marketing Strategy | Nofeh Code Studio",
    description:
      "Audience research, brand positioning, and data-driven campaign strategy that turns attention into customers.",
    url: "https://www.nofehcodestudio.com/marketing",
  },
};

export default function MarketinPage() {
  const features = [
    "Audience & competitor research",
    "Brand positioning that stands out",
    "Channel-by-channel strategy",
    "Data-driven, measurable results",
  ];

  const offerings = [
    {
      icon: Search,
      title: "Audience research",
      description: "We identify who your customers are and what makes them act.",
    },
    {
      icon: Target,
      title: "Brand positioning",
      description: "A clear, consistent message that sets you apart from competitors.",
    },
    {
      icon: BarChart3,
      title: "Campaign strategy",
      description: "Targeted plans across the channels that matter most to your goals.",
    },
    {
      icon: Repeat,
      title: "Ongoing optimization",
      description: "We track performance and refine the approach as results come in.",
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

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#fc8500]/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-[#209EBB]/10 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Section */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fc8500]/10 border border-[#fc8500]/30 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#fc8500]">
              <Megaphone className="w-4 h-4" />
              MARKETING STRATEGY
            </span>

            <h1 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#023047]">
              Strategies that turn attention into{" "}
              <span className="text-[#fc8500]">customers</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-left">
              We analyze your brand&apos;s strengths and weaknesses to build a
              marketing strategy that actually fits your business. From
              identifying your ideal audience to optimizing every channel,
              we guide you with data-driven decisions that turn your vision
              into real, measurable growth.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-700 text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#fc8500] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/#contactus"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#023047] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#fc8500]"
              >
                Book a consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#what-we-offer"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-semibold text-[#023047] transition-colors duration-300 hover:border-[#fc8500] hover:text-[#fc8500]"
              >
                See what we offer
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#fc8500]/20 to-[#209EBB]/20 blur-2xl"></div>
              <Image
                src="/assets/marketing.jpg"
                alt="Marketing strategy consultation"
                className="relative w-full h-80 sm:h-96 object-cover object-center rounded-3xl shadow-2xl ring-1 ring-black/5"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <Target className="w-6 h-6 text-[#fc8500]" />
                <p className="text-sm font-semibold text-[#023047]">
                  Targeted, data-driven strategy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#fc8500]">
              What we offer
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#023047]">
              A strategy built around your business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#fc8500]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fc8500]/10 text-[#fc8500] transition-colors duration-300 group-hover:bg-[#fc8500] group-hover:text-white">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold text-lg text-[#023047]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
