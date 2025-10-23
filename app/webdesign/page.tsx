"use client"
import Image from "next/image";

export default function SocialMediaPage() {
  // Sample customer data - replace with your actual customer logos and URLs
  const customers = [
    { id: 1, name: "El rincon del sabor", logo: "/assets/images/customer/elrincon.png", url: "https://elrincondsabor.es/" },
    { id: 2, name: "Kidoo Hub", logo: "/assets/images/customer/kidoohub.png", url: "https://kidoohub.com/en" },
    { id: 3, name: "Maral Amirkian", logo: "/assets/images/customer/maral.png", url: "https://maralamirkian.com/" },
    { id: 4, name: "Movement", logo: "/assets/images/customer/movement.png", url: "https://movement.college/" },

  ];

  const handleLogoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <>
      <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end mt-20 lg:mt-0">
            <Image
              src="/assets/websitedesign.jpg"
              alt="Photography"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-96 object-cover object-center rounded-lg"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-5 text-center lg:text-left">
              Website and App Design
            </h2>
            <p className="text-sm sm:text-base text-justify lg:text-justify leading-relaxed">
              In today&apos;s digital landscape, a compelling online presence
              is essential for business success. Our website and app design
              services focus on creating visually stunning and user-friendly
              interfaces that captivate your audience and drive engagement. We
              blend creativity with functionality, ensuring that every design
              element serves a purpose and enhances the overall user experience.
              From intuitive navigation to responsive layouts, we tailor our
              designs to meet your specific business goals and target audience.
              Let us help you build a digital platform that not only looks great
              but also converts visitors into loyal customers.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Logos Section */}
      <div className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 py-10 sm:py-16 md:py-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="flex items-center justify-center p-2 sm:p-4"
          >
            <div className="rounded-full h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 bg-slate-50 border p-4 sm:p-6 md:p-8 flex items-center justify-center">
              <Image
                src={customer.logo}
                alt={customer.name}
                width={150}
                height={150}
                className="mx-auto w-20 sm:w-28 md:w-36 cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => handleLogoClick(customer.url)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}