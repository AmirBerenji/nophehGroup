import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 min-w-0">
          <Image
            src="/assets/logo.png"
            alt="Nofeh Code Studio"
            width={36}
            height={36}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
          />
          <span className="font-bold text-sm sm:text-lg text-[#023047] truncate">
            Nofeh Code Studio
          </span>
        </div>

        {/* The ONLY navigation element on this page: back to the main website */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-[#023047] shrink-0 transition-all duration-300 hover:border-[#209EBB] hover:text-[#209EBB] active:scale-95"
        >
          <Home className="w-4 h-4" />
          Գլխավոր
        </Link>
      </div>
    </header>
  );
}
