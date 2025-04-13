import { FooterCopyright } from "flowbite-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-slate-50 py-8">
      <div className="flex flex-col items-center max-w-6xl mx-auto sm:flex-row sm:justify-between sm:items-center">
        <div className="mb-4 sm:mb-0">
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        </div>
        <FooterCopyright href="#" by="Nopheh Group" year={2024} />
      </div>
    </div>
  );
}
