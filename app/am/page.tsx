import type { Metadata } from "next";
import SetHtmlLang from "./components/SetHtmlLang";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import BusinessValue from "./components/BusinessValue";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Nofeh Code Studio | Թվային լուծումներ բիզնեսի համար",
  },
  description:
    "Nofeh Code Studio-ն օգնում է հայկական բիզնեսներին ծրագրավորման, AI լուծումների, բիզնեսի ավտոմատացման, CRM համակարգերի, API ինտեգրումների, թվային մարքեթինգի և լուսանկարչության միջոցով։ Կապվեք մեզ հետ և զարգացրեք Ձեր բիզնեսը։",
  alternates: {
    canonical: "https://www.nofehstudio.com/am",
  },
  openGraph: {
    title: "Nofeh Code Studio | Թվային լուծումներ բիզնեսի համար",
    description:
      "Կայքեր, ծրագրային ապահովում, AI լուծումներ, ավտոմատացում, CRM, ինտեգրումներ, թվային մարքեթինգ և լուսանկարչություն՝ մեկ թիմից Հայաստանում։",
    url: "https://www.nofehstudio.com/am",
    siteName: "Nofeh Code Studio",
    locale: "hy_AM",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LandingPage() {
  return (
    <>
      <SetHtmlLang />
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Services />
        <WhyUs />
        <BusinessValue />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
