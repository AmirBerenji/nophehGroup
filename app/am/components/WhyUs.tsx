import {
  Target,
  Cpu,
  ShieldCheck,
  BrainCircuit,
  Layers,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    icon: Target,
    title: "Անհատական մոտեցում",
    description: "Յուրաքանչյուր լուծում կառուցվում է հատուկ Ձեր բիզնեսի համար։",
  },
  {
    icon: Cpu,
    title: "Ժամանակակից տեխնոլոգիաներ",
    description: "Աշխատում ենք ամենաարդիական տեխնոլոգիաներով և գործիքներով։",
  },
  {
    icon: ShieldCheck,
    title: "Բիզնեսին համապատասխան լուծումներ",
    description: "Ոչ մի ավելորդ բարդություն, միայն այն, ինչ իրապես անհրաժեշտ է։",
  },
  {
    icon: BrainCircuit,
    title: "AI և ավտոմատացման փորձ",
    description: "Կիրառում ենք AI և ավտոմատացում՝ Ձեր գործընթացներն արագացնելու համար։",
  },
  {
    icon: Layers,
    title: "Տեխնոլոգիա և ստեղծարարություն մեկ վայրում",
    description: "Ծրագրավորում, դիզայն և մարքեթինգ՝ մեկ թիմից, մեկ վայրում։",
  },
  {
    icon: HeartHandshake,
    title: "Երկարաժամկետ աջակցություն",
    description: "Մնում ենք Ձեզ հետ նաև գործարկումից հետո։",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full bg-slate-50 px-4 sm:px-6 py-14 sm:py-20 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023047]">
            Ինչու՞ ընտրել Nofeh Code Studio
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <div className="h-full flex items-start gap-4 rounded-2xl bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#209EBB]/10 text-[#209EBB]">
                  <item.icon className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-[#023047]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
