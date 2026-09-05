"use client";
import { usePathname } from "next/navigation";
import TopMenu from "./topmenu";
import Footer from "./footer";

/**
 * Wraps the main website's chrome (top navigation + footer).
 *
 * The `/am` route is a standalone advertising landing page and must NOT
 * show the main website's navigation or footer — it ships its own
 * self-contained header/footer instead. Every other route keeps the
 * exact same TopMenu + Footer it always had.
 */
export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneLanding = pathname === "/am" || pathname?.startsWith("/am/");

  if (isStandaloneLanding) {
    return <>{children}</>;
  }

  return (
    <>
      <TopMenu />
      {children}
      <Footer />
    </>
  );
}
