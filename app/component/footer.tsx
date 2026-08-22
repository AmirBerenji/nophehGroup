import { FooterCopyright } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Website & App Design", href: "/webdesign" },
  { label: "Marketing Strategy", href: "/marketing" },
  { label: "Brand Photography", href: "/photography" },
  { label: "Contact", href: "/#contactus" },
];

export default function Footer() {
  return (
    <div className="w-full bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:items-start">
        <Image src="/assets/logo.png" alt="Nofeh Code Studio logo" width={50} height={50} />

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#209EBB] transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 flex justify-center sm:justify-start">
        <FooterCopyright href="/" by="Nofeh Code Studio" year={2025} />
      </div>
    </div>
  );
}
