import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#023047] px-4 sm:px-6 py-8 sm:py-10 text-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-bold text-white">Nofeh Code Studio</p>
          <p className="mt-1 text-sm text-slate-300">
            <a href="tel:+37495838831" className="hover:text-[#209EBB]" dir="ltr">
              +374 95 838 831
            </a>
            {" · "}
            <a href="mailto:nofehcodestudio@gmail.com" className="hover:text-[#209EBB]" dir="ltr">
              nofehcodestudio@gmail.com
            </a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/share/1CoNkKtDE5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nofeh Code Studio Facebook-ում"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/nofeh_code_studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nofeh Code Studio Instagram-ում"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nofeh-code-studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nofeh Code Studio LinkedIn-ում"
            className="text-slate-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 pt-6 border-t border-white/10 text-center sm:text-left">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Nofeh Code Studio: Բոլոր իրավունքները պաշտպանված են։{" "}
          <Link href="/" className="underline hover:text-[#209EBB]">
            Վերադառնալ գլխավոր էջ
          </Link>
        </p>
      </div>
    </footer>
  );
}
