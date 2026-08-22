import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function BannerMainPage() {
  return (
    <section
      className="relative h-screen w-full bg-transparent flex flex-col justify-center items-center text-center md:text-left"
      id="home"
    >
      <div className="text-slate-100 px-6 md:px-20 lg:px-56">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-100/30 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-100/80">
          Creative &amp; Digital Studio &middot; Yerevan, Armenia
        </span>

        <h2 className="mt-6 font-bold text-4xl md:text-6xl lg:text-7xl">
          <span className="ml-3 text-4xl md:text-6xl lg:text-7xl text-[#209EBB]">
            NOFEH
          </span>
          <span className="ml-2 text-xl md:text-2xl lg:text-4xl text-[#fc8500]">
            Code Studio
          </span>
        </h2>
        <p className="mt-5 text-xl md:text-2xl lg:text-3xl text-[#fc8500]">
          Where code feels and images speak
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="#service"
            className="inline-flex items-center justify-center rounded-full bg-[#209EBB] px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-[#fc8500]"
          >
            View our work
          </Link>
          <Link
            href="#contactus"
            className="inline-flex items-center justify-center rounded-full border border-slate-100/40 px-6 py-3 font-semibold text-slate-100 transition-colors duration-300 hover:border-[#fc8500] hover:text-[#fc8500]"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to learn more"
        className="absolute bottom-8 animate-bounce text-slate-100/70 transition-colors hover:text-slate-100"
      >
        <ChevronDown className="w-8 h-8" />
      </Link>
    </section>
  );
}
