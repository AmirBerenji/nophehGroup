"use client";
import { useEffect } from "react";

/**
 * The shared root layout sets <html lang="en"> for the whole website.
 * This page's content is entirely Armenian, so we switch the document
 * language while this page is mounted and restore it on unmount —
 * without touching the shared root layout's default for every other page.
 */
export default function SetHtmlLang() {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = "hy";
    return () => {
      document.documentElement.lang = previousLang;
    };
  }, []);

  return null;
}
