import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="w-full px-4 sm:px-6 py-14 sm:py-20 bg-slate-50 overflow-hidden">
      <Reveal className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-[#023047] px-6 sm:px-10 py-12 sm:py-14 text-center overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#fc8500]/20 blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              Ունե՞ք գաղափար կամ բիզնես խնդիր։ Եկեք լուծենք այն միասին։
            </h2>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#fc8500] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#209EBB] hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] active:translate-y-0"
              >
                Կապվեք մեզ հետ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
