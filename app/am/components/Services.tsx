import {
  Code2,
  BrainCircuit,
  Workflow,
  Database,
  Plug,
  Megaphone,
  Camera,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Code2,
    title: "Ծրագրավորում և վեբ մշակում",
    description:
      "Հարմարեցված կայքեր, վեբ հավելվածներ, SaaS հարթակներ և բիզնես համակարգեր։",
  },
  {
    icon: BrainCircuit,
    title: "AI լուծումներ",
    description:
      "AI asistant-ներ, չաթբոթեր և խելացի, արհեստական բանականության վրա հիմնված լուծումներ Ձեր բիզնեսի համար։",
  },
  {
    icon: Workflow,
    title: "Բիզնեսի ավտոմատացում",
    description:
      "Ավտոմատացնում ենք կրկնվող գործընթացները, ծանուցումները և CRM workflow-ները։",
  },
  {
    icon: Database,
    title: "CRM և բիզնես համակարգեր",
    description:
      "Հարմարեցված CRM, dashboard-ներ և հաճախորդների կառավարման ներքին համակարգեր։",
  },
  {
    icon: Plug,
    title: "API և ինտեգրացիաներ",
    description:
      "Կապում ենք CRM, վճարային, AI և այլ երրորդ կողմի համակարգերը միմյանց հետ։",
  },
  {
    icon: Megaphone,
    title: "Թվային մարքեթինգ",
    description:
      "Սոցիալական մեդիա, թվային գովազդ, կոնտենտ ռազմավարություն և lead generation։",
  },
  {
    icon: Camera,
    title: "Լուսանկարչություն և վիզուալ կոնտենտ",
    description:
      "Պրոֆեսիոնալ բիզնես, արտադրանքի, բրենդի և սոցիալական մեդիայի լուսանկարներ։",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-white px-4 sm:px-6 py-14 sm:py-20 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023047]">
            Ինչ կարող ենք անել ձեր բիզնեսի համար
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 100}>
              <div className="h-full rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#209EBB]/30">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    index % 2 === 0
                      ? "bg-[#209EBB]/10 text-[#209EBB]"
                      : "bg-[#fc8500]/10 text-[#fc8500]"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-bold text-lg text-[#023047]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
