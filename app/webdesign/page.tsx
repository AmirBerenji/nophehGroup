import Image from "next/image";

export default function SocialMediaPage() {
  return (
    <>
      <div className="w-full bg-slate-50 p-6 sm:p-12 lg:p-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/websitedesign.jpg"
              alt="Photography"
              className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-96 object-cover object-center  rounded-lg"
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
              In today's digital landscape, a compelling online presence is
              essential for business success. Our website and app design
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
    </>
  );
}
