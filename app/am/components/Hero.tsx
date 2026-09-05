import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-gradient-to-b from-[#209EBB]/[0.06] to-white px-4 sm:px-6 py-14 sm:py-20 lg:py-24 scroll-mt-16 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <Reveal className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full bg-[#209EBB]/10 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#209EBB]">
            Nofeh Code Studio
          </span>

          <h1 className="mt-5 font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#023047]">
            Ձեր բիզնեսի համար ստեղծում ենք{" "}
            <span className="text-[#209EBB]">ժամանակակից թվային լուծումներ</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Կայքեր, ծրագրային ապահովում, AI լուծումներ, բիզնեսի ավտոմատացում,
            CRM համակարգեր, API ինտեգրումներ, թվային մարքեթինգ և պրոֆեսիոնալ
            լուսանկարչություն՝ ամեն ինչ մեկ վստահելի թիմից։
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#209EBB] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-[#209EBB]/20 transition-all duration-300 hover:bg-[#fc8500] hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
            >
              Կապվեք մեզ հետ
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-4 text-base font-semibold text-[#023047] transition-all duration-300 hover:border-[#209EBB] hover:text-[#209EBB] hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
            >
              Իմանալ ավելին
            </Link>
          </div>
        </Reveal>

        {/* Photo */}
        <Reveal delay={150} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#209EBB]/20 to-[#fc8500]/20 blur-2xl"></div>
            <Image
              src="/assets/likeboss.jpg"
              alt="Nofeh Code Studio թիմ"
              className="relative w-full h-72 sm:h-80 lg:h-96 object-cover object-center rounded-3xl shadow-2xl ring-1 ring-black/5"
              width={0}
              height={0}
              sizes="100vw"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
