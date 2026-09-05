import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const points = [
  "Ավելի քիչ ձեռքով աշխատանք",
  "Ավելի արդյունավետ գործընթացներ",
  "Ավելի լավ հաճախորդների կառավարում",
  "Ավելի ժամանակակից թվային ներկայություն",
  "Ավելի արագ աշխատանք",
  "Բիզնեսի աճի համար պատրաստ տեխնոլոգիական հիմք",
];

export default function BusinessValue() {
  return (
    <section id="value" className="w-full bg-white px-4 sm:px-6 py-14 sm:py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023047]">
            Ինչպես ենք օգնում ձեր բիզնեսին
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Մենք պարզապես կայքեր չենք ստեղծում։ Մենք ստեղծում ենք լուծումներ,
            որոնք օգնում են ձեր բիզնեսին աշխատել ավելի արագ, արդյունավետ և
            ժամանակակից ձևով։
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {points.map((point, index) => (
            <Reveal key={point} delay={(index % 2) * 100}>
              <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-5 py-4 transition-all duration-300 hover:bg-[#209EBB]/5">
                <CheckCircle2 className="w-5 h-5 text-[#209EBB] shrink-0" />
                <span className="text-sm sm:text-base font-medium text-[#023047]">
                  {point}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
