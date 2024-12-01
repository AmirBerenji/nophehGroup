import Image from "next/image";
import TopMenu from "../component/topmenu";
import BannerMainPage from "../component/banner";

import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default async function Home() {
  return (
    <>
      <TopMenu />

      <BannerMainPage />

      <section className="flex bg-[#fefefe] py-10">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10">
    {/* Text Content */}
    <div className="p-4 md:p-10 flex flex-col justify-center">
      <h2 className="font-bold text-xl md:text-2xl text-gray-800">
        Captivate your audience
      </h2>
      <p className="text-justify text-base md:text-lg mt-4 text-gray-700">
        Nopheh, based in Yerevan, AM, transforms brands through powerful imagery
        and strategic marketing. Our professional photography services showcase
        your unique story, while our tailored marketing strategies ensure your
        message resonates with your target audience. Elevate your brand’s visual
        identity and connect with your customers like never before. Let us help
        you make a lasting impression that drives engagement and growth.
      </p>
    </div>

    {/* Image */}
    <div className="overflow-hidden flex justify-center items-center">
      <Image
        src="/assets/likeboss.jpeg"
        alt="Hero1"
        width={500}
        height={500}
        className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
      />
    </div>
  </div>
</section>






      <section className="bg-gray-200 grid md:grid-cols-3 grid-cols-1 gap-7 p-9">
        {[
          {
            img: "/assets/brandphotography.jpeg",
            title: "Brand photography",
            description:
              "Transform your brand with stunning visuals that tell your story.",
          },
          {
            img: "/assets/socialmedia.jpeg",
            title: "Social media content creation",
            description:
              "Engage your audience with visually striking social media content.",
          },
          {
            img: "/assets/marketing.jpeg",
            title: "Marketing strategy",
            description:
              "Unlock your brand's potential with tailored marketing strategies.",
          },
        ].map((item, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            <div className="w-full max-w-sm h-auto bg-slate-50 border rounded-lg shadow-md">
              <div className="w-full h-56">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-t-lg"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="p-5">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer container>
        <div className="w-full text-center ">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Image src="/assets/logo.png" alt="logo" width={200} height={100} />
            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="Nopheh Group" year={2022} />
        </div>
      </Footer>
    </>
  );
}
