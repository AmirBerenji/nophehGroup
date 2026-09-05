"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail } from "lucide-react";
import Reveal from "./Reveal";

const CONTACT_EMAIL = "nofehcodestudio@gmail.com";
const CONTACT_PHONE_DISPLAY = "+374 95 838 831";
const CONTACT_PHONE_TEL = "+37495838831";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim()) {
      setError("Խնդրում ենք լրացնել Անուն և Հեռախոս դաշտերը։");
      return;
    }

    const subject = `Նոր հարցում Nofeh Code Studio-ի էջից՝ ${name}`;
    const bodyLines = [
      `Անուն: ${name}`,
      `Հեռախոս: ${phone}`,
      "",
      "Հաղորդագրություն:",
      message.trim() || "—",
    ];

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-white px-4 sm:px-6 py-14 sm:py-20 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023047]">
            Կապվեք մեզ հետ
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Թողեք Ձեր տվյալները, և մենք կկապվենք Ձեզ հետ հնարավորինս շուտ։
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Direct contact info */}
          <Reveal className="order-2 md:order-1 h-full">
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition-all duration-300 hover:border-[#209EBB]/40 hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#209EBB]/10 text-[#209EBB]">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-xs text-gray-500">Հեռախոս</p>
                  <p className="font-semibold text-[#023047]" dir="ltr">
                    {CONTACT_PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition-all duration-300 hover:border-[#209EBB]/40 hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fc8500]/10 text-[#fc8500]">
                  <Mail className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Էլ․ փոստ</p>
                  <p className="font-semibold text-[#023047] break-all" dir="ltr">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Form */}
          
        </div>
      </div>
    </section>
  );
}
