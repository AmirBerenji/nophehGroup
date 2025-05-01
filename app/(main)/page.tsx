import Head from "next/head";
import BannerMainPage from "../component/banner";
import Description from "../component/description";
import Card from "../component/card";
import ContactUs from "../component/contactus";

export default async function Home() {
  return (
    <>
      <Head>
        <title>
          Nofeh Code Studio | Mobile Apps, Programming, Photography, Advertising
        </title>
        <meta
          name="description"
          content="Nofeh Code Studio specializes in software development, mobile app creation, professional photography, and creative advertising services in Madrid and globally."
        />
        <meta
          name="keywords"
          content="Nofeh Code Studio, Nofeh Studio, programming, mobile apps, software development, photography, advertising, videography, branding, Madrid, creative agency"
        />
        <meta name="author" content="Nofeh Code Studio" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Nofeh Code Studio | Creative & Digital Services"
        />
        <meta
          property="og:description"
          content="We build mobile apps, offer expert software solutions, and provide photography and advertising services to help your brand grow."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.nofehstudio.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nofeh Studio | Creative & Digital Services"
        />
        <meta
          name="twitter:description"
          content="Expert mobile app development, software programming, photography, and advertising from Armenia."
        />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Head>

      <BannerMainPage />
      <Description />
      <Card />
      <ContactUs />
    </>
  );
}
