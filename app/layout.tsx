import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import "./globals.css";
import TopMenu from "./component/topmenu";
import Footer from "./component/footer";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default:
      "Nofeh Code Studio | Photography, Web Design, Mobile Apps & Marketing",
    template: "%s | Nofeh Code Studio",
  },
  description:
    "Nofeh Code Studio offers professional photography, custom web design, mobile app development, and digital marketing services. Transform your digital presence with our expert solutions.",
  keywords: [
    "photography services",
    "web design",
    "mobile app development",
    "digital marketing",
    "Nofeh Code Studio",
    "custom website design",
    "iOS app development",
    "Android app development",
    "SEO services",
    "brand photography",
    "UI/UX design",
    "e-commerce development",
    "social media marketing",
  ],
  authors: [{ name: "Amir Berenji" }],
  creator: "Nofeh Code Studio",
  publisher: "Nofeh Code Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.nofehcodestudio.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Nofeh Code Studio | Photography, Web Design, Mobile Apps & Marketing",
    description:
      "Transform your digital presence with professional photography, custom web design, mobile app development, and digital marketing services.",
    url: "https://www.nofehcodestudio.com",
    siteName: "Nofeh Code Studio",
    images: [
      {
        url: "/og-image.jpg", // Add your Open Graph image
        width: 1200,
        height: 630,
        alt: "Nofeh Code Studio - Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nofeh Code Studio | Photography, Web Design, Mobile Apps & Marketing",
    description:
      "Professional photography, web design, mobile apps & marketing services.",
    images: ["/twitter-image.jpg"], // Add your Twitter card image
    creator: "@nofehcodestudio", // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=vTdq19hKmIpPZqaIYAVG8NTj_4LcxWTGX2N05IWFSkQ", // Add Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "technology",
  other: {
    "geo.region": "AM-ER", // Armenia - Yerevan
    "geo.placename": "Yerevan",
    "geo.position": "40.1776;44.5126", // Yerevan coordinates
    ICBM: "40.1776, 44.5126",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags that can't be added via Metadata API */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <TopMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
